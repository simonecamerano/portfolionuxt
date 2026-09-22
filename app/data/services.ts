export interface Service {
  num: string
  title: string
  desc: string
  utile_se: string[]
  output: string[]
  level: 'primary' | 'enabling' | 'secondary'
}

export const services: Service[] = [
  {
    num: '01',
    title: 'Automazioni e workflow AI',
    desc: "Collego strumenti, dati e modelli AI per ridurre attività ripetitive e trasformare passaggi manuali in flussi controllabili.",
    utile_se: [
      'ripeti spesso le stesse operazioni',
      'copi dati tra email, file e gestionali',
      'vuoi report o alert automatici',
      'usi già strumenti AI senza un processo stabile',
    ],
    output: ['automazioni tra strumenti', 'workflow con approvazione umana', 'report automatici', 'agenti AI controllabili'],
    level: 'primary',
  },
  {
    num: '02',
    title: 'Assistenti AI per documenti e procedure',
    desc: 'Rendo procedure, cataloghi, FAQ e documenti interni più semplici da cercare e usare, mantenendo fonti e confini chiari.',
    utile_se: [
      'il team perde tempo a cercare informazioni',
      'documenti e procedure sono dispersi',
      'le stesse domande ricevono risposte diverse',
      'vuoi un assistente che citi le fonti',
    ],
    output: ['assistenti su documenti', 'ricerca semantica', 'sistemi RAG', 'basi di conoscenza strutturate'],
    level: 'primary',
  },
  {
    num: '03',
    title: 'Strumenti AI su misura',
    desc: 'Progetto dashboard, portali e applicazioni in cui l’AI svolge un compito preciso dentro un’esperienza semplice per il team.',
    utile_se: [
      'gli strumenti standard non seguono il tuo processo',
      'vuoi integrare AI in un prodotto o portale',
      'hai bisogno di un prototipo operativo',
      'serve un’interfaccia per governare il workflow',
    ],
    output: ['dashboard AI', 'portali operativi', 'copilot verticali', 'prototipi full stack'],
    level: 'primary',
  },
  {
    num: '04',
    title: 'Audit dei processi e opportunità AI',
    desc: 'Analizzo attività, strumenti e colli di bottiglia per capire dove l’AI crea valore e dove aggiungerebbe solo complessità.',
    utile_se: [
      'sai che qualcosa rallenta il team',
      'non sai da quale automazione partire',
      'vuoi valutare l’AI senza hype',
      'serve una mappa concreta delle priorità',
    ],
    output: ['mappa del processo', 'opportunità ordinate', 'rischi e vincoli', 'proposta di intervento'],
    level: 'primary',
  },
  {
    num: '05',
    title: 'Web app e strumenti interni',
    desc: 'Costruisco il software che serve a gestire dati, utenti e attività quando un workflow richiede un prodotto digitale dedicato.',
    utile_se: [
      'Excel non basta più',
      'vuoi centralizzare informazioni e attività',
      'serve uno strumento per team o clienti',
      'vuoi trasformare un’idea in un MVP',
    ],
    output: ['dashboard', 'aree riservate', 'gestionali leggeri', 'API e integrazioni'],
    level: 'enabling',
  },
  {
    num: '06',
    title: 'Siti web e redesign',
    desc: 'Realizzo presenze digitali chiare e veloci quando il problema è comunicare meglio il valore dell’azienda e generare contatti.',
    utile_se: [
      'il sito non rappresenta più la tua attività',
      'servizi e proposta non sono chiari',
      'vuoi migliorare esperienza e velocità',
      'serve una nuova presenza professionale',
    ],
    output: ['siti aziendali', 'redesign', 'landing page', 'struttura dei contenuti'],
    level: 'secondary',
  },
]
