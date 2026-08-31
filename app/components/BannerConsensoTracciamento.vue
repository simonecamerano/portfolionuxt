<!-- app/components/BannerConsensoTracciamento.vue -->
<script setup lang="ts">
const emit = defineEmits<{ accettato: [] }>()
const visibile = ref(false)
const scelto = ref(false)

onMounted(() => {
  const salvato = localStorage.getItem('consenso-tracciamento')
  scelto.value = salvato !== null
  visibile.value = salvato === null
  if (salvato === 'true') emit('accettato')
})

function accetta() {
  localStorage.setItem('consenso-tracciamento', 'true')
  visibile.value = false
  scelto.value = true
  emit('accettato')
}

function rifiuta() {
  localStorage.setItem('consenso-tracciamento', 'false')
  visibile.value = false
  scelto.value = true
}

// Revocare deve essere facile quanto acconsentire: il link resta in pagina.
function riapri() {
  visibile.value = true
}
defineExpose({ riapri })
</script>

<template>
  <div>
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

    <button
      v-if="scelto && !visibile"
      class="fixed bottom-2 left-2 z-40 text-xs text-neutral-500 underline"
      @click="riapri"
    >
      Preferenze tracciamento
    </button>
  </div>
</template>
