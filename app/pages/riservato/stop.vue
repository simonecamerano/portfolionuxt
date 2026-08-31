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
  <div class="max-w-lg mx-auto py-20 px-4 text-center">
    <template v-if="!fatto">
      <h1 class="text-2xl font-bold mb-4">Non ricevere più messaggi</h1>
      <p class="mb-6 text-neutral-600">
        Confermi di non voler più ricevere email su questa richiesta?
      </p>
      <button :disabled="inCorso" class="bg-neutral-900 text-white rounded px-6 py-3 disabled:opacity-50" @click="confermaStop">
        {{ inCorso ? 'Attendi...' : 'Confermo' }}
      </button>
    </template>
    <template v-else>
      <h1 class="text-2xl font-bold mb-4">Fatto</h1>
      <p>Non riceverai altri messaggi. Se cambi idea, scrivi a
        <a class="underline" href="mailto:simone@simonecamerano.dev">simone@simonecamerano.dev</a>.</p>
    </template>
  </div>
</template>
