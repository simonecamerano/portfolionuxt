<script setup lang="ts">
const hero = ref<HTMLElement | null>(null)
const reducedMotion = ref(false)
const scene = ref({ x: 0, y: 0 })
let frame = 0

const sceneStyle = computed(() => ({
  '--scene-x': `${scene.value.x}px`,
  '--scene-y': `${scene.value.y}px`,
}))

const updateScene = (event: PointerEvent) => {
  if (reducedMotion.value || !hero.value || window.innerWidth < 1024) return
  const rect = hero.value.getBoundingClientRect()
  const targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 18
  const targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 14
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    scene.value = { x: targetX, y: targetY }
  })
}

const resetScene = () => {
  scene.value = { x: 0, y: 0 }
}

onMounted(() => {
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

onUnmounted(() => cancelAnimationFrame(frame))
</script>

<template>
  <section
    id="hero"
    ref="hero"
    class="cinema-hero relative min-h-[100svh] overflow-hidden pt-16"
    aria-label="Introduzione"
    @pointermove="updateScene"
    @pointerleave="resetScene"
  >
    <div class="cinema-noise absolute inset-0 pointer-events-none" aria-hidden="true" />
    <div class="cinema-stars absolute inset-0 pointer-events-none" aria-hidden="true" />
    <div class="cinema-horizon absolute inset-x-0 bottom-0 h-[48%] pointer-events-none" aria-hidden="true" />

    <div class="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20 min-h-[calc(100svh-4rem)] grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-6 items-center">
      <div class="flex flex-col items-start relative z-20">
        <div v-motion :initial="reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="reducedMotion ? { duration: 0 } : { duration: 0.5, ease: 'easeOut' }" class="motion-preload cinema-kicker mb-7">
          <span class="cinema-signal" aria-hidden="true" />
          AI Workflow Engineer
          <span class="cinema-divider" aria-hidden="true" />
          Per PMI e piccoli team
        </div>

        <h1 v-motion :initial="reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }" :animate="{ opacity: 1, y: 0 }" :transition="reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.08, ease: 'easeOut' }" class="motion-preload text-[clamp(2.75rem,5.2vw,5.1rem)] font-extrabold leading-[1.02] tracking-[-0.06em] text-[#f6f7fb] max-w-[690px]">
          Metti ordine nel lavoro. <span class="cinema-text">Lascia spazio</span> <span class="cinema-text cinema-word">alle persone.</span>
        </h1>

        <p v-motion :initial="reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }" :animate="{ opacity: 1, y: 0 }" :transition="reducedMotion ? { duration: 0 } : { duration: 0.58, delay: 0.18, ease: 'easeOut' }" class="motion-preload text-base sm:text-lg text-[#a3a6b9] leading-relaxed max-w-xl mt-7">
          Trasformo attività frammentate in workflow AI chiari, controllabili e costruiti sul modo in cui il tuo team lavora davvero.
        </p>

        <div v-motion :initial="reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="reducedMotion ? { duration: 0 } : { duration: 0.55, delay: 0.28, ease: 'easeOut' }" class="motion-preload flex flex-wrap gap-4 mt-9">
          <a href="#contatti" class="cinema-button cinema-button-primary">
            Analizziamo il tuo processo
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#progetti" class="cinema-button cinema-button-secondary">Guarda le soluzioni</a>
        </div>

        <div v-motion :initial="{ opacity: reducedMotion ? 1 : 0 }" :animate="{ opacity: 1 }" :transition="reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.42 }" class="motion-preload flex flex-wrap gap-x-5 gap-y-3 mt-10 text-xs text-[#85899c]">
          <span v-for="item in ['Processi reali', 'Controllo umano', 'Risultati misurabili']" :key="item" class="flex items-center gap-2"><i class="cinema-dot" aria-hidden="true" />{{ item }}</span>
        </div>
      </div>

      <div v-motion :initial="reducedMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.96, y: 24 }" :animate="{ opacity: 1, scale: 1, y: 0 }" :transition="reducedMotion ? { duration: 0 } : { duration: 0.9, delay: 0.16, ease: 'easeOut' }" class="motion-preload cinema-scene-wrap relative min-h-[490px] lg:min-h-[620px]" :style="sceneStyle" aria-hidden="true">
        <div class="cinema-scene">
          <div class="scene-void" />
          <div class="scene-light-cone" />
          <div class="scene-floor-plane"><i /><i /><i /><i /><i /></div>
          <div class="scene-fog fog-one" /><div class="scene-fog fog-two" />
          <div class="scene-aura" />
          <div class="scene-orbital orbit-back" />
          <div class="scene-orbital orbit-front" />
          <div class="scene-orb"><span>AI</span><small>CENTRO DI COORDINAMENTO</small></div>
          <div class="scene-ray ray-one" /><div class="scene-ray ray-two" />

          <article class="cinema-panel panel-source">
            <span class="panel-eyebrow">01 / RACCOLTA</span>
            <strong>Segnali sparsi</strong>
            <div class="panel-lines"><i /><i /><i /></div>
            <span class="panel-tag">Email · CRM · Docs</span>
          </article>

          <article class="cinema-panel panel-flow">
            <span class="panel-eyebrow">02 / FLUSSO AI</span>
            <strong>Ordine operativo</strong>
            <div class="flow-map"><i /><i /><i /><b /></div>
            <span class="panel-tag">Regole · AI · Azioni</span>
          </article>

          <article class="cinema-panel panel-human">
            <span class="panel-eyebrow">03 / CONTROLLO</span>
            <strong>Decisione umana</strong>
            <div class="approval"><i>✓</i><span>PRONTO PER LA REVISIONE</span></div>
            <span class="panel-tag">Approvazione richiesta</span>
          </article>

          <div class="scene-frame"><span>SIMONE CAMERANO</span><i /><span>AI WORKFLOW ENGINEER</span></div>
          <div class="scene-caption"><span class="caption-line" /> IL TUO LAVORO, IN UNA NUOVA PROSPETTIVA</div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[#636579]" aria-hidden="true"><span>SCORRI PER ENTRARE NEL PROCESSO</span><span class="cinema-scroll" /></div>
  </section>
</template>

<style scoped>
.cinema-hero{background:radial-gradient(ellipse 65% 58% at 72% 48%,rgba(139, 92, 246, .13),transparent 70%),radial-gradient(ellipse 50% 45% at 18% 10%,rgba(59, 130, 246, .1),transparent 72%),#08080f}.cinema-noise{opacity:.24;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.28'/%3E%3C/svg%3E")}.cinema-stars{opacity:.65;background-image:radial-gradient(circle at 12% 22%,#fff 0 1px,transparent 1.5px),radial-gradient(circle at 38% 11%,#93c5fd 0 1px,transparent 1.5px),radial-gradient(circle at 68% 18%,#fff 0 1px,transparent 1.5px),radial-gradient(circle at 91% 31%,#93c5fd 0 1px,transparent 1.5px);background-size:280px 230px,340px 290px,420px 350px,510px 390px}.cinema-horizon{background:linear-gradient(180deg,transparent,rgba(11,9,20,.16) 35%,#08080f 96%)}.cinema-kicker{display:inline-flex;align-items:center;gap:.65rem;padding:.58rem .78rem;border:1px solid rgba(196, 181, 253, .2);border-radius:999px;background:rgba(18,15,30,.68);color:#8b5cf6;font:600 .62rem ui-monospace,SFMono-Regular,monospace;letter-spacing:.09em;text-transform:uppercase;box-shadow:inset 0 1px rgba(255,255,255,.06)}.cinema-signal{width:6px;height:6px;border-radius:50%;background:#c4b5fd;box-shadow:0 0 12px #c4b5fd;animation:signal 2s ease-in-out infinite}.cinema-divider{width:1px;height:12px;background:rgba(255,255,255,.16)}.cinema-text{background:linear-gradient(105deg,#c4b5fd,#c4b5fd 54%,#93c5fd);-webkit-background-clip:text;background-clip:text;color:transparent}.cinema-word{display:inline-block;padding-right:.09em;margin-right:-.09em}.cinema-button{display:inline-flex;align-items:center;justify-content:center;gap:.55rem;min-height:48px;padding:.75rem 1.25rem;border-radius:999px;font-size:.82rem;font-weight:700;transition:transform .2s ease,background .2s ease}.cinema-button:hover{transform:translateY(-2px)}.cinema-button-primary{color:#170c24;background:linear-gradient(110deg,#c4b5fd,#93c5fd 55%,#93c5fd);box-shadow:0 14px 35px rgba(139, 92, 246, .25)}.cinema-button-secondary{color:#c4b5fd;border:1px solid rgba(196, 181, 253, .2);background:rgba(29,25,42,.42)}.cinema-button-secondary:hover{background:rgba(139, 92, 246, .18)}.cinema-dot{width:5px;height:5px;border-radius:50%;background:#c4b5fd;box-shadow:0 0 9px rgba(196, 181, 253, .8)}
.cinema-scene-wrap{perspective:1200px}.cinema-scene{position:absolute;inset:0;transform-style:preserve-3d;transform:rotateX(calc(var(--scene-y) * -.32)) rotateY(calc(var(--scene-x) * .32));transition:transform .22s ease-out}.scene-aura{position:absolute;left:50%;top:47%;width:310px;height:310px;transform:translate(-50%,-50%) translateZ(-80px);border-radius:50%;background:radial-gradient(circle,rgba(139, 92, 246, .3),rgba(139, 92, 246, .08) 45%,transparent 70%);filter:blur(9px)}.scene-orbital{position:absolute;left:50%;top:47%;border:1px solid rgba(196, 181, 253, .24);border-radius:50%;transform:translate(-50%,-50%) rotateX(66deg);box-shadow:0 0 30px rgba(139, 92, 246, .1)}.orbit-back{width:450px;height:220px;animation:orbit 12s linear infinite}.orbit-front{width:350px;height:170px;border-color:rgba(147, 197, 253, .25);animation:orbit 8s linear infinite reverse}.scene-orb{position:absolute;left:50%;top:47%;width:160px;aspect-ratio:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;transform:translate(-50%,-50%) translateZ(50px);border:1px solid rgba(196, 181, 253, .6);border-radius:50%;background:radial-gradient(circle at 36% 30%,#fff 0%,#c4b5fd 11%,#8b5cf6 34%,#32245c 63%,#130e2a 100%);box-shadow:inset -18px -20px 40px rgba(0,0,0,.42),inset 10px 10px 28px rgba(255,255,255,.35),0 0 64px rgba(139, 92, 246, .38);animation:orbPulse 4s ease-in-out infinite}.scene-orb span{font-size:2.9rem;font-weight:900;letter-spacing:-.1em;color:#fff;text-shadow:0 0 16px rgba(255,255,255,.8)}.scene-orb small{font:600 7px ui-monospace,SFMono-Regular,monospace;letter-spacing:.12em;color:#f0eaff}.scene-ray{position:absolute;left:50%;top:47%;width:560px;height:1px;transform-origin:left;background:linear-gradient(90deg,rgba(196, 181, 253, .7),transparent);filter:blur(.2px)}.ray-one{transform:translate(10px,-25px) rotate(-24deg) translateZ(-20px)}.ray-two{transform:translate(10px,20px) rotate(29deg) translateZ(-20px);opacity:.6}.cinema-panel{position:absolute;width:185px;padding:15px;border:1px solid rgba(196, 181, 253, .2);border-radius:16px;background:linear-gradient(145deg,rgba(41,34,64,.68),rgba(12,12,23,.73));box-shadow:0 28px 55px rgba(0,0,0,.28),inset 0 1px rgba(255,255,255,.08);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}.cinema-panel strong{display:block;margin:7px 0 13px;color:#f4f0ff;font-size:.88rem}.panel-eyebrow,.panel-tag{font:600 8px ui-monospace,SFMono-Regular,monospace;letter-spacing:.13em}.panel-eyebrow{color:#c4b5fd}.panel-tag{color:#8c849f}.panel-source{left:2%;top:14%;transform:translateZ(30px) rotateY(9deg);animation:panelFloat 5s ease-in-out infinite}.panel-flow{right:2%;top:23%;transform:translateZ(70px) rotateY(-10deg);animation:panelFloat 5.8s .8s ease-in-out infinite}.panel-human{left:15%;bottom:7%;transform:translateZ(100px) rotateY(7deg);animation:panelFloat 5.2s 1.6s ease-in-out infinite}.panel-lines{display:flex;flex-direction:column;gap:6px;margin-bottom:14px}.panel-lines i{height:4px;border-radius:10px;background:linear-gradient(90deg,#c4b5fd,rgba(196, 181, 253, .18))}.panel-lines i:nth-child(2){width:74%}.panel-lines i:nth-child(3){width:49%}.flow-map{position:relative;height:30px;margin-bottom:14px}.flow-map i{position:absolute;width:8px;height:8px;border-radius:50%;background:#c4b5fd;box-shadow:0 0 9px #c4b5fd}.flow-map i:nth-child(1){left:0;top:9px}.flow-map i:nth-child(2){left:43%;top:0}.flow-map i:nth-child(3){right:0;top:14px}.flow-map b{position:absolute;left:6px;right:6px;top:13px;height:1px;background:linear-gradient(90deg,#c4b5fd,#93c5fd)}.approval{display:flex;align-items:center;gap:8px;margin-bottom:13px}.approval i{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:rgba(167,243,208,.15);color:#a7f3d0;font-style:normal}.approval span{font:600 8px ui-monospace,SFMono-Regular,monospace;letter-spacing:.1em;color:#b7f7dd}.scene-caption{position:absolute;right:5%;bottom:8%;display:flex;align-items:center;gap:10px;color:#827a96;font:600 8px ui-monospace,SFMono-Regular,monospace;letter-spacing:.12em}.caption-line{width:40px;height:1px;background:#c4b5fd}.cinema-scroll{display:block;width:58px;height:1px;background:linear-gradient(90deg,#c4b5fd,transparent);animation:scroll 2s ease-in-out infinite}

/* Cinematic depth layers */
.cinema-scene{isolation:isolate;overflow:visible}.scene-void{position:absolute;inset:4% -7%;border:1px solid rgba(196, 181, 253, .09);border-radius:50% 50% 4% 4%;background:radial-gradient(ellipse at 50% 38%,rgba(139, 92, 246, .22),rgba(9,8,18,.12) 47%,transparent 72%);transform:translateZ(-160px) rotateX(7deg);box-shadow:inset 0 0 95px rgba(12,6,31,.88)}.scene-light-cone{position:absolute;z-index:-1;left:50%;top:4%;width:520px;height:560px;transform:translateX(-50%) translateZ(-120px);clip-path:polygon(45% 0,55% 0,100% 100%,0 100%);background:linear-gradient(180deg,rgba(196, 181, 253, .23),rgba(139, 92, 246, .05) 42%,transparent 90%);filter:blur(2px)}.scene-floor-plane{position:absolute;z-index:-1;left:-12%;right:-12%;top:55%;height:56%;overflow:hidden;transform:perspective(520px) rotateX(62deg) translateZ(-45px);transform-origin:50% 0;background:linear-gradient(180deg,rgba(139, 92, 246, .2),rgba(15,10,29,.03) 75%);border-top:1px solid rgba(196, 181, 253, .34);box-shadow:0 -22px 55px rgba(139, 92, 246, .17)}.scene-floor-plane:before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(196, 181, 253, .18) 1px,transparent 1px),linear-gradient(90deg,rgba(196, 181, 253, .14) 1px,transparent 1px);background-size:44px 32px;mask-image:linear-gradient(180deg,black,transparent)}.scene-floor-plane i{position:absolute;top:0;width:1px;height:100%;background:linear-gradient(rgba(196, 181, 253, .7),transparent)}.scene-floor-plane i:nth-child(1){left:9%}.scene-floor-plane i:nth-child(2){left:28%}.scene-floor-plane i:nth-child(3){left:50%}.scene-floor-plane i:nth-child(4){left:72%}.scene-floor-plane i:nth-child(5){left:91%}.scene-fog{position:absolute;z-index:1;width:330px;height:100px;border-radius:50%;filter:blur(24px);opacity:.4;background:radial-gradient(ellipse,rgba(196, 181, 253, .24),transparent 70%);pointer-events:none}.fog-one{left:3%;bottom:22%;transform:translateZ(20px)}.fog-two{right:0;top:24%;transform:translateZ(-10px);opacity:.25}.scene-aura{width:520px;height:520px;background:radial-gradient(circle,rgba(196, 181, 253, .37),rgba(139, 92, 246, .12) 38%,transparent 69%);filter:blur(12px);transform:translate(-50%,-50%) translateZ(-70px)}.scene-orbital{border-color:rgba(196, 181, 253, .34);box-shadow:0 0 45px rgba(139, 92, 246, .16)}.orbit-back{width:570px;height:270px}.orbit-front{width:430px;height:205px}.scene-orb{width:250px;background:radial-gradient(circle at 31% 25%,#fff 0%,#f6f2ff 6%,#c4b5fd 13%,#8b5cf6 31%,#241545 63%,#090711 100%);box-shadow:inset -30px -34px 55px rgba(0,0,0,.64),inset 20px 18px 34px rgba(255,255,255,.47),0 0 105px rgba(139, 92, 246, .52),0 34px 80px rgba(0,0,0,.52)}.scene-orb:after{content:'';position:absolute;inset:10px;border:1px solid rgba(255,255,255,.18);border-radius:50%;box-shadow:inset 0 0 25px rgba(255,255,255,.17)}.scene-orb span{font-size:4.35rem}.scene-orb small{font-size:8px}.scene-ray{width:740px;opacity:.8}.cinema-panel{width:172px;border-color:rgba(196, 181, 253, .24);background:linear-gradient(145deg,rgba(55,42,88,.57),rgba(10,9,19,.49));box-shadow:0 36px 70px rgba(0,0,0,.4),inset 0 1px rgba(255,255,255,.12);backdrop-filter:blur(18px)}.cinema-panel{will-change:transform}.panel-source{left:-1%;top:11%;transform:translateZ(5px) rotateY(22deg) rotateX(3deg);animation:panelSourceFloat 5s ease-in-out infinite}.panel-flow{right:-2%;top:18%;transform:translateZ(55px) rotateY(-22deg) rotateX(2deg);animation:panelFlowFloat 5.8s .8s ease-in-out infinite}.panel-human{left:10%;bottom:3%;transform:translateZ(125px) rotateY(14deg) rotateX(-4deg);animation:panelHumanFloat 5.2s 1.6s ease-in-out infinite}.scene-frame{position:absolute;z-index:7;left:2%;right:2%;top:3%;display:flex;align-items:center;gap:12px;color:rgba(196, 181, 253, .44);font:600 7px ui-monospace,SFMono-Regular,monospace;letter-spacing:.19em}.scene-frame i{flex:1;height:1px;background:linear-gradient(90deg,rgba(196, 181, 253, .24),transparent)}.scene-caption{right:1%;bottom:5%;color:#8b5cf6}.caption-line{background:#c4b5fd}

@keyframes signal{50%{opacity:.42;box-shadow:0 0 4px #c4b5fd}}@keyframes orbit{to{transform:translate(-50%,-50%) rotateZ(360deg) rotateX(66deg)}}@keyframes orbPulse{50%{box-shadow:inset -18px -20px 40px rgba(0,0,0,.42),inset 10px 10px 28px rgba(255,255,255,.35),0 0 90px rgba(139, 92, 246, .5)}}@keyframes panelFloat{50%{transform:translateY(-10px)}}@keyframes panelSourceFloat{50%{transform:translateY(-10px) translateZ(5px) rotateY(22deg) rotateX(3deg)}}@keyframes panelFlowFloat{50%{transform:translateY(-10px) translateZ(55px) rotateY(-22deg) rotateX(2deg)}}@keyframes panelHumanFloat{50%{transform:translateY(-10px) translateZ(125px) rotateY(14deg) rotateX(-4deg)}}@keyframes scroll{50%{transform:translateX(22px);opacity:.3}}
@media(prefers-reduced-motion:reduce){.cinema-signal,.scene-orbital,.scene-orb,.cinema-panel,.cinema-scroll{animation:none!important}.cinema-button,.cinema-scene{transition:none}.cinema-scene{transform:none!important}}
@media(max-width:1023px){.cinema-scene{transform:none!important}.scene-caption{display:none}.panel-source{left:3%;top:8%}.panel-flow{right:3%;top:18%}.panel-human{left:12%;bottom:6%}}@media(max-width:640px){.cinema-scene-wrap{min-height:470px}.scene-aura{width:240px;height:240px}.scene-orb{width:130px}.scene-orb span{font-size:2.4rem}.scene-orbital.orbit-back{width:340px;height:160px}.scene-orbital.orbit-front{width:270px;height:130px}.cinema-panel{width:140px;padding:11px;border-radius:12px}.cinema-panel strong{font-size:.7rem;margin:5px 0 9px}.panel-eyebrow,.panel-tag{font-size:6px}.panel-source{left:0;top:8%}.panel-flow{right:0;top:19%}.panel-human{left:8%;bottom:4%}.scene-ray{width:400px}.cinema-kicker{font-size:.53rem}.cinema-button{width:100%}}
</style>
