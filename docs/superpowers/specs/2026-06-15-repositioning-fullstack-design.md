# Riposizionamento sito: da AI Workflow Engineer a Full Stack Developer

**Data:** 2026-06-15
**Perimetro:** intero sito (homepage, /servizi, /about)
**Obiettivo:** spostare il messaggio principale da AI-first a Full Stack Developer con AI come specializzazione pratica

---

## Problema

Il sito attuale si posiziona come "AI Workflow Engineer" con focus su agenti operativi, workflow multi-modello e automazioni AI-native. Questo messaggio è troppo stretto: esclude clienti che cercano siti web, web app o strumenti digitali generali, e può risultare distante per PMI e professionisti che non parlano il linguaggio AI.

Il nuovo messaggio deve comunicare subito:
> "Simone può aiutarmi a costruire o migliorare strumenti digitali concreti. E se l'AI serve, sa integrarla con criterio."

---

## Approccio scelto: B — Data file condiviso per i servizi

I servizi appaiono in due posti con formati diversi (homepage: semplice, /servizi: espanso). Si crea `app/data/services.ts` come unica fonte di verità. Tutti gli altri contenuti vengono aggiornati in-place nei componenti e nelle pagine esistenti.

---

## Data layer

### `app/data/services.ts` — nuovo file

```ts
export interface Service {
  num: string
  title: string
  desc: string       // versione breve per homepage card
  utile_se: string[]
  output: string[]
}
```

**5 servizi:**

| num | title | desc (breve) |
|-----|-------|--------------|
| 01 | Siti web moderni e redesign | Creo siti web chiari, veloci e curati, pensati per presentare bene la tua attività e aiutare le persone a capire subito cosa fai, per chi lo fai e come contattarti. |
| 02 | Web app e strumenti digitali su misura | Sviluppo web app e strumenti interni per gestire attività, dati, utenti, richieste, contenuti o processi che oggi vengono seguiti a mano o con strumenti non adatti. |
| 03 | Automazioni e workflow AI | Automatizzo attività ripetitive e costruisco workflow in cui l'AI ha un compito preciso: cercare, filtrare, classificare, riassumere, preparare report o supportare decisioni operative. |
| 04 | Knowledge base e assistenti AI su documenti | Creo sistemi per rendere più accessibili documenti, FAQ, cataloghi, procedure, materiali formativi o informazioni interne. |
| 05 | Audit digitale e opportunità AI | Analizzo sito, strumenti e processi per capire dove intervenire prima, senza sprecare tempo e budget nella direzione sbagliata. |

**Dati completi per ogni servizio** (da usare in /servizi):

**01 — Siti web moderni e redesign**
- utile_se: sito attuale vecchio o poco chiaro; nessun sito professionale; miglioramento struttura/testi/velocità/percezione; presenza online più coerente con l'attività attuale
- output: sito vetrina; redesign completo; landing page; pagine servizio; struttura contenuti; revisione UX e copy base; setup tecnico e deploy

**02 — Web app e strumenti digitali su misura**
- utile_se: Excel non basta più; bisogno di gestionale su misura; centralizzare informazioni e attività; strumento per team/clienti/collaboratori; trasformare un'idea in primo prodotto funzionante
- output: dashboard; aree riservate; portali interni; form evoluti; gestionali leggeri; strumenti operativi; API e integrazioni; prototipi full stack

**03 — Automazioni e workflow AI**
- utile_se: ripetizione delle stesse operazioni; controllo ricorrente di fonti/email/documenti/dati; report o alert automatici; uso AI senza metodo stabile; riduzione lavoro manuale su attività a basso valore
- output: automazioni tra strumenti; workflow con approvazione umana; bot Telegram o Slack; report automatici; classificazione contenuti; pipeline di ricerca e filtro; agenti AI con compiti specifici e controllabili

**04 — Knowledge base e assistenti AI su documenti**
- utile_se: documenti sparsi in cartelle/PDF/file/pagine; team che perde tempo a cercare informazioni; rendere più semplice consultare procedure o materiali; catalogo/guida/knowledge base difficile da navigare; assistente AI con confini chiari
- output: knowledge base strutturata; assistente AI su documenti; ricerca semantica; FAQ dinamiche; sistemi RAG; interfacce conversazionali; strumenti per aggiornare i contenuti

