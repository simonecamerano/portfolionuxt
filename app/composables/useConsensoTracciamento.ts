// Stato del consenso al tracciamento (Meta Pixel), condiviso tra la pagina
// che lo richiede (/riservato/valutazione-ai) e il link "Preferenze
// tracciamento" nel footer, visibile su tutto il sito una volta che una
// scelta esiste in localStorage. Singleton a livello di modulo: più
// componenti che lo importano condividono lo stesso stato reattivo.
const scelta = ref<'true' | 'false' | null>(null)
const visibile = ref(false)

export function useConsensoTracciamento() {
  // Lettura di localStorage solo in onMounted, mai in setup: sul server
  // scelta resta null (nessun banner nell'HTML renderizzato), e il client
  // deve produrre lo stesso primo render prima di idratare, altrimenti Vue
  // segnala un hydration mismatch. Il valore reale arriva subito dopo,
  // come normale aggiornamento reattivo post-idratazione.
  onMounted(() => {
    if (scelta.value === null) {
      scelta.value = localStorage.getItem('consenso-tracciamento') as 'true' | 'false' | null
    }
  })

  const accettato = computed(() => scelta.value === 'true')
  const scelto = computed(() => scelta.value !== null)

  function accetta() {
    localStorage.setItem('consenso-tracciamento', 'true')
    scelta.value = 'true'
    visibile.value = false
  }

  function rifiuta() {
    localStorage.setItem('consenso-tracciamento', 'false')
    scelta.value = 'false'
    visibile.value = false
  }

  // Mostra la richiesta iniziale solo se non è mai stata fatta una scelta.
  // Va chiamata solo dalla pagina che ha davvero bisogno di chiedere il
  // consenso, non da un mount globale, altrimenti il banner comparirebbe
  // su pagine che non tracciano nulla.
  function richiediSeNecessario() {
    if (scelta.value === null) visibile.value = true
  }

  function riapri() {
    visibile.value = true
  }

  return { accettato, scelto, visibile, accetta, rifiuta, richiediSeNecessario, riapri }
}
