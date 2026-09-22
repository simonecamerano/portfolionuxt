<script setup lang="ts">
const section = ref<HTMLElement | null>(null)
const activeAct = ref(0)
const reducedMotion = ref(false)
let ticking = false

const acts = [
  { number: 'I', title: 'Il rumore', label: 'PROCESSI SCOLLEGATI', text: 'Informazioni sparse e passaggi manuali rubano attenzione al lavoro che conta.', metric: '7 strumenti', tone: 'violet' },
  { number: 'II', title: 'La regia', label: 'FLUSSO AI', text: 'Regole e AI riuniscono le informazioni, preparano il lavoro e chiedono conferma quando serve.', metric: '1 flusso', tone: 'cyan' },
  { number: 'III', title: 'La scena libera', label: 'TEAM IN CONTROLLO', text: 'Il risultato arriva già contestualizzato. Il team decide, risponde e avanza più velocemente.', metric: 'Tempo recuperato', tone: 'mint' },
]

const updateAct = () => {
  if (!section.value || reducedMotion.value) return
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

onMounted(() => {
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion.value) { activeAct.value = acts.length - 1; return }
  updateAct()
  window.addEventListener('scroll', scheduleUpdate, { passive: true })
  window.addEventListener('resize', scheduleUpdate, { passive: true })
})

