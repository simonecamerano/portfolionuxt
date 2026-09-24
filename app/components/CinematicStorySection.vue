<script setup lang="ts">
const section = ref<HTMLElement | null>(null)
const activeAct = ref(0)
const reducedMotion = ref(false)
const compactLayout = ref(false)
const stage = ref<HTMLElement | null>(null)
const stageVisible = ref(false)
let ticking = false
let motionQuery: MediaQueryList | null = null
let layoutQuery: MediaQueryList | null = null
let stageObserver: IntersectionObserver | null = null
let autoTimer: ReturnType<typeof setInterval> | undefined

const AUTO_ADVANCE_MS = 4000

const acts = [
  { number: '01', title: 'Le informazioni si disperdono', label: 'PRIMA', text: 'Email, fogli e strumenti separati costringono il team a cercare, copiare e ricontrollare.', tone: 'violet' },
  { number: '02', title: 'I passaggi si collegano', label: 'IL FLUSSO', text: 'Regole e AI raccolgono il contesto, preparano il lavoro e segnalano ciò che richiede attenzione.', tone: 'cyan' },
  { number: '03', title: 'Il team prende la decisione', label: 'DOPO', text: 'Il risultato arriva con le informazioni utili. Le persone verificano, approvano e vanno avanti.', tone: 'mint' },
] as const

const currentAct = computed(() => acts[activeAct.value] ?? acts[0])

const updateAct = () => {
  if (!section.value || reducedMotion.value || compactLayout.value) return
  const rect = section.value.getBoundingClientRect()
  const travel = Math.max(rect.height - window.innerHeight, 1)
  const progress = Math.min(0.999, Math.max(0, -rect.top / travel))
  activeAct.value = Math.floor(progress * acts.length)
}

const scheduleUpdate = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => { updateAct(); ticking = false })
}

// Without the sticky scroll (mobile or reduced motion) the acts become buttons,
// otherwise the stage would stay frozen on a single scene.
const interactive = computed(() => compactLayout.value || reducedMotion.value)

// On mobile the stage cycles by itself while it is on screen. Reduced motion
// keeps it still: only a tap changes the scene.
const stopAutoAdvance = () => {
  clearInterval(autoTimer)
  autoTimer = undefined
}
const startAutoAdvance = () => {
  stopAutoAdvance()
  if (!compactLayout.value || reducedMotion.value || !stageVisible.value) return
  autoTimer = setInterval(() => {
    activeAct.value = (activeAct.value + 1) % acts.length
  }, AUTO_ADVANCE_MS)
}

const selectAct = (index: number) => {
  if (!interactive.value) return
  activeAct.value = index
  // A tap restarts the countdown, so the chosen scene gets its full time.
  startAutoAdvance()
}

const syncPreferences = () => {
  reducedMotion.value = motionQuery?.matches ?? false
  compactLayout.value = layoutQuery?.matches ?? false
  if (compactLayout.value) activeAct.value = 0
  else if (reducedMotion.value) activeAct.value = acts.length - 1
  else updateAct()
  startAutoAdvance()
}

onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  layoutQuery = window.matchMedia('(max-width: 1023px)')
  motionQuery.addEventListener('change', syncPreferences)
  layoutQuery.addEventListener('change', syncPreferences)
  stageObserver = new IntersectionObserver(([entry]) => {
    stageVisible.value = !!entry?.isIntersecting
    startAutoAdvance()
  }, { threshold: 0.4 })
  if (stage.value) stageObserver.observe(stage.value)
  syncPreferences()
  window.addEventListener('scroll', scheduleUpdate, { passive: true })
  window.addEventListener('resize', scheduleUpdate, { passive: true })
})

onUnmounted(() => {
  stopAutoAdvance()
  stageObserver?.disconnect()
  motionQuery?.removeEventListener('change', syncPreferences)
  layoutQuery?.removeEventListener('change', syncPreferences)
  window.removeEventListener('scroll', scheduleUpdate)
  window.removeEventListener('resize', scheduleUpdate)
})
</script>

