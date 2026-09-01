<!-- app/components/BannerConsensoTracciamento.vue -->
<!-- Solo la richiesta di consenso iniziale. Il link per rivedere la scelta
     dopo vive nel footer globale (AppFooter.vue), non qui: così è
     raggiungibile da qualunque pagina, non solo da questa. -->
<script setup lang="ts">
// Montato una sola volta, globalmente, in app.vue. Non decide da solo quando
// chiedere il consenso (richiediSeNecessario): lo fa solo la pagina che ha
// davvero bisogno di tracciamento, altrimenti il banner comparirebbe anche
// su pagine che non caricano nessun Pixel.
const { visibile, accetta, rifiuta } = useConsensoTracciamento()
</script>

<template>
  <ClientOnly>
    <div
      v-if="visibile"
      class="fixed bottom-0 inset-x-0 z-50 bg-neutral-900 text-white p-4 flex flex-col sm:flex-row items-center gap-4 justify-between"
    >
      <p class="text-sm">
        Usiamo strumenti di tracciamento pubblicitario (Meta Pixel) solo se
        acconsenti esplicitamente. Leggi l'<NuxtLink to="/privacy" class="underline">informativa privacy</NuxtLink>.
      </p>
      <div class="flex gap-2 shrink-0">
        <!-- Stessa gerarchia visiva sui due bottoni: un "Rifiuta" meno visibile
             dell'"Accetta" e' il tipo di banner che viene contestato. -->
        <button class="px-4 py-2 rounded border border-white/40 hover:bg-white/10" @click="rifiuta">
          Rifiuta
        </button>
        <button class="px-4 py-2 rounded border border-white/40 hover:bg-white/10" @click="accetta">
          Accetta
        </button>
      </div>
    </div>
  </ClientOnly>
</template>