**05 — Audit digitale e opportunità AI**
- utile_se: qualcosa non funziona ma non si sa da dove partire; valutare se il sito comunica bene; processi manuali che rallentano; valutare automazioni o AI senza hype; mappa concreta delle priorità
- output: audit del sito; analisi dei processi digitali; mappa problemi/opportunità; proposta di intervento; priorità tecniche e operative; valutazione realistica dell'uso dell'AI

---

### `app/data/stats.ts` — aggiornamento

```ts
{ value: '26', suffix: '+', label: 'anni di esperienza operativa' }
{ value: 'Full stack', suffix: '', label: 'sviluppo web, backend e interfacce moderne' }
{ value: 'AI pratica', suffix: '', label: 'automazioni, knowledge base e workflow controllabili' }
```

### `app/data/projects.ts` — aggiornamento JouleZeroPointWeb

- `featured: true` (era false)
- `category: 'Frontend'`
- `description`: "Sito web costruito per raccontare in modo chiaro un'identità tecnica, visiva e contenutistica."
- `tags`: `['Vue 3', 'Frontend', 'UI', 'Design']`

**Featured risultanti in homepage:** ContextForge, Italy Job Hunter, LinkedIn Assistant, IncluDO Guide, AI Control Tower, JouleZeroPointWeb (6 card).

---

## Componenti homepage

### `HeroSection.vue`

| Elemento | Prima | Dopo |
|----------|-------|------|
| Badge | AI Workflow Engineer · Full-Stack Developer · Automation Builder | Full Stack Developer · Web App · Automazioni AI |
| H1 | Costruisco workflow AI, agenti operativi e prodotti full-stack... | Full Stack Developer per siti, web app e soluzioni AI pratiche |
| Sottotitolo | Dalla comprensione dei processi alla costruzione del sistema... | Creo siti moderni, web app e strumenti digitali su misura per PMI, professionisti e piccoli team. Quando serve, integro AI, automazioni e workflow per semplificare il lavoro quotidiano, non per complicarlo. |
| Microfrase | Disponibile per collaborazioni freelance, prototipi AI... | Dalla presenza online agli strumenti interni: parto dal problema reale, poi costruisco la soluzione giusta. |
| CTA primaria | Parliamo del tuo workflow | Parliamo del tuo progetto |
| Disponibilità | Disponibile per collaborazioni freelance, prototipi AI e automazioni | Disponibile per freelance: siti, web app, automazioni e integrazioni AI. |
| Tech pills | Vue, Nuxt, Node.js, TypeScript, LLMs, Telegram | Vue, Nuxt, React, Node.js, TypeScript, AI |
| Code mockup — role | "AI Workflow Engineer" | "Full Stack Developer" |
| Code mockup — builds | ["AI workflows", "automation bots", "full-stack products"] | ["siti web", "web app", "automazioni AI"] |
| Code mockup — focus | "turning real processes into intelligent systems" | "dal problema reale alla soluzione digitale" |
| Code mockup — availableFor | ["freelance", "AI prototypes", "workflow automation"] | ["freelance", "siti web", "web app", "automazioni"] |
| Commento finale | // costruisce sistemi concreti, non chatbot | // sviluppo full stack con AI pragmatica |

### `ServicesSection.vue`

- Import `services` da `~/data/services` (rimuove array inline)
- Header H2 invariato: "Cosa posso costruire per te"
- Testo intro aggiornato: "Lavoro su progetti piccoli e medi, con un obiettivo chiaro: trasformare un bisogno reale in uno strumento digitale semplice da usare, mantenere e far crescere. Non parto dall'AI per forza. Parto da quello che ti serve."
- Card: mostra `service.num`, `service.title`, `service.desc` — stesso layout attuale

### `CanHelpSection.vue`

H2 aggiornato. 7 nuove card (erano 6):

