<script setup lang="ts">
interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const form = reactive<FormState>({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMessage = ref('')
const privacyAccepted = ref(false)

const handleSubmit = async () => {
  if (!privacyAccepted.value) {
    status.value = 'error'
    errorMessage.value = 'Devi accettare la Privacy Policy per inviare il messaggio.'
    return
  }

  status.value = 'loading'
  errorMessage.value = ''
  try {
    await $fetch('/api/contact', { method: 'POST', body: { ...form } })
    status.value = 'success'
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
    privacyAccepted.value = false
  } catch (err: unknown) {
    status.value = 'error'
    const fetchErr = err as { data?: { message?: string } }
    errorMessage.value = fetchErr?.data?.message ?? 'Qualcosa è andato storto. Riprova tra poco.'
  }
}

const resetForm = () => {
  status.value = 'idle'
  errorMessage.value = ''
  privacyAccepted.value = false
}
</script>

<template>
  <section id="contatti" class="py-28 px-6">
    <div
      class="max-w-6xl mx-auto mb-20 h-px"
      style="background: linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent);"
      aria-hidden="true"
    />

    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

      <!-- ── Left ─────────────────────────────────────── -->
      <div
        v-motion="{ initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, inViewOptions: { once: true }, transition: { duration: 0.6, ease: 'easeOut' as const } }"
        class="flex flex-col gap-7"
      >
        <div>
          <span
            class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-5"
            style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25); color: #c4b5fd;"
          >
            Contatti
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] leading-[1.1] tracking-tight">
            Hai un progetto<br />
            in mente?
            <span class="text-gradient"> Parliamone.</span>
          </h2>
        </div>

        <p class="text-[#6a6a7a] text-lg leading-relaxed max-w-sm">
          Sono disponibile per collaborazioni freelance, progetti interessanti e opportunità di lavoro.
          Non esitare a scrivermi.
        </p>

        <div class="flex flex-col gap-3">
          <a
            href="mailto:camerano.simo@gmail.com"
            class="inline-flex items-center gap-3 text-[#8a8a9a] hover:text-white transition-colors duration-200 group"
          >
            <span
              class="w-9 h-9 rounded-xl flex items-center justify-center text-sm glass flex-shrink-0"
              style="border-color: rgba(255,255,255,0.08);"
              aria-hidden="true"
            >✉️</span>
            <span class="text-sm group-hover:text-gradient">camerano.simo@gmail.com</span>
          </a>
        </div>

        <div
          class="inline-flex items-center gap-3 px-5 py-3 rounded-2xl w-fit"
          style="background: rgba(74,222,128,0.07); border: 1px solid rgba(74,222,128,0.2);"
        >
          <span class="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0" style="box-shadow: 0 0 8px rgba(74,222,128,0.7);" aria-hidden="true" />
          <span class="text-sm font-medium text-green-400/90">Disponibile per nuovi progetti</span>
        </div>
      </div>

      <!-- ── Right: form ─────────────────────────────────────── -->
      <div
        v-motion="{ initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, inViewOptions: { once: true }, transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' as const } }"
      >
        <form
          class="glass rounded-3xl p-8 flex flex-col gap-5"
          style="border-color: rgba(255,255,255,0.08);"
          aria-label="Modulo di contatto"
          @submit.prevent="handleSubmit"
        >
          <div v-if="status === 'success'" class="py-10 flex flex-col items-center gap-4 text-center" role="status">
            <div class="text-5xl">🎉</div>
            <div>
              <p class="text-xl font-bold text-[#f0f0f5]">Messaggio inviato!</p>
              <p class="text-sm text-[#6a6a7a] mt-2">Ti rispondo al più presto. A presto!</p>
            </div>
            <button type="button" class="mt-2 text-sm font-medium text-gradient hover:opacity-70 transition-opacity" @click="resetForm">
              Invia un altro messaggio →
            </button>
          </div>

          <template v-else>
            <div class="grid sm:grid-cols-2 gap-5">
              <div class="flex flex-col gap-2">
                <label for="contact-name" class="text-sm font-medium text-[#8a8a9a]">Nome <span class="text-purple-400" aria-hidden="true">*</span></label>
                <input id="contact-name" v-model="form.name" type="text" required autocomplete="name" placeholder="Mario Rossi"
                  class="input-field px-4 py-3 rounded-xl text-sm text-[#f0f0f5] placeholder-[#3a3a4a] outline-none transition-all duration-200"
                  style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);" />
              </div>
              <div class="flex flex-col gap-2">
                <label for="contact-email" class="text-sm font-medium text-[#8a8a9a]">Email <span class="text-purple-400" aria-hidden="true">*</span></label>
                <input id="contact-email" v-model="form.email" type="email" required autocomplete="email" placeholder="mario@email.com"
                  class="input-field px-4 py-3 rounded-xl text-sm text-[#f0f0f5] placeholder-[#3a3a4a] outline-none transition-all duration-200"
                  style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);" />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label for="contact-subject" class="text-sm font-medium text-[#8a8a9a]">Oggetto <span class="text-purple-400" aria-hidden="true">*</span></label>
              <input id="contact-subject" v-model="form.subject" type="text" required placeholder="Progetto freelance, collaborazione..."
                class="input-field px-4 py-3 rounded-xl text-sm text-[#f0f0f5] placeholder-[#3a3a4a] outline-none transition-all duration-200"
                style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="contact-message" class="text-sm font-medium text-[#8a8a9a]">Messaggio <span class="text-purple-400" aria-hidden="true">*</span></label>
              <textarea id="contact-message" v-model="form.message" required rows="5" placeholder="Raccontami del tuo progetto o della tua idea..."
                class="input-field px-4 py-3 rounded-xl text-sm text-[#f0f0f5] placeholder-[#3a3a4a] outline-none transition-all duration-200 resize-none"
                style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);" />
            </div>

            <label
              for="contact-privacy"
              class="flex items-start gap-3 rounded-xl px-4 py-3 text-sm text-[#8a8a9a]"
              style="background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08);"
            >
              <input
                id="contact-privacy"
                v-model="privacyAccepted"
                type="checkbox"
                required
                class="mt-1 h-4 w-4 flex-shrink-0 accent-purple-500"
              />
              <span>
                Ho letto e accetto la
                <NuxtLink to="/privacy" class="text-[#c4b5fd] hover:text-white transition-colors">
                  Privacy Policy
                </NuxtLink>
                relativa al trattamento dei dati inviati tramite il modulo.
              </span>
            </label>

            <p v-if="status === 'error'" class="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3" role="alert">
              ⚠️ {{ errorMessage }}
            </p>

            <button type="submit" :disabled="status === 'loading'"
              class="w-full py-4 rounded-2xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-88 hover:scale-[1.015] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);">
              <span v-if="status === 'loading'" class="flex items-center justify-center gap-2.5">
                <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Invio in corso...
              </span>
              <span v-else>Invia un messaggio ✉️</span>
            </button>
          </template>
        </form>
      </div>
    </div>
  </section>
</template>
