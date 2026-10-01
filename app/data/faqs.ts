// Domande costruite sulle obiezioni reali di un titolare, non sulle
// caratteristiche del servizio. Elenco completo in /servizi (con JSON-LD
// FAQPage), le voci con `home: true` compaiono anche accanto al modulo
// contatti in home.
export interface Faq {
  q: string
  a: string
  home?: boolean
}

export const faqs: Faq[] = [
  {
    q: 'Quanto costa?',
    home: true,
    a: "Dipende da quanti strumenti vanno collegati e da quanti passaggi ha il processo: lo stesso sistema può essere piccolo per un'azienda e grande per un'altra, quindi una cifra scritta qui sarebbe sbagliata per quasi tutti. Nella prima conversazione guardiamo il tuo caso, poi ricevi un prezzo fisso per ogni fase, scritto prima di iniziare. Se ti serve solo un parere su cosa ha senso fare, si può fermare lì.",
  },
  {
    q: 'Il prezzo può crescere mentre lavori?',
    a: "No. Il prezzo concordato è tutto compreso e resta quello. Se strada facendo emerge qualcosa che non era previsto, ne parliamo prima di farlo e decidi tu se aggiungerlo.",
  },
  {
    q: 'Come si paga?',
    a: "Un acconto alla firma e il saldo a lavoro consegnato. Se il sistema usa abbonamenti a strumenti esterni, per esempio una piattaforma di automazione o un modello AI, li trovi elencati con il loro costo prima di iniziare, non dopo.",
  },
  {
    q: 'Non ho un progetto definito. Da dove partiamo?',
    a: "Da un problema: un'attività che ruba ore ogni settimana, informazioni che non arrivano quando servono, un sito che non porta contatti. Non serve sapere già quale tecnologia usare, capirlo è il mio lavoro.",
  },
  {
    q: 'Non sono tecnico. È un problema?',
    home: true,
    a: "No. Non devi sapere come funziona sotto il cofano. Devi sapere cosa fa il sistema, quando lavora e come accorgerti se qualcosa non va, e questo te lo spiego senza gergo prima della consegna.",
  },
  {
    q: 'I dati dei miei clienti finiscono su ChatGPT?',
    home: true,
    a: "Solo se serve e solo se lo decidi tu. Prima di costruire mappiamo quali dati passano e dove. Per quelli delicati si possono usare modelli che girano sui tuoi computer, senza uscire dall'azienda, oppure fornitori con un accordo scritto sul trattamento dei dati.",
  },
  {
    q: "E se l'AI sbaglia?",
    a: "Può succedere, per questo i passaggi che contano restano approvati da una persona. Il sistema è costruito in modo che un errore si veda e venga segnalato, invece di andare avanti in silenzio.",
  },
  {
    q: 'Sostituisce il mio personale?',
    a: "No. Toglie il lavoro ripetitivo, come copiare dati, preparare report o rispondere sempre alle stesse domande. Le decisioni e i rapporti con i clienti restano alle persone.",
  },
  {
    q: 'Funziona con i programmi che uso già?',
    a: "Quasi sempre sì, se il programma permette di collegarsi o di esportare i dati. Parto dagli strumenti che hai, senza farti cambiare gestionale. Se un collegamento non è possibile, te lo dico all'inizio, non a lavoro avviato.",
  },
  {
    q: 'Resto legato a te?',
    home: true,
    a: "No. Gli account sono intestati a te e alla consegna ricevi il codice e la documentazione. Se un giorno vuoi farlo seguire da qualcun altro, puoi.",
  },
  {
    q: 'Cosa succede dopo la consegna?',
    a: "Il sistema è tuo e il tuo team sa usarlo. Se vuoi che continui a seguirlo e a farlo crescere, c'è un canone mensile facoltativo, da valutare quando il sistema è già in uso, non un obbligo.",
  },
]

export const homeFaqs = faqs.filter(f => f.home)
