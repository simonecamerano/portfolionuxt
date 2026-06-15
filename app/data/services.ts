export interface Service {
  num: string
  title: string
  desc: string
  utile_se: string[]
  output: string[]
}

export const services: Service[] = [
  {
    num: '01',
    title: 'Siti web moderni e redesign',
    desc: 'Creo siti web chiari, veloci e curati, pensati per presentare bene la tua attività e aiutare le persone a capire subito cosa fai, per chi lo fai e come contattarti.',
    utile_se: [
      'il tuo sito attuale è vecchio, lento o poco chiaro',
      'non hai ancora un sito professionale',
      'vuoi migliorare struttura, testi, velocità e percezione',
      "vuoi una presenza online più coerente con quello che fai oggi",
    ],
    output: [
      'sito vetrina',
      'redesign completo',
      'landing page',
      'pagine servizio',
      'struttura contenuti',
      'revisione UX e copy base',
      'setup tecnico e deploy',
    ],
  },
  {
    num: '02',
    title: 'Web app e strumenti digitali su misura',
    desc: "Sviluppo web app e strumenti interni per gestire attività, dati, utenti, richieste, contenuti o processi che oggi vengono seguiti a mano o con strumenti non adatti.",
    utile_se: [
      'Excel non basta più',
      'hai bisogno di un piccolo gestionale su misura',
      'vuoi centralizzare informazioni e attività',
      'ti serve uno strumento per il team, i clienti o i collaboratori',
      "vuoi trasformare un'idea in un primo prodotto funzionante",
    ],
    output: [
      'dashboard',
      'aree riservate',
      'portali interni',
      'form evoluti',
      'gestionali leggeri',
      'strumenti operativi',
      'API e integrazioni',
      'prototipi full stack',
    ],
  },
  {
    num: '03',
    title: 'Automazioni e workflow AI',
    desc: "Automatizzo attività ripetitive e costruisco workflow in cui l'AI ha un compito preciso: cercare, filtrare, classificare, riassumere, preparare report o supportare decisioni operative.",
    utile_se: [
      'ripeti spesso le stesse operazioni',
      'devi controllare fonti, email, documenti o dati in modo ricorrente',
      'vuoi ricevere report o alert automatici',
      'usi già strumenti AI, ma senza un metodo stabile',
      'vuoi ridurre lavoro manuale su attività a basso valore',
    ],
    output: [
      'automazioni tra strumenti',
      'workflow con approvazione umana',
      'bot Telegram o Slack',
      'report automatici',
      'classificazione contenuti',
      'pipeline di ricerca e filtro',
      'agenti AI con compiti specifici e controllabili',
    ],
  },
  {
    num: '04',
    title: 'Knowledge base e assistenti AI su documenti',
    desc: 'Creo sistemi per rendere più accessibili documenti, FAQ, cataloghi, procedure, materiali formativi o informazioni interne.',
    utile_se: [
      'hai documenti sparsi in cartelle, PDF, file o pagine diverse',
      'il team perde tempo a cercare informazioni',
      'vuoi rendere più semplice consultare procedure o materiali',
      'hai un catalogo, una guida o una knowledge base difficile da navigare',
      'vuoi un assistente AI che risponda dentro confini chiari',
    ],
    output: [
      'knowledge base strutturata',
      'assistente AI su documenti',
      'ricerca semantica',
      'FAQ dinamiche',
      'sistemi RAG',
      'interfacce conversazionali',
      'strumenti per aggiornare i contenuti',
    ],
  },
  {
    num: '05',
    title: 'Audit digitale e opportunità AI',
    desc: "Analizzo sito, strumenti e processi per capire dove intervenire prima. A volte serve rifare il sito. A volte basta sistemare un flusso. Meglio capirlo prima di investire tempo e budget nella direzione sbagliata.",
    utile_se: [
      'sai che qualcosa non funziona, ma non sai da dove partire',
      'vuoi capire se il tuo sito comunica bene',
      'hai processi manuali che rallentano il lavoro',
      "vuoi valutare automazioni o AI senza hype",
      'vuoi una mappa concreta delle priorità',
    ],
    output: [
      'audit del sito',
      'analisi dei processi digitali',
      'mappa problemi / opportunità',
      'proposta di intervento',
      'priorità tecniche e operative',
      "valutazione realistica dell'uso dell'AI",
    ],
  },
]