onUnmounted(() => {
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
          <span class="story-kicker">UNA STORIA OPERATIVA IN TRE ATTI</span>
          <h2 id="cinema-story-title" class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-.05em] leading-[.98] text-[#f4f1ff] mt-5">Dal disordine a un <span>flusso chiaro.</span></h2>
          <div class="story-acts mt-10">
            <article v-for="(act, index) in acts" :key="act.number" class="story-act" :class="[{ active: index === activeAct, complete: index < activeAct }, act.tone]">
              <span class="act-number">{{ act.number }}</span>
              <div><p>{{ act.label }}</p><h3>{{ act.title }}</h3><span class="act-text">{{ act.text }}</span></div>
            </article>
          </div>
        </div>

        <div class="story-stage" :class="acts[activeAct].tone">
          <div class="stage-top"><span>SEQUENZA OPERATIVA / {{ acts[activeAct].number }}</span><span>{{ String(activeAct + 1).padStart(2, '0') }} / 03</span></div>
          <div class="stage-light" /><div class="stage-floor" />
          <div class="stage-rings"><i /><i /><i /></div>
          <div class="stage-object object-left" /><div class="stage-object object-right" />
          <div class="stage-screen">
            <span class="screen-label">{{ acts[activeAct].label }}</span>
            <strong>{{ acts[activeAct].metric }}</strong>
            <div class="screen-bars"><i /><i /><i /></div>
            <p>{{ activeAct === 0 ? 'Informazioni non coordinate' : activeAct === 1 ? 'Flusso attivo con controllo umano' : 'Risultato pronto per il team' }}</p>
          </div>
          <div class="stage-subtitle">{{ acts[activeAct].title }}<span>{{ acts[activeAct].text }}</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cinema-story{height:300vh;background:#090811;position:relative}.cinema-story-sticky{position:sticky;top:0;min-height:100vh;display:flex;align-items:center;overflow:hidden}.story-grid{position:absolute;inset:0;opacity:.25;background-image:linear-gradient(rgba(196, 181, 253, .06) 1px,transparent 1px),linear-gradient(90deg,rgba(196, 181, 253, .06) 1px,transparent 1px);background-size:62px 62px;mask-image:radial-gradient(ellipse 70% 70% at 65% 45%,black,transparent)}.story-kicker{color:#c4b5fd;font:600 10px ui-monospace,SFMono-Regular,monospace;letter-spacing:.15em}.story-acts{display:flex;flex-direction:column}.story-act{display:grid;grid-template-columns:34px 1fr;gap:15px;padding:14px 0;opacity:.28;transition:opacity .35s ease,transform .35s ease}.story-act.active{opacity:1;transform:translateX(8px)}.story-act.complete{opacity:.5}.act-number{padding-top:3px;color:#c4b5fd;font:700 12px ui-monospace,SFMono-Regular,monospace}.story-act p{color:#9e97b5;font:600 8px ui-monospace,SFMono-Regular,monospace;letter-spacing:.14em}.story-act h3{color:#f0edf9;font-size:1rem;font-weight:700;margin-top:3px}.act-text{display:block;max-height:0;overflow:hidden;margin-top:0;color:#8d899d;font-size:.8rem;line-height:1.6;opacity:0;transition:max-height .35s ease,margin .35s ease,opacity .35s ease}.story-act.active .act-text{max-height:90px;margin-top:5px;opacity:1}.story-stage{position:relative;min-height:570px;overflow:hidden;border:1px solid rgba(196, 181, 253, .18);border-radius:28px;background:radial-gradient(circle at 50% 45%,rgba(139, 92, 246, .16),transparent 38%),linear-gradient(145deg,#171229,#080812 75%);box-shadow:0 45px 100px rgba(0,0,0,.45);transition:background .5s ease}.stage-top{position:absolute;z-index:4;left:0;right:0;top:0;height:48px;display:flex;align-items:center;justify-content:space-between;padding:0 18px;border-bottom:1px solid rgba(255,255,255,.07);color:#958eaa;font:600 9px ui-monospace,SFMono-Regular,monospace;letter-spacing:.14em}.stage-light{position:absolute;left:50%;top:28%;width:310px;height:310px;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,rgba(196, 181, 253, .34),transparent 66%);filter:blur(15px);transition:background .5s ease}.stage-floor{position:absolute;left:-10%;right:-10%;bottom:-21%;height:55%;border-radius:50% 50% 0 0;background:linear-gradient(180deg,rgba(139, 92, 246, .14),rgba(8,8,16,.9));transform:perspective(400px) rotateX(57deg)}.stage-rings{position:absolute;left:50%;top:48%;width:280px;height:280px;transform:translate(-50%,-50%);border-radius:50%;border:1px solid rgba(196, 181, 253, .2);animation:rings 18s linear infinite}.stage-rings i{position:absolute;inset:18px;border:1px solid rgba(196, 181, 253, .18);border-radius:50%}.stage-rings i:nth-child(2){inset:45px}.stage-rings i:nth-child(3){inset:72px}.stage-object{position:absolute;z-index:2;width:105px;height:190px;border:1px solid rgba(196, 181, 253, .22);border-radius:16px 16px 30px 30px;background:linear-gradient(145deg,rgba(196, 181, 253, .32),rgba(29,19,56,.35));box-shadow:inset 1px 1px rgba(255,255,255,.13),0 30px 45px rgba(0,0,0,.25)}.object-left{left:13%;top:36%;transform:rotate(-15deg) skewY(7deg)}.object-right{right:13%;top:32%;transform:rotate(14deg) skewY(-7deg)}.stage-screen{position:absolute;z-index:3;left:50%;top:50%;width:230px;min-height:210px;padding:21px;transform:translate(-50%,-50%);border:1px solid rgba(244,237,255,.44);border-radius:18px;background:linear-gradient(145deg,rgba(52,41,89,.85),rgba(16,13,29,.82));box-shadow:inset 0 1px rgba(255,255,255,.2),0 30px 50px rgba(0,0,0,.35);text-align:center;transition:transform .5s ease}.story-stage.cyan .stage-screen{transform:translate(-50%,-50%) scale(1.06)}.screen-label{display:block;color:#c4b5fd;font:600 8px ui-monospace,SFMono-Regular,monospace;letter-spacing:.14em}.screen-bars{display:flex;justify-content:center;align-items:end;gap:5px;height:45px;margin:14px 0}.screen-bars i{display:block;width:12px;border-radius:4px 4px 0 0;background:linear-gradient(#c4b5fd,#8b5cf6)}.screen-bars i:nth-child(1){height:45%}.screen-bars i:nth-child(2){height:92%}.screen-bars i:nth-child(3){height:67%}.stage-screen strong{display:block;color:#fff;font-size:1.7rem;letter-spacing:-.06em}.stage-screen p{color:#aaa1bd;font-size:.68rem;margin-top:12px}.stage-subtitle{position:absolute;z-index:3;bottom:28px;left:30px;color:#f3efff;font-size:1rem;font-weight:700}.stage-subtitle span{display:block;margin-top:6px;max-width:330px;color:#9990ab;font-size:.75rem;font-weight:400;line-height:1.5}.story-stage.cyan{background:radial-gradient(circle at 50% 45%,rgba(59, 130, 246, .16),transparent 38%),linear-gradient(145deg,#101d32,#070d16 75%)}.story-stage.cyan .stage-light{background:radial-gradient(circle,rgba(59, 130, 246, .35),transparent 66%)}.story-stage.cyan .stage-screen{border-color:rgba(147, 197, 253, .5)}.story-stage.cyan .screen-bars i{background:linear-gradient(#93c5fd,#3b82f6)}.story-stage.mint{background:radial-gradient(circle at 50% 45%,rgba(108,255,201,.14),transparent 38%),linear-gradient(145deg,#102923,#07120f 75%)}.story-stage.mint .stage-light{background:radial-gradient(circle,rgba(134,255,208,.3),transparent 66%)}.story-stage.mint .stage-screen{border-color:rgba(181,255,221,.48)}.story-stage.mint .screen-bars i{background:linear-gradient(#c5ffe6,#5cdfa8)}@keyframes rings{to{transform:translate(-50%,-50%) rotate(360deg)}}@media(prefers-reduced-motion:reduce){.stage-rings{animation:none!important}.story-act,.story-stage,.stage-light,.stage-screen{transition:none}}@media(max-width:1023px){.cinema-story{height:auto}.cinema-story-sticky{position:relative;min-height:auto}.story-act{opacity:1}.act-text{max-height:90px;margin-top:5px;opacity:1}.story-stage{min-height:500px}}@media(max-width:640px){.story-stage{min-height:470px;border-radius:22px}.stage-object{width:65px;height:125px}.object-left{left:5%}.object-right{right:5%}.stage-screen{width:200px;min-height:190px}.stage-subtitle{left:20px;bottom:20px}.stage-subtitle span{max-width:260px}.stage-rings{width:240px;height:240px}}
</style>