<template>
  <section ref="section" class="cinema-story" aria-labelledby="cinema-story-title">
    <div class="cinema-story-sticky">
      <div class="story-grid" aria-hidden="true" />
      <div class="relative z-10 max-w-7xl mx-auto w-full px-6 py-16 lg:py-20 grid lg:grid-cols-[.82fr_1.18fr] gap-12 lg:gap-20 items-center">
        <div>
          <span class="story-kicker">UN PROCESSO, TRE MOMENTI</span>
          <h2 id="cinema-story-title" class="story-title">Meno passaggi a vuoto.<br><span>Più decisioni.</span></h2>
          <p class="story-intro">Un flusso ben progettato porta le informazioni giuste alla persona giusta, nel momento in cui servono.</p>
          <div class="story-acts mt-10">
            <component
              :is="interactive ? 'button' : 'article'"
              v-for="(act, index) in acts"
              :key="act.number"
              :type="interactive ? 'button' : undefined"
              :aria-pressed="interactive ? index === activeAct : undefined"
              class="story-act"
              :class="[{ active: index === activeAct, complete: index < activeAct }, act.tone]"
              @click="selectAct(index)"
            >
              <span class="act-number">{{ act.number }}</span>
              <div><p>{{ act.label }}</p><h3>{{ act.title }}</h3><span class="act-text">{{ act.text }}</span></div>
            </component>
          </div>
        </div>

        <div ref="stage" class="story-stage" :class="currentAct.tone" aria-hidden="true">
          <div class="stage-top"><span><i class="stage-signal" /> COME CAMBIA IL LAVORO</span><span>{{ String(activeAct + 1).padStart(2, '0') }} / 03</span></div>
          <div class="stage-progress" aria-hidden="true"><span :style="{ transform: `scaleX(${(activeAct + 1) / acts.length})` }" /></div>
          <div class="stage-watermark">{{ currentAct.number }}</div>
          <div class="stage-heading"><span>{{ currentAct.label }}</span><strong>{{ activeAct === 0 ? 'Ogni strumento ha un pezzo della storia.' : activeAct === 1 ? 'Il contesto si compone da sé.' : 'Ora si può decidere, senza rincorrere i dati.' }}</strong></div>

          <div v-if="activeAct === 0" class="stage-scene scattered-scene">
            <svg class="fragment-links" viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false"><path d="M25 15 L43 39 M75 15 L57 39 M50 66 L50 82" /></svg>
            <div class="source-card source-email"><span class="source-icon">✉</span><span><small>IN ARRIVO</small><strong>Email</strong><i /></span></div>
            <div class="source-card source-sheet"><span class="source-icon">▦</span><span><small>DATI</small><strong>Fogli</strong><i /></span></div>
            <div class="source-card source-crm"><span class="source-icon">◫</span><span><small>CLIENTI</small><strong>CRM</strong><i /></span></div>
            <div class="fragment-center"><span class="fragment-mark">?</span><div><small>IL PUNTO CIECO</small><strong>Contesto da ricostruire</strong><p>I dati ci sono, ma non si parlano.</p></div></div>
          </div>

          <div v-else-if="activeAct === 1" class="stage-scene flow-scene">
            <div class="flow-inputs"><span>EMAIL</span><span>FOGLI</span><span>CRM</span></div>
            <div class="flow-connector" />
            <div class="flow-core"><span>✦</span><strong>Regole + AI</strong><small>raccolgono · preparano · segnalano</small></div>
            <div class="flow-connector" />
            <div class="flow-output"><b>✓</b><strong>Contesto pronto</strong><small>per la verifica del team</small></div>
            <div class="flow-status"><span>01&nbsp; RACCOLTA</span><i /><span>02&nbsp; PREPARAZIONE</span><i /><span>03&nbsp; VERIFICA</span></div>
          </div>

          <div v-else class="stage-scene decision-scene">
            <div class="decision-top"><span><i /> PRONTO PER LA REVISIONE</span><span>03 / 03</span></div>
            <div class="decision-main"><span class="decision-icon">✓</span><div><small>PROSSIMO PASSAGGIO</small><strong>Una decisione informata.</strong><p>Informazioni raccolte, risultato contestualizzato e controllo finale al team.</p></div></div>
            <div class="decision-footer"><span>AI prepara</span><i /><span>Il team verifica</span><i /><span>Si procede</span></div>
          </div>
          <div class="stage-bottom">PROCESSO REALE, TECNOLOGIA PROPORZIONATA</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cinema-story{height:300vh;position:relative;background:#090811;color:#f4f1ff}.cinema-story-sticky{position:sticky;top:0;min-height:100vh;display:flex;align-items:center;overflow:hidden;background:radial-gradient(ellipse 55% 65% at 76% 50%,rgba(97,73,165,.13),transparent 78%)}.story-grid{position:absolute;inset:0;opacity:.25;background-image:linear-gradient(rgba(196,181,253,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(196,181,253,.06) 1px,transparent 1px);background-size:64px 64px;mask-image:radial-gradient(ellipse 75% 75% at 65% 45%,#000,transparent)}.cinema-story-sticky>div:last-child{gap:clamp(36px,5vw,82px)}.story-kicker{display:inline-flex;align-items:center;gap:12px;color:#c4b5fd;font:700 10px ui-monospace,SFMono-Regular,monospace;letter-spacing:.16em}.story-kicker:before{content:'';display:block;width:25px;height:1px;background:#c4b5fd;box-shadow:0 0 12px #c4b5fd}.story-title{margin-top:26px;color:#f4f1ff;font-size:clamp(2.8rem,4.5vw,5rem);font-weight:800;line-height:1;letter-spacing:-.065em;text-wrap:balance}.story-title span{background:linear-gradient(105deg,#c4b5fd,#93c5fd);-webkit-background-clip:text;background-clip:text;color:transparent}.story-intro{max-width:430px;margin-top:20px;color:#aaa5bb;font-size:1rem;line-height:1.65}.story-acts{margin-top:36px;border-top:1px solid rgba(196,181,253,.14)}.story-act{position:relative;display:grid;grid-template-columns:34px 1fr;gap:14px;padding:16px 0;border-bottom:1px solid rgba(196,181,253,.14);opacity:.4;transition:opacity .35s ease,transform .35s ease}.story-act.active{opacity:1;transform:translateX(7px)}.story-act.active:before{content:'';position:absolute;top:0;bottom:0;left:-14px;width:2px;background:linear-gradient(#c4b5fd,#93c5fd);box-shadow:0 0 13px #c4b5fd}.story-act.complete{opacity:.67}.act-number{padding-top:3px;color:#c4b5fd;font:700 12px ui-monospace,SFMono-Regular,monospace}.story-act p{color:#a9a1bb;font:700 9px ui-monospace,SFMono-Regular,monospace;letter-spacing:.13em}.story-act h3{margin-top:3px;color:#f6f3ff;font-size:1.04rem;font-weight:750;letter-spacing:-.02em}.act-text{display:block;max-height:0;overflow:hidden;margin:0;color:#a9a5b8;font-size:.82rem;line-height:1.5;opacity:0;transition:max-height .35s ease,margin .35s ease,opacity .35s ease}.story-act.active .act-text{max-height:80px;margin-top:6px;opacity:1}
.story-stage{position:relative;height:min(660px,72vh);min-height:540px;overflow:hidden;border:1px solid rgba(196,181,253,.23);border-radius:26px;background:radial-gradient(circle at 50% 50%,rgba(110,79,177,.16),transparent 62%),linear-gradient(145deg,#171229,#090911 78%);box-shadow:0 45px 100px rgba(0,0,0,.43),inset 0 1px rgba(255,255,255,.08);transition:background .4s ease}.story-stage:before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(196,181,253,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(196,181,253,.045) 1px,transparent 1px);background-size:38px 38px;mask-image:linear-gradient(to bottom,transparent 10%,#000 55%,transparent 95%)}.stage-top{position:absolute;z-index:5;top:0;left:0;right:0;height:53px;display:flex;align-items:center;justify-content:space-between;padding:0 24px;border-bottom:1px solid rgba(196,181,253,.12);color:#aea6c1;font:700 9px ui-monospace,SFMono-Regular,monospace;letter-spacing:.13em}.stage-top>span:first-child{display:flex;align-items:center;gap:9px}.stage-signal{width:6px;height:6px;border-radius:50%;background:#c4b5fd;box-shadow:0 0 12px #c4b5fd}.stage-progress{position:absolute;z-index:6;top:52px;left:0;right:0;height:2px;background:rgba(196,181,253,.07)}.stage-progress span{display:block;width:100%;height:100%;transform-origin:left;background:linear-gradient(90deg,#c4b5fd,#93c5fd);box-shadow:0 0 12px #c4b5fd;transition:transform .5s ease}.stage-watermark{position:absolute;right:0;bottom:-.2em;color:rgba(196,181,253,.05);font-size:clamp(240px,28vw,400px);font-weight:900;line-height:1;letter-spacing:-.1em;user-select:none}.stage-heading{position:absolute;z-index:3;top:90px;left:clamp(25px,4vw,52px);right:25px}.stage-heading span{display:block;margin-bottom:9px;color:#c4b5fd;font:700 10px ui-monospace,SFMono-Regular,monospace;letter-spacing:.15em}.stage-heading strong{display:block;max-width:510px;color:#f8f5ff;font-size:clamp(1.5rem,2.4vw,2.3rem);line-height:1.12;letter-spacing:-.04em}.stage-scene{position:absolute;z-index:3;left:clamp(25px,4vw,52px);right:clamp(25px,4vw,52px);top:190px;bottom:55px}.stage-bottom{position:absolute;z-index:4;bottom:0;left:0;right:0;height:42px;display:flex;align-items:center;padding:0 24px;border-top:1px solid rgba(196,181,253,.11);color:#777087;font:700 8px ui-monospace,SFMono-Regular,monospace;letter-spacing:.15em}
.source-card{position:absolute;display:flex;align-items:center;gap:12px;width:175px;padding:14px;border:1px solid rgba(196,181,253,.28);border-radius:14px;background:linear-gradient(145deg,rgba(77,61,116,.78),rgba(22,19,38,.94));box-shadow:0 20px 50px rgba(0,0,0,.35),inset 0 1px rgba(255,255,255,.15)}.source-card>span:last-child{flex:1}.source-card small{display:block;color:#b1a5c9;font:700 8px ui-monospace,SFMono-Regular,monospace;letter-spacing:.12em}.source-card strong{display:block;margin-top:3px;color:#fff;font-size:1rem}.source-card i{display:block;width:70%;height:3px;margin-top:9px;border-radius:3px;background:linear-gradient(90deg,#c4b5fd,transparent)}.source-icon{display:grid;place-items:center;width:36px;height:36px;border-radius:10px;background:rgba(196,181,253,.16);color:#ddcfff;font-size:1.3rem}.scattered-scene .source-card{z-index:3}.source-email{left:8%;top:10%;transform:rotate(-7deg)}.source-sheet{right:8%;top:1%;transform:rotate(7deg)}.source-crm{left:50%;bottom:3%;transform:translateX(-50%) rotate(3deg)}.fragment-links{position:absolute;z-index:1;inset:0;width:100%;height:100%;overflow:visible}.fragment-links path{fill:none;stroke:rgba(196,181,253,.52);stroke-width:1.5px;stroke-dasharray:5 8;vector-effect:non-scaling-stroke;filter:drop-shadow(0 0 5px rgba(196,181,253,.5))}.fragment-center{position:absolute;z-index:2;top:48%;left:50%;display:flex;align-items:center;gap:14px;width:245px;min-height:130px;padding:20px;transform:translate(-50%,-50%);border:1px solid rgba(196,181,253,.5);border-radius:18px;background:radial-gradient(circle at 30% 20%,rgba(122,100,179,.3),transparent 70%),linear-gradient(145deg,rgba(39,32,68,.97),rgba(17,16,30,.97));box-shadow:0 0 60px rgba(139,92,246,.2),0 26px 55px rgba(0,0,0,.44),inset 0 1px rgba(255,255,255,.14)}.fragment-center:before{content:'';position:absolute;inset:-13px;border:1px dashed rgba(196,181,253,.27);border-radius:27px}.fragment-mark{display:grid;place-items:center;flex:none;width:48px;height:48px;border:1px solid rgba(196,181,253,.5);border-radius:14px;background:rgba(196,181,253,.14);color:#e4dcff;font-size:1.85rem;font-weight:800}.fragment-center small{display:block;color:#b4a7cc;font:700 8px ui-monospace,SFMono-Regular,monospace;letter-spacing:.12em}.fragment-center strong{display:block;margin-top:5px;color:white;font-size:1.02rem;line-height:1.12}.fragment-center p{margin-top:6px;color:#aaa1ba;font-size:.7rem;line-height:1.4}.source-card{animation:float 5s ease-in-out infinite alternate}.source-sheet{animation-delay:1s}.source-crm{animation-delay:2s}
.story-stage.cyan{background:radial-gradient(circle at 50% 50%,rgba(67,117,205,.18),transparent 62%),linear-gradient(145deg,#101c31,#080c16 78%)}.cyan .stage-heading span{color:#a7cfff}.flow-scene{display:flex;align-items:center;justify-content:center;padding-bottom:95px}.flow-inputs{display:flex;flex-direction:column;gap:13px}.flow-inputs span{min-width:105px;padding:12px 14px;border:1px solid rgba(147,197,253,.25);border-radius:8px;background:rgba(30,46,78,.83);color:#c2d7f1;font:700 9px ui-monospace,SFMono-Regular,monospace;letter-spacing:.1em;text-align:center}.flow-connector{flex:1;min-width:20px;max-width:55px;height:1px;background:linear-gradient(90deg,rgba(147,197,253,.25),#93c5fd,rgba(147,197,253,.25));box-shadow:0 0 12px #93c5fd}.flow-core{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;flex:none;width:230px;height:230px;border:1px solid rgba(147,197,253,.55);border-radius:50%;background:radial-gradient(circle at 35% 28%,rgba(147,197,253,.42),rgba(48,64,119,.36) 43%,rgba(11,16,34,.95) 75%);box-shadow:0 0 75px rgba(83,132,228,.25),inset 0 1px rgba(255,255,255,.3);text-align:center}.flow-core:before{content:'';position:absolute;inset:-12px;border:1px dashed rgba(147,197,253,.33);border-radius:50%;animation:orbit 24s linear infinite}.flow-core span{color:#e1edff;font-size:2.5rem;text-shadow:0 0 22px #93c5fd}.flow-core strong{margin-top:8px;color:white;font-size:1.18rem}.flow-core small{max-width:140px;margin-top:7px;color:#bfd0e9;font-size:.68rem;line-height:1.3}.flow-output{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:none;width:140px;min-height:145px;padding:14px;border:1px solid rgba(147,197,253,.34);border-radius:13px;background:rgba(30,46,73,.8);text-align:center}.flow-output b{display:grid;place-items:center;width:37px;height:37px;margin-bottom:12px;border-radius:50%;background:rgba(147,197,253,.2);color:#badaff}.flow-output strong{color:white;font-size:.94rem}.flow-output small{margin-top:5px;color:#9fb2cf;font-size:.68rem}.flow-status{position:absolute;right:0;bottom:6px;left:0;display:flex;align-items:center;gap:13px;padding:15px 0;border-top:1px solid rgba(147,197,253,.18);color:#a9c9ed;font:700 9px ui-monospace,SFMono-Regular,monospace;letter-spacing:.1em}.flow-status span{white-space:nowrap}.flow-status i{flex:1;height:1px;background:linear-gradient(90deg,rgba(147,197,253,.2),rgba(147,197,253,.7))}
.story-stage.mint{background:radial-gradient(circle at 50% 50%,rgba(79,163,143,.15),transparent 62%),linear-gradient(145deg,#11251f,#08130f 78%)}.mint .stage-heading span{color:#a7e7d1}.decision-scene{top:225px;bottom:auto;overflow:hidden;border:1px solid rgba(173,239,218,.39);border-radius:18px;background:linear-gradient(145deg,rgba(40,77,72,.9),rgba(17,31,37,.94));box-shadow:0 28px 70px rgba(0,0,0,.32),0 0 50px rgba(108,214,177,.1),inset 0 1px rgba(255,255,255,.16)}.decision-top{display:flex;align-items:center;justify-content:space-between;padding:15px 21px;border-bottom:1px solid rgba(173,239,218,.16);color:#bce9d8;font:700 9px ui-monospace,SFMono-Regular,monospace;letter-spacing:.12em}.decision-top>span:first-child{display:flex;align-items:center;gap:9px}.decision-top i{width:6px;height:6px;border-radius:50%;background:#9ee7c9;box-shadow:0 0 13px #9ee7c9}.decision-main{display:flex;align-items:center;gap:20px;padding:30px 25px}.decision-icon{display:grid;place-items:center;flex:none;width:65px;height:65px;border:1px solid rgba(173,239,218,.5);border-radius:18px;background:rgba(173,239,218,.2);color:#d4ffe8;font-size:2rem}.decision-main small{color:#a6cbbb;font:700 9px ui-monospace,SFMono-Regular,monospace;letter-spacing:.14em}.decision-main strong{display:block;margin:5px 0;color:white;font-size:1.34rem;letter-spacing:-.04em}.decision-main p{max-width:280px;color:#b9cfc8;font-size:.76rem;line-height:1.5}.decision-footer{display:flex;align-items:center;justify-content:space-between;gap:9px;padding:13px 20px;border-top:1px solid rgba(173,239,218,.16);color:#bbd6d1;font-size:.7rem}.decision-footer i{flex:1;height:1px;background:linear-gradient(90deg,rgba(173,239,218,.1),rgba(173,239,218,.7))}
button.story-act{width:100%;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}button.story-act:focus-visible{outline:2px solid #c4b5fd;outline-offset:4px;border-radius:6px}
@keyframes float{to{translate:0 -9px}}@keyframes orbit{to{transform:rotate(360deg)}}
@media(min-width:1024px){.story-stage.mint .decision-scene{top:calc(50% - 55px)}}
@media(max-height:800px) and (min-width:1151px){.flow-scene{padding-bottom:75px}.flow-core{width:190px;height:190px}.flow-output{min-height:120px}.flow-inputs span{padding:9px 12px}}
@media(max-width:1150px){.story-title{font-size:clamp(2.6rem,4.3vw,4.5rem)}.flow-core{width:170px;height:170px}.flow-output{width:110px;min-height:125px}.flow-inputs span{min-width:75px;padding:9px}}
@media(max-width:1023px){.cinema-story{height:auto}.cinema-story-sticky{position:relative;min-height:auto}.cinema-story-sticky>div:last-child{padding-top:90px;padding-bottom:90px}.story-title{font-size:clamp(3rem,7vw,5rem)}.story-act,.story-act.complete{opacity:.5;transform:none!important}.story-act.active{opacity:1}.act-text{max-height:100px;margin-top:6px;opacity:1}.story-stage{height:540px;min-height:0}}
@media(max-width:640px){.cinema-story-sticky>div:last-child{padding-top:70px;padding-bottom:70px}.story-title{font-size:clamp(2.65rem,10.5vw,4rem)}.story-intro{font-size:.92rem}.story-stage{height:460px;border-radius:20px}.stage-top,.stage-bottom{padding:0 15px;font-size:7px}.stage-heading{top:78px;left:18px;right:18px}.stage-heading strong{font-size:1.42rem}.stage-scene{left:18px;right:18px}.decision-scene{top:198px}.decision-top{padding:12px;font-size:7px}.decision-main{gap:12px;padding:23px 14px}.decision-icon{width:47px;height:47px;font-size:1.4rem}.decision-main strong{font-size:1.06rem}.decision-main p{font-size:.69rem}.decision-footer{padding:11px;font-size:.56rem}}
@media(prefers-reduced-motion:reduce){.cinema-story{height:auto}.cinema-story-sticky{position:relative;min-height:auto}.cinema-story-sticky>div:last-child{padding-top:90px;padding-bottom:90px}.story-act,.story-act.complete{opacity:.5;transform:none!important}.story-act.active{opacity:1}.act-text{max-height:100px;margin-top:6px;opacity:1}.source-card,.flow-core:before{animation:none!important}.story-act,.act-text,.story-stage,.stage-progress span{transition:none}}
/* Below 1024px the scattered cards of scene 1 would overlap the centre card,
   so the sources line up as a row of chips above it. */
@media(max-width:1023px){.scattered-scene{max-width:480px;margin:0 auto;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));align-content:start;gap:8px}.fragment-links{display:none}.scattered-scene .source-card{position:relative;inset:auto;transform:none;width:auto;padding:8px;gap:7px;border-radius:10px}.scattered-scene .source-card small,.scattered-scene .source-card i{display:none}.scattered-scene .source-card strong{margin:0;font-size:.78rem}.scattered-scene .source-icon{width:24px;height:24px;border-radius:7px;font-size:.9rem}.fragment-center{position:relative;grid-column:1/-1;top:auto;left:auto;width:auto;min-height:0;margin-top:14px;transform:none}.fragment-center:before{inset:-7px;border-radius:24px}.story-stage{display:flex;flex-direction:column;padding:90px 0 42px}.stage-heading{position:relative;top:auto;left:auto;right:auto;margin:0 clamp(25px,4vw,52px)}.scattered-scene,.flow-scene{position:relative;inset:auto;flex:1;margin:0 clamp(25px,4vw,52px)}.scattered-scene{align-content:center;width:min(480px,calc(100% - 50px));margin-inline:auto}.flow-scene{flex-wrap:wrap;align-content:center;padding-bottom:0}.flow-status{position:static;flex-basis:100%;margin-top:22px}.decision-scene{position:relative;inset:auto;flex:none;margin:auto clamp(25px,4vw,52px)}}
/* Phones: scenes 2 and 3 shrink to fit a 320px screen. */
@media(max-width:640px){.flow-inputs{gap:8px}.flow-inputs span{min-width:0;padding:7px 8px;font-size:8px}.flow-connector{min-width:8px}.flow-core{width:118px;height:118px}.flow-core span{font-size:1.6rem}.flow-core strong{margin-top:4px;font-size:.86rem}.flow-core small{display:none}.flow-output{width:78px;min-height:0;padding:10px 6px}.flow-output b{width:28px;height:28px;margin-bottom:6px}.flow-output strong{font-size:.72rem}.flow-output small{display:none}.flow-status{gap:6px;padding:10px 0;font-size:7px}.decision-main{padding:16px 14px}.story-stage{height:500px;padding-top:78px}.stage-heading{margin:0 18px}.flow-scene{margin:0 18px}.scattered-scene{width:calc(100% - 36px)}.decision-scene{margin:auto 18px}}
</style>
