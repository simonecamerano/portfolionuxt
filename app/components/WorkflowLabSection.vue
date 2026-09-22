<script setup lang="ts">
const section = ref<HTMLElement | null>(null)
const activeStep = ref(0)
const progress = ref(0)
const reducedMotion = ref(false)

const stages = [
  {
    num: '01',
    tag: 'INPUT',
    title: 'Partiamo dagli strumenti che usi già',
    text: 'Email, documenti, fogli di calcolo, CRM e database diventano fonti ordinate e verificabili.',
  },
  {
    num: '02',
    tag: 'ORCHESTRATE',
    title: 'Il workflow coordina attività e AI',
    text: 'Regole, integrazioni e modelli AI eseguono compiti precisi: classificare, cercare, sintetizzare e preparare output.',
  },
  {
    num: '03',
    tag: 'CONTROL',
    title: 'Le decisioni importanti restano alle persone',
    text: 'Approvazioni, soglie e tracciamento rendono il sistema controllabile anche quando il processo cresce.',
  },
  {
    num: '04',
    tag: 'OUTPUT',
    title: 'Il risultato arriva dove serve',
    text: 'Report, aggiornamenti e notifiche raggiungono il team senza aggiungere un altro strumento difficile da gestire.',
  },
]

const updateProgress = () => {
  if (!section.value || reducedMotion.value) return
  const rect = section.value.getBoundingClientRect()
  const travel = Math.max(rect.height - window.innerHeight, 1)
  progress.value = Math.min(1, Math.max(0, -rect.top / travel))
  activeStep.value = Math.min(stages.length - 1, Math.floor(progress.value * stages.length))
}

onMounted(() => {
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion.value) {
    activeStep.value = stages.length - 1
    progress.value = 1
    return
  }
  updateProgress()
  window.addEventListener('scroll', updateProgress, { passive: true })
  window.addEventListener('resize', updateProgress, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
  window.removeEventListener('resize', updateProgress)
})
</script>

