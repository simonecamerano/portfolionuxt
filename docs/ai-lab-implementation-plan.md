# AI Lab repositioning

## Obiettivo

Riposizionare il portfolio da sito generalista da Full Stack Developer a presenza professionale da AI Workflow Engineer per PMI e piccoli team. Il sito deve spiegare, prima ancora di elencare tecnologie, come dati e strumenti aziendali diventano workflow AI controllabili.

## Piano

1. Definire il nuovo sistema visivo globale: palette grafite/cyan/blu, superfici tecniche, griglia e stati semantici.
2. Riscrivere la hero e sostituire il mockup di codice con un laboratorio AI SVG/HTML leggero.
3. Aggiungere una sequenza esplicativa legata allo scroll: input, orchestrazione AI, controllo umano, risultato.
4. Riordinare problemi, servizi, metodo e casi di progetto attorno al nuovo posizionamento.
5. Spostare siti e redesign tra i servizi secondari, mantenendo web app e competenze full stack come capacità abilitanti.
6. Aggiornare pagina Servizi, navigazione, contatti e metadati SEO.
7. Verificare build, comportamento responsive, reduced motion e resa visiva nel browser.

## Definition of Done (Contract)

**Obiettivo misurabile:**

- Entro il primo viewport desktop sono visibili ruolo, promessa, pubblico, CTA e una rappresentazione comprensibile del workflow AI.
- La sequenza mostra quattro stati distinti durante lo scroll: fonti, workflow AI, controllo umano e risultato.
- La pagina resta fruibile a 375 px, 768 px e 1280 px senza overflow orizzontale.
- `npm run build` termina con exit code 0.

**Vincoli:**

- Nuxt 3, Vue 3, Tailwind e motion-v già presenti.
- Nessun WebGL, video di sfondo o dipendenza di animazione aggiuntiva.
- Conservare form di contatto, privacy, routing e contenuti dei progetti.
- Rispettare `prefers-reduced-motion` e mantenere il contenuto leggibile senza animazioni.

**Formato output:**

- Componenti Vue e CSS nel repository esistente, testi in italiano e branch `codex/ai-lab-repositioning`.
- Homepage, pagina Servizi e metadati coerenti con il posizionamento AI Workflow Engineer.

**Condizioni di FALLIMENTO (il lavoro non è finito se una è vera):**

- [ ] La hero comunica ancora principalmente siti web o Full Stack Developer.
- [ ] Il laboratorio è decorativo ma non rende leggibile input, AI, controllo umano e risultato.
- [ ] La sequenza provoca overflow, testo sovrapposto o contenuti irraggiungibili su mobile.
- [ ] Con reduced motion rimangono elementi invisibili o una sezione sticky inutilizzabile.
- [ ] Navigazione, form, pagine progetto o build risultano regressi.

## Rischi (Premortem)

Le tre cause di fallimento più probabili, previste prima di scrivere codice:

1. Troppi effetti riducono chiarezza e credibilità → **mitigazione:** una sola sequenza scenografica; il resto usa microinterazioni e gerarchia tipografica.
2. La sezione scroll diventa fragile su mobile o con reduced motion → **mitigazione:** layout mobile lineare e stato finale completo quando il movimento è ridotto.
3. Il riposizionamento cancella competenze utili e opportunità web → **mitigazione:** full stack resta prova di capacità esecutiva e siti/redesign restano un servizio secondario esplicito.

**RISCHIO PIÙ ALTO:** il #1, perché un portfolio AI troppo spettacolare può sembrare una demo e indebolire il messaggio operativo rivolto alle PMI.
