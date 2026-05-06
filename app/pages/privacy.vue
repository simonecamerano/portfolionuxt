<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy — Simone Camerano',
  description:
    'Informativa privacy del sito personale di Simone Camerano per il trattamento dei dati inviati tramite il modulo di contatto.',
  ogTitle: 'Privacy Policy — Simone Camerano',
  ogDescription:
    'Informativa sul trattamento dei dati personali raccolti tramite il sito personale.',
})
</script>

<template>
  <main class="min-h-screen pt-28 pb-28 px-6">
    <div class="max-w-3xl mx-auto">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-sm text-[#8a8a9a] hover:text-white transition-colors group mb-12"
      >
        <svg class="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Torna alla home
      </NuxtLink>

      <header class="mb-12">
        <span
          class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-5"
          style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25); color: #c4b5fd;"
        >
          Privacy
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight">
          Privacy Policy
        </h1>
        <p class="text-[#8a8a9a] mt-4 leading-relaxed">
          Ultimo aggiornamento: maggio 2026.
        </p>
      </header>

      <div class="prose-project max-w-none">
        <h2>Titolare del trattamento</h2>
        <p>
          Il titolare del trattamento è Simone Camerano. Per richieste relative alla privacy puoi scrivere a
          <a href="mailto:camerano.simo@gmail.com">camerano.simo@gmail.com</a>.
        </p>

        <h2>Dati trattati</h2>
        <p>
          Tramite il modulo di contatto vengono raccolti nome, indirizzo email, oggetto e contenuto del messaggio.
          Per ragioni tecniche e di sicurezza può essere trattato anche l'indirizzo IP associato alla richiesta.
        </p>

        <h2>Finalità e base giuridica</h2>
        <p>
          I dati vengono usati esclusivamente per ricevere, gestire e rispondere alle richieste inviate tramite
          il modulo di contatto. La base giuridica è l'esecuzione di misure precontrattuali o la risposta a una
          richiesta dell'interessato.
        </p>

        <h2>Servizi terzi</h2>
        <p>
          L'invio delle email è gestito tramite EmailJS, servizio esterno usato per recapitare il messaggio al
          titolare e, se configurato, inviare una conferma automatica al mittente.
        </p>

        <h2>Conservazione</h2>
        <p>
          I messaggi ricevuti vengono conservati per il tempo necessario a gestire la richiesta e le eventuali
          comunicazioni successive, salvo obblighi di legge o necessità di tutela dei diritti.
        </p>

        <h2>Cookie e font</h2>
        <p>
          Il sito non usa cookie di profilazione o strumenti di tracciamento pubblicitario. I font sono serviti
          localmente dal sito e non richiedono chiamate a Google Fonts.
        </p>

        <h2>Diritti dell'interessato</h2>
        <p>
          Puoi chiedere accesso, rettifica, cancellazione, limitazione o opposizione al trattamento dei tuoi dati,
          scrivendo all'indirizzo email indicato sopra.
        </p>
      </div>
    </div>
  </main>
</template>
