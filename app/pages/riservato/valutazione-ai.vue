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

// Il Pixel viene iniettato SOLO da questa funzione, SOLO su evento esplicito
// del banner. Non spostarla in onMounted: vanificherebbe il consenso.
// Vedi Premortem #1 del piano, e la sentenza di Dresda citata nello spec.
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
  <div class="max-w-xl mx-auto py-16 px-4">
    <template v-if="!inviato">
      <h1 class="text-3xl font-bold mb-4">
        Scopri se l'AI conviene davvero alla tua PMI
      </h1>
      <p class="mb-8 text-neutral-600">
        Una prima sessione a basso costo per capire, senza impegno, dove
        automatizzare fa risparmiare tempo e dove no.
      </p>

      <form class="space-y-4" @submit.prevent="inviaForm">
        <input v-model="form.honeypot" type="text" name="azienda_web" class="hidden" tabindex="-1" autocomplete="off">
        <input v-model="form.nome" type="text" placeholder="Nome e cognome" required class="w-full border rounded px-3 py-2">
        <input v-model="form.telefono" type="tel" placeholder="Telefono" required class="w-full border rounded px-3 py-2">
        <input v-model="form.email" type="email" placeholder="Email" required class="w-full border rounded px-3 py-2">
        <input v-model="form.azienda" type="text" placeholder="Azienda (facoltativo)" class="w-full border rounded px-3 py-2">
        <textarea v-model="form.messaggio" placeholder="Cosa vorresti capire? (facoltativo)" class="w-full border rounded px-3 py-2" />

        <label class="flex items-start gap-2 text-sm">
          <input v-model="form.consenso" type="checkbox" required class="mt-1">
          <span>
            Acconsento al trattamento dei miei dati per essere ricontattato,
            secondo l'<NuxtLink to="/privacy" class="underline">informativa privacy</NuxtLink>.
          </span>
        </label>

        <p v-if="errore" class="text-red-600 text-sm">{{ errore }}</p>

        <button type="submit" :disabled="invioInCorso" class="w-full bg-neutral-900 text-white rounded px-4 py-3 font-medium disabled:opacity-50">
          {{ invioInCorso ? 'Invio in corso...' : 'Richiedi la sessione' }}
        </button>
      </form>
    </template>

    <template v-else>
      <h1 class="text-2xl font-bold mb-4">Richiesta ricevuta</h1>
      <p>Ti chiamo entro pochi minuti. Se in questo momento non puoi rispondere,
      rispondi alla mail di conferma con due o tre fasce orarie in cui ti trovo.</p>
    </template>

    <BannerConsensoTracciamento @accettato="iniettaPixel" />
  </div>
</template>