<template>
  <section ref="section" class="workflow-lab" aria-labelledby="workflow-title">
    <div class="workflow-sticky">
      <div class="lab-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div class="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24 w-full">
        <div class="grid lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-20 items-center">
          <div>
            <span class="lab-kicker mb-6">
              <span class="status-dot" aria-hidden="true" />
              Dal processo al sistema
            </span>
            <h2 id="workflow-title" class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.02] tracking-[-0.045em] text-[#f4f7fb]">
              Un workflow AI deve funzionare nel <span class="text-gradient-cyan">lavoro reale.</span>
            </h2>
            <p class="text-[#7f8b9e] leading-relaxed mt-6 max-w-xl">
              La tecnologia resta dietro le quinte. Davanti ci sono passaggi chiari, responsabilità definite e un risultato utile al team.
            </p>

            <div class="mt-9 space-y-2">
              <article
                v-for="(stage, index) in stages"
                :key="stage.num"
                class="workflow-copy"
                :class="{ active: index === activeStep, complete: index < activeStep }"
              >
                <div class="workflow-index">{{ stage.num }}</div>
                <div>
                  <span>{{ stage.tag }}</span>
                  <h3>{{ stage.title }}</h3>
                  <p>{{ stage.text }}</p>
                </div>
              </article>
            </div>
          </div>

          <div class="workflow-visual" :style="{ '--lab-progress': `${progress * 100}%` }">
            <div class="visual-header">
              <div><span class="status-dot" /> PROCESS MAP / LIVE</div>
              <span>{{ String(activeStep + 1).padStart(2, '0') }} / 04</span>
            </div>

            <div class="pipeline">
              <div class="pipeline-line"><span /></div>

              <div class="pipeline-stage stage-input" :class="{ active: activeStep >= 0 }">
                <div class="stage-cluster">
                  <span>EMAIL</span><span>DOC</span><span>CRM</span><span>DB</span>
                </div>
                <strong>Fonti</strong>
                <small>Dati e strumenti</small>
              </div>

              <div class="pipeline-stage stage-ai" :class="{ active: activeStep >= 1 }">
                <div class="mini-core"><span>AI</span></div>
                <strong>Workflow</strong>
                <small>Regole e modelli</small>
              </div>

              <div class="pipeline-stage stage-human" :class="{ active: activeStep >= 2 }">
                <div class="human-icon">✓</div>
                <strong>Controllo</strong>
                <small>Revisione umana</small>
              </div>

              <div class="pipeline-stage stage-output" :class="{ active: activeStep >= 3 }">
                <div class="output-icon">
                  <span /><span /><span />
                </div>
                <strong>Risultato</strong>
                <small>Pronto per il team</small>
              </div>
            </div>

            <div class="visual-log">
              <span class="log-label">EVENT LOG</span>
              <div class="log-lines">
                <p :class="{ visible: activeStep >= 0 }"><span>16:42:01</span> Fonti collegate e dati normalizzati</p>
                <p :class="{ visible: activeStep >= 1 }"><span>16:42:02</span> Workflow AI in esecuzione</p>
                <p :class="{ visible: activeStep >= 2 }"><span>16:42:03</span> Controllo umano superato</p>
                <p :class="{ visible: activeStep >= 3 }"><span>16:42:04</span> Output consegnato al team</p>
              </div>
            </div>

            <div class="progress-meter"><span /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.workflow-lab { position:relative; height:320vh; background:#071018; }
.workflow-sticky { position:sticky; top:0; min-height:100vh; display:flex; align-items:center; overflow:hidden; }
.workflow-copy { display:grid; grid-template-columns:34px 1fr; gap:14px; padding:12px 0; opacity:.28; transition:opacity .35s ease,transform .35s ease; }
.workflow-copy.active { opacity:1; transform:translateX(8px); }.workflow-copy.complete{opacity:.48}
.workflow-index { padding-top:3px; color:#22d3ee; font:700 10px monospace; letter-spacing:.1em; }
.workflow-copy span { color:#22d3ee; font:700 8px monospace; letter-spacing:.16em; }
.workflow-copy h3 { margin-top:3px; color:#dce7f4; font-size:.95rem; font-weight:700; }
.workflow-copy p { max-height:0; overflow:hidden; margin-top:0; color:#77859a; font-size:.78rem; line-height:1.55; opacity:0; transition:max-height .35s ease,opacity .35s ease,margin .35s ease; }
.workflow-copy.active p { max-height:80px; margin-top:5px; opacity:1; }
.workflow-visual { position:relative; min-height:580px; overflow:hidden; border:1px solid rgba(34,211,238,.15); border-radius:26px; background:linear-gradient(145deg,rgba(10,21,33,.97),rgba(5,11,18,.98)); box-shadow:0 40px 100px rgba(0,0,0,.4); }
.visual-header { height:48px; display:flex; align-items:center; justify-content:space-between; padding:0 18px; border-bottom:1px solid rgba(255,255,255,.06); color:#637189; font:600 9px monospace; letter-spacing:.14em; }.visual-header div{display:flex;align-items:center;gap:8px}
.pipeline { position:relative; display:grid; grid-template-columns:repeat(4,1fr); align-items:center; gap:10px; min-height:355px; padding:48px 24px 34px; }
.pipeline-line { position:absolute; left:12%; right:12%; top:49%; height:2px; overflow:hidden; background:rgba(100,116,139,.14); }.pipeline-line span{display:block;width:var(--lab-progress);height:100%;background:linear-gradient(90deg,#2563eb,#22d3ee,#fbbf24,#34d399);box-shadow:0 0 12px #22d3ee;transition:width .12s linear}
.pipeline-stage { position:relative; z-index:2; display:flex; min-width:0; flex-direction:column; align-items:center; text-align:center; opacity:.25; filter:saturate(.3); transform:scale(.9); transition:opacity .35s ease,filter .35s ease,transform .35s ease; }.pipeline-stage.active{opacity:1;filter:none;transform:scale(1)}
.pipeline-stage strong { margin-top:15px; color:#dbeafe; font-size:.78rem; }.pipeline-stage small{margin-top:4px;color:#64748b;font-size:.62rem}
.stage-cluster { display:grid; grid-template-columns:repeat(2,34px); gap:5px; }.stage-cluster span{display:grid;place-items:center;height:30px;border:1px solid rgba(96,165,250,.3);border-radius:5px;background:#0c1b2b;color:#7dd3fc;font:600 7px monospace}
.mini-core { width:82px; height:82px; display:grid; place-items:center; border:1px dashed rgba(34,211,238,.5); border-radius:50%; animation:spin 12s linear infinite; }.mini-core:before{content:'';position:absolute;width:60px;height:60px;border-radius:50%;background:radial-gradient(circle,rgba(34,211,238,.25),rgba(37,99,235,.05));box-shadow:0 0 30px rgba(34,211,238,.22)}.mini-core span{position:relative;color:#ecfeff;font-size:1.5rem;font-weight:800;animation:spin 12s linear infinite reverse}
.human-icon { display:grid;place-items:center;width:68px;height:68px;border:1px solid rgba(251,191,36,.45);border-radius:18px;background:rgba(251,191,36,.08);color:#fbbf24;font-size:1.5rem;box-shadow:0 0 25px rgba(251,191,36,.08)}
.output-icon { width:70px;height:68px;display:flex;flex-direction:column;justify-content:center;gap:7px;padding:14px;border:1px solid rgba(52,211,153,.35);border-radius:12px;background:rgba(52,211,153,.06)}.output-icon span{height:3px;border-radius:3px;background:#34d399}.output-icon span:nth-child(2){width:76%}.output-icon span:nth-child(3){width:48%}
.visual-log { margin:0 24px;padding:16px 18px;border:1px solid rgba(255,255,255,.06);border-radius:12px;background:rgba(0,0,0,.2);font-family:monospace}.log-label{color:#475569;font-size:8px;letter-spacing:.16em}.log-lines{margin-top:9px;display:flex;flex-direction:column;gap:5px}.log-lines p{color:#789; font-size:9px;opacity:.16;transition:opacity .3s ease}.log-lines p.visible{opacity:1}.log-lines p span{margin-right:10px;color:#3d5067}
.progress-meter { position:absolute;left:24px;right:24px;bottom:18px;height:2px;background:rgba(255,255,255,.06);overflow:hidden}.progress-meter span{display:block;width:var(--lab-progress);height:100%;background:#22d3ee;box-shadow:0 0 8px #22d3ee}
@keyframes spin { to{transform:rotate(360deg)} }
@media (max-width:1023px) {
  .workflow-lab{height:auto}.workflow-sticky{position:relative;min-height:auto}.workflow-copy{opacity:1}.workflow-copy p{max-height:80px;margin-top:5px;opacity:1}.workflow-visual{min-height:530px}.pipeline-stage{opacity:1;filter:none;transform:none}.pipeline-line span,.progress-meter span{width:100%}
}
@media (max-width:640px) {
  .workflow-visual{min-height:700px}.pipeline{grid-template-columns:repeat(2,1fr);gap:30px 12px;padding:36px 18px 25px}.pipeline-line{display:none}.visual-log{margin:0 14px}.stage-cluster{grid-template-columns:repeat(2,31px)}
}
</style>