| title | body |
|-------|------|
| Hai un sito vecchio o che non funziona | Il tuo sito è lento, poco chiaro o non rappresenta più quello che fai. O non hai ancora una presenza online professionale e vuoi partire bene. |
| Ti serve uno strumento su misura | Hai bisogno di una web app, un gestionale leggero o uno strumento interno per gestire dati, richieste, utenti o processi che oggi vengono seguiti a mano. |
| Excel non basta più | Usi troppi file, email e documenti sparsi. Il flusso di lavoro è frammentato e ogni aggiornamento richiede passaggi manuali ripetitivi. |
| Vuoi automatizzare senza perdere il controllo | Hai attività che si ripetono: cercare informazioni, filtrare risultati, preparare report, aggiornare dati. Vuoi automatizzarle senza che il sistema diventi ingestibile. |
| Hai documenti difficili da consultare | Procedure, cataloghi, FAQ, materiali formativi o informazioni interne sono dispersi e difficili da trovare quando servono. |
| Vuoi capire se l'AI può aiutarti davvero | Senti parlare di AI e automazioni ma non sai se e come potrebbero cambiare il tuo modo di lavorare, senza partire da promesse esagerate. |
| Hai un'idea ma non sai da dove partire | Vuoi costruire un prodotto digitale, ma ti serve qualcuno che traduca l'idea in architettura, priorità e primo prototipo funzionante. |

Frase di chiusura sezione: "In molti casi non serve 'rivoluzionare' niente. Serve mettere ordine, scegliere le priorità e costruire uno strumento che faccia bene il suo lavoro."

### `ProjectsSection.vue`

Testo intro aggiornato: "Alcuni progetti nascono come strumenti personali, altri come prototipi o prodotti verticali. Li uso per mostrare come affronto problemi concreti: organizzare informazioni, costruire interfacce, automatizzare passaggi ripetitivi, integrare AI dentro workflow controllabili. Non sono esperimenti messi lì per fare scena. Sono esempi di metodo, architettura e sviluppo full stack applicato."

Frase di chiusura da aggiungere dopo le card:

> Ogni progetto nasce da una domanda pratica: come organizzo meglio queste informazioni? Come riduco attività ripetitive? Come costruisco uno strumento semplice da usare? Dove l'AI può aiutare senza prendere il controllo del processo? È lo stesso approccio che porto nei progetti per clienti e collaborazioni freelance.

### `AboutSection.vue`

Titolo sezione: "Prima i processi, poi il codice"

Testo: Sono Simone Camerano, Full Stack Developer con una specializzazione pratica in AI e automazione. Prima di dedicarmi allo sviluppo web, ho lavorato per 26 anni nella GDO, dentro processi reali: team, fornitori, clienti, urgenze operative, strumenti non sempre adatti e problemi da risolvere senza troppa teoria. Questo background oggi è parte del mio modo di lavorare. Prima cerco di capire come funziona davvero la tua attività: cosa rallenta il lavoro, cosa crea confusione, cosa può essere semplificato. Poi progetto e sviluppo la soluzione. La tecnologia è importante. Ma deve servire il lavoro, non diventare un altro problema da gestire.

CTA: "Scopri di più su di me"

### `MethodSection.vue`

4 step aggiornati:

| num | title | desc |
|-----|-------|------|
| 01 | Capire prima di costruire | Prima di parlare di stack, framework o AI, cerco di capire il problema: cosa non funziona oggi, chi userà lo strumento, quali vincoli ci sono e quale risultato ti serve davvero. |
| 02 | Soluzioni semplici da usare | Un sito, una web app o un'automazione devono essere comprensibili anche fuori dalla fase di sviluppo. Se uno strumento è potente ma nessuno lo usa volentieri, non ha risolto il problema. |
| 03 | Tecnologia proporzionata | Non tutto richiede AI. Non tutto richiede un'app complessa. Scelgo la soluzione più adatta al contesto: a volte è un redesign, a volte una dashboard, a volte un workflow automatizzato. |
| 04 | Controllo e manutenzione | Preferisco costruire sistemi chiari, documentati e mantenibili. Soprattutto quando entra in gioco l'AI, servono confini, controlli e passaggi verificabili. |

