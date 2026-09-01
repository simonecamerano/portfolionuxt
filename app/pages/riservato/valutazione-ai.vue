<!-- app/pages/riservato/valutazione-ai.vue -->
<script setup lang="ts">
useSeoMeta({ robots: 'noindex, nofollow' })

const route = useRoute()
const inviato = ref(false)
const errore = ref('')
const invioInCorso = ref(false)

const form = reactive({
  nome: '', telefono: '', email: '', azienda: '', messaggio: '',
  consenso: false, honeypot: '',
})

const puntiFiducia = [
  'Chiamata conoscitiva gratuita, senza impegno',
  'Solo se ha senso, una sessione diagnostica a prezzo contenuto, con un piano scritto a fine incontro',
  'Ti richiamo entro 24 ore lavorative',
]

const { accettato, richiediSeNecessario } = useConsensoTracciamento()
onMounted(richiediSeNecessario)
watch(accettato, (attivo) => {
  if (attivo) iniettaPixel()
}, { immediate: true })

// Il Pixel viene iniettato SOLO da questa funzione, SOLO quando il consenso
// nel composable useConsensoTracciamento è esplicitamente 'true' (scelta
// salvata dal banner, mai assunta di default). Vedi Premortem #1 del piano,
// e la sentenza di Dresda citata nello spec.
function iniettaPixel() {
  if (document.getElementById('meta-pixel-script')) return
  const script = document.createElement('script')
  script.id = 'meta-pixel-script'
  script.innerHTML = `
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1591505489274762');
    fbq('track', 'PageView');
  `
  document.head.appendChild(script)
}

async function inviaForm() {
  errore.value = ''
  invioInCorso.value = true
  try {
    await $fetch('/api/lead', {
      method: 'POST',
      body: {
        ...form,
        utm_source: route.query.utm_source,
        utm_medium: route.query.utm_medium,
        utm_campaign: route.query.utm_campaign,
      },
    })
    inviato.value = true
    if ((window as any).fbq) (window as any).fbq('track', 'Lead')
  } catch (e: any) {
    errore.value = e?.data?.message ?? 'Qualcosa è andato storto. Riprova.'
  } finally {
    invioInCorso.value = false
  }
}
</script>

