<!-- app/pages/riservato/stop.vue -->
<script setup lang="ts">
useSeoMeta({ robots: 'noindex, nofollow' })

const route = useRoute()
const fatto = ref(false)
const inCorso = ref(false)

async function confermaStop() {
  inCorso.value = true
  try {
    await $fetch('/api/lead/opt-out', {
      method: 'POST',
      body: { token: String(route.query.t ?? '') },
    })
  } finally {
    fatto.value = true
    inCorso.value = false
  }
}
</script>

<template>
  <div class="max-w-lg mx-auto pt-36 pb-24 px-6 text-center">
    <template v-if="!fatto">
      <h1 class="text-2xl font-bold mb-4 text-[#f0f0f5]">Non ricevere più messaggi</h1>
      <p class="mb-6 text-[#8a8a9a]">
        Confermi di non voler più ricevere email su questa richiesta?
      </p>
      <button :disabled="inCorso" class="px-6 py-3 rounded-2xl text-sm font-semibold text-[#05080d] transition-opacity duration-200 hover:opacity-85 disabled:opacity-50"
        style="background: linear-gradient(135deg, #d8b4fe, #b69cff);" @click="confermaStop">
        {{ inCorso ? 'Attendi...' : 'Confermo' }}
      </button>
    </template>
    <template v-else>
      <h1 class="text-2xl font-bold mb-4 text-[#f0f0f5]">Fatto</h1>
      <p class="text-[#8a8a9a]">Non riceverai altri messaggi. Se cambi idea, scrivi a
        <a class="underline text-[#e4c9ff] hover:text-white" href="mailto:simone@simonecamerano.dev">simone@simonecamerano.dev</a>.</p>
    </template>
  </div>
</template>