### `TechSection.vue`

Solo testo intro aggiornato: "Uso strumenti moderni per costruire siti, web app, backend, automazioni e integrazioni AI. La scelta dello stack dipende dal progetto: prima viene il problema, poi la tecnologia."

Descrizioni categorie:
- Frontend: "Interfacce responsive, curate e facili da usare, con attenzione a struttura, performance e chiarezza dei contenuti."
- Backend: "API, logica applicativa, autenticazione, gestione dati e integrazioni con servizi esterni."
- AI e automazione: "Integrazione di modelli AI, workflow automatizzati, assistenti su documenti, bot operativi e sistemi di supporto al lavoro quotidiano."
- DevOps e deploy: "Setup, versionamento, deploy e gestione dell'ambiente tecnico per portare online progetti solidi e mantenibili."

### `ContactSection.vue`

- H2: "Hai un sito da rifare, una web app da costruire o un processo da semplificare?"
- Testo: "Raccontami da dove parti: un sito vecchio, un'idea di prodotto, un processo manuale, una knowledge base disordinata o il dubbio che l'AI possa aiutarti in modo concreto. Ti aiuto a capire cosa ha senso costruire, con quale priorità e con quale livello di complessità."
- Microfrase: "Niente promesse esagerate. Prima capiamo il problema, poi decidiamo la soluzione."
- CTA primaria: "Scrivimi per parlare del progetto"
- CTA secondaria: "Guarda i progetti"

---

## Pagine

### `app/pages/index.vue`

```ts
useSeoMeta({
  title: 'Simone Camerano — Full Stack Developer per siti, web app e soluzioni AI pratiche',
  description: 'Full Stack Developer a Pesaro. Creo siti web moderni, web app, strumenti digitali su misura, automazioni e soluzioni AI pratiche per PMI, professionisti e piccoli team.',
  // og tags di conseguenza
})
```

### `app/pages/servizi.vue`

Riscrittura completa dei contenuti. Struttura per ogni servizio:

```
[numero] [titolo]
[descrizione]

Utile se
- bullet 1
- bullet 2
...

Output possibili
- bullet 1
- bullet 2
...
```

I dati vengono importati da `~/data/services` — stessa fonte della homepage.
Layout: sezioni verticali con separatori, una per servizio.

### `app/pages/about.vue`

Struttura della pagina (timeline, sezioni esistenti) invariata. Aggiornamenti testuali:

- Titolo principale della pagina: allineato al nuovo posizionamento ("Full Stack Developer" non "AI Workflow Engineer")
- Testo introduttivo/bio: stesso testo della sezione About in homepage — 26 anni GDO, Full Stack Developer con specializzazione pratica in AI e automazione, approccio "prima il problema poi la tecnologia"
- Eventuali riferimenti a "AI Workflow Engineer" o "agenti operativi" come titolo principale vanno sostituiti

---

## File modificati — riepilogo

| File | Tipo di modifica |
|------|-----------------|
| `app/data/services.ts` | Nuovo file |
| `app/data/stats.ts` | Aggiornamento contenuto |
| `app/data/projects.ts` | Aggiornamento JouleZeroPointWeb |
| `app/components/HeroSection.vue` | Aggiornamento testi + codice mockup |
| `app/components/ServicesSection.vue` | Import da data/services, aggiornamento testi |
| `app/components/CanHelpSection.vue` | Aggiornamento cards e header |
| `app/components/ProjectsSection.vue` | Aggiornamento testi intro e chiusura |
| `app/components/AboutSection.vue` | Aggiornamento testo bio |
| `app/components/MethodSection.vue` | Aggiornamento 4 step |
| `app/components/TechSection.vue` | Aggiornamento testo intro e descrizioni categorie |
| `app/components/ContactSection.vue` | Aggiornamento headline, testo, CTA |
| `app/pages/index.vue` | Aggiornamento meta SEO |
| `app/pages/servizi.vue` | Riscrittura completa contenuti |
| `app/pages/about.vue` | Aggiornamento testo bio e titolo |