<template>
  <div class="relative min-h-screen overflow-hidden pt-16">
    <!-- Radial background glows, coerenti con l'hero della home -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        class="absolute top-1/4 -left-20 w-[700px] h-[700px] rounded-full blur-3xl animate-glow-pulse"
        style="background: radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%);"
      />
      <div
        class="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl animate-glow-pulse"
        style="background: radial-gradient(circle, rgba(139,92,246,0.16), transparent 70%); animation-delay: 2s;"
      />
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 py-16 sm:py-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">

      <!-- ── Sinistra: proposta ─────────────────────────────────── -->
      <!-- pt-8 compensa il padding interno della card del form a destra
           (p-8), così i due badge in alto sono alla stessa altezza reale,
           non solo i contenitori della grid. -->
      <div class="flex flex-col gap-7 pt-8">
        <span
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium w-fit"
          style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.28); color: #c4b5fd;"
        >
          Diagnosi AI per PMI
        </span>

        <h1 class="text-4xl sm:text-5xl font-extrabold leading-[1.12] tracking-tight text-[#f0f0f5]">
          Scopri se l'<span class="text-gradient">AI</span> conviene davvero alla tua PMI
        </h1>

        <p class="text-lg text-[#8a8a9a] leading-relaxed max-w-md">
          26 anni di esperienza operativa in Grande Distribuzione, prima di passare
          allo sviluppo software: non solo teoria sull'AI, ma processi aziendali
          reali. Una chiamata gratuita per capire, senza impegno, dove
          l'automazione ti fa risparmiare tempo, e dove no.
        </p>

        <div class="flex flex-col gap-4 pt-1">
          <div
            v-for="punto in puntiFiducia"
            :key="punto"
            class="flex items-start gap-3"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" class="flex-shrink-0 mt-0.5" aria-hidden="true">
              <circle cx="10" cy="10" r="9" fill="none" stroke="#8b5cf6" stroke-width="1.5" />
              <path d="M6 10.2l2.4 2.4L14 7" fill="none" stroke="#8b5cf6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="text-[15px] text-[#d0d0e0] leading-relaxed">{{ punto }}</span>
          </div>
        </div>
      </div>

      <!-- ── Destra: form ───────────────────────────────────────── -->
      <div>
        <form
          v-if="!inviato"
          class="glass rounded-3xl p-8 flex flex-col gap-5"
          style="border-color: rgba(255,255,255,0.08);"
          aria-label="Prenotazione chiamata gratuita di valutazione AI"
          @submit.prevent="inviaForm"
        >
          <span
            class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] w-fit"
            style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25); color: #c4b5fd;"
          >
            Prenota la chiamata gratuita
          </span>

          <input v-model="form.honeypot" type="text" name="azienda_web" class="hidden" tabindex="-1" autocomplete="off">

          <div class="flex flex-col gap-2">
            <label for="val-nome" class="text-sm font-medium text-[#8a8a9a]">Nome e cognome <span class="text-purple-400" aria-hidden="true">*</span></label>
            <input
              id="val-nome" v-model="form.nome" type="text" required autocomplete="name" placeholder="Mario Rossi"
              class="input-field px-4 py-3 rounded-xl text-sm text-[#f0f0f5] placeholder-[#3a3a4a] outline-none transition-all duration-200"
              style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);"
            >
          </div>

          <div class="flex flex-col gap-2">
            <label for="val-telefono" class="text-sm font-medium text-[#8a8a9a]">Telefono <span class="text-purple-400" aria-hidden="true">*</span></label>
            <input
              id="val-telefono" v-model="form.telefono" type="tel" required autocomplete="tel" placeholder="333 1234567"
              class="input-field px-4 py-3 rounded-xl text-sm text-[#f0f0f5] placeholder-[#3a3a4a] outline-none transition-all duration-200"
              style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);"
            >
          </div>

          <div class="flex flex-col gap-2">
            <label for="val-email" class="text-sm font-medium text-[#8a8a9a]">Email <span class="text-purple-400" aria-hidden="true">*</span></label>
            <input
              id="val-email" v-model="form.email" type="email" required autocomplete="email" placeholder="mario@email.com"
              class="input-field px-4 py-3 rounded-xl text-sm text-[#f0f0f5] placeholder-[#3a3a4a] outline-none transition-all duration-200"
              style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);"
            >
          </div>

          <div class="flex flex-col gap-2">
            <label for="val-azienda" class="text-sm font-medium text-[#8a8a9a]">Azienda <span class="text-[#5a5a6a]">(facoltativo)</span></label>
            <input
              id="val-azienda" v-model="form.azienda" type="text" autocomplete="organization" placeholder="Nome dell'azienda"
              class="input-field px-4 py-3 rounded-xl text-sm text-[#f0f0f5] placeholder-[#3a3a4a] outline-none transition-all duration-200"
              style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);"
            >
          </div>

          <div class="flex flex-col gap-2">
            <label for="val-messaggio" class="text-sm font-medium text-[#8a8a9a]">Cosa vorresti capire? <span class="text-[#5a5a6a]">(facoltativo)</span></label>
            <textarea
              id="val-messaggio" v-model="form.messaggio" rows="3" placeholder="Descrivi brevemente dove pensi possa aiutarti l'AI..."
              class="input-field px-4 py-3 rounded-xl text-sm text-[#f0f0f5] placeholder-[#3a3a4a] outline-none transition-all duration-200 resize-none"
              style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);"
            />
          </div>

          <label
            for="val-consenso"
            class="flex items-start gap-3 rounded-xl px-4 py-3 text-sm text-[#8a8a9a]"
            style="background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08);"
          >
            <input
              id="val-consenso" v-model="form.consenso" type="checkbox" required
              class="mt-1 h-4 w-4 flex-shrink-0 accent-purple-500"
            >
            <span>
              Acconsento al trattamento dei miei dati per essere ricontattato, secondo l'<NuxtLink to="/privacy" class="text-[#c4b5fd] hover:text-white transition-colors">informativa privacy</NuxtLink>.
            </span>
          </label>

          <p v-if="errore" class="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3" role="alert">
            ⚠️ {{ errore }}
          </p>

          <button
            type="submit" :disabled="invioInCorso"
            class="w-full py-4 rounded-2xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-88 hover:scale-[1.015] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
            style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);"
          >
            <span v-if="invioInCorso" class="flex items-center justify-center gap-2.5">
              <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Invio in corso...
            </span>
            <span v-else>Prenota la chiamata gratuita</span>
          </button>

          <p class="text-xs text-[#6a6a7a] text-center leading-relaxed">
            Nessuna pressione a comprare: se per te non ha senso, te lo dico chiaramente.
          </p>
        </form>

        <div
          v-else
          class="glass rounded-3xl p-10 flex flex-col items-center gap-4 text-center"
          style="border-color: rgba(255,255,255,0.08);"
          role="status"
        >
          <div class="text-5xl">🎉</div>
          <div>
            <p class="text-xl font-bold text-[#f0f0f5]">Prenotazione ricevuta</p>
            <p class="text-sm text-[#8a8a9a] mt-2 leading-relaxed">
              Ti chiamo entro pochi minuti. Se in questo momento non puoi rispondere,
              rispondi alla mail di conferma con due o tre fasce orarie in cui ti trovo.
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
