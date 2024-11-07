<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  interface CoolParticle {
    element: HTMLElement | SVGSVGElement;
    left: number;
    size: number;
    top: number;
    direction: number;
    speedHorz: number;
    speedUp: number;
    spinSpeed: number;
    spinVal: number;
  }

  let instanceCounter = 0;
  export let text: string;
  export let onClick: () => void = () => {};

  function getContainer(): HTMLElement {
    const id = "_coolMode_effect";
    let container = document.getElementById(id);

    if (!container) {
      container = document.createElement("div");
      container.id = id;
      container.style.cssText = "overflow:hidden; position:fixed; height:100%; top:0; left:0; right:0; bottom:0; pointer-events:none; z-index:2147483647";
      document.body.appendChild(container);
    }

    return container;
  }

  function createParticleEffect(element: HTMLElement): () => void {
    instanceCounter++;
    const sizes = [15, 20, 25, 35, 45];
    const limit = 45;
    let particles: CoolParticle[] = [];
    let autoAddParticle = false;
    let mouseX = 0;
    let mouseY = 0;
    const container = getContainer();

    function generateParticle() {
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const speedHorz = Math.random() * 10;
      const speedUp = Math.random() * 25;
      const spinVal = Math.random() * 360;
      const spinSpeed = Math.random() * 35 * (Math.random() <= 0.5 ? -1 : 1);
      const top = mouseY - size / 2;
      const left = mouseX - size / 2;
      const direction = Math.random() <= 0.5 ? -1 : 1;

      const particle = document.createElement("div");
      const svgNS = "http://www.w3.org/2000/svg";
      const circleSVG = document.createElementNS(svgNS, "svg");
      const circle = document.createElementNS(svgNS, "circle");
      
      circle.setAttributeNS(null, "cx", (size / 2).toString());
      circle.setAttributeNS(null, "cy", (size / 2).toString());
      circle.setAttributeNS(null, "r", (size / 2).toString());
      circle.setAttributeNS(null, "fill", `hsl(${Math.random() * 360}, 70%, 50%)`);

      circleSVG.appendChild(circle);
      circleSVG.setAttribute("width", size.toString());
      circleSVG.setAttribute("height", size.toString());

      particle.appendChild(circleSVG);
      particle.style.position = "absolute";
      particle.style.transform = `translate3d(${left}px, ${top}px, 0px) rotate(${spinVal}deg)`;

      container.appendChild(particle);

      particles.push({
        direction,
        element: particle,
        left,
        size,
        speedHorz,
        speedUp,
        spinSpeed,
        spinVal,
        top,
      });
    }

    function updateParticles() {
      particles.forEach((p) => {
        p.left = p.left - p.speedHorz * p.direction;
        p.top = p.top - p.speedUp;
        p.speedUp = Math.min(p.size, p.speedUp - 1);
        p.spinVal = p.spinVal + p.spinSpeed;

        if (p.top >= Math.max(window.innerHeight, document.body.clientHeight) + p.size) {
          particles = particles.filter((o) => o !== p);
          p.element.remove();
        }

        p.element.style.cssText = `
          position: absolute;
          will-change: transform;
          top: ${p.top}px;
          left: ${p.left}px;
          transform: rotate(${p.spinVal}deg);
        `;
      });
    }

    let animationFrame: number;
    let lastParticleTime = 0;
    const particleDelay = 30;

    function loop() {
      const currentTime = performance.now();
      if (autoAddParticle && particles.length < limit && currentTime - lastParticleTime > particleDelay) {
        generateParticle();
        lastParticleTime = currentTime;
      }

      updateParticles();
      animationFrame = requestAnimationFrame(loop);
    }

    loop();

    const updateMousePosition = (e: MouseEvent | TouchEvent) => {
      if ("touches" in e) {
        mouseX = e.touches?.[0].clientX;
        mouseY = e.touches?.[0].clientY;
      } else {
        mouseX = (e as MouseEvent).clientX;
        mouseY = (e as MouseEvent).clientY;
      }
    };

    const startParticles = (e: MouseEvent | TouchEvent) => {
      updateMousePosition(e);
      autoAddParticle = true;
    };

    const stopParticles = () => {
      autoAddParticle = false;
    };

    element.addEventListener("mousemove", updateMousePosition);
    element.addEventListener("mousedown", startParticles);
    element.addEventListener("mouseup", stopParticles);
    element.addEventListener("mouseleave", stopParticles);
    element.addEventListener("touchstart", startParticles);
    element.addEventListener("touchend", stopParticles);
    element.addEventListener("touchmove", updateMousePosition);

    return () => {
      element.removeEventListener("mousemove", updateMousePosition);
      element.removeEventListener("mousedown", startParticles);
      element.removeEventListener("mouseup", stopParticles);
      element.removeEventListener("mouseleave", stopParticles);
      element.removeEventListener("touchstart", startParticles);
      element.removeEventListener("touchend", stopParticles);
      element.removeEventListener("touchmove", updateMousePosition);

      const interval = setInterval(() => {
        if (particles.length === 0) {
          cancelAnimationFrame(animationFrame);
          clearInterval(interval);
          if (--instanceCounter === 0) {
            container.remove();
          }
        }
      }, 500);
    };
  }

  let buttonElement: HTMLElement;
  let cleanup: (() => void) | undefined;

  onMount(() => {
    if (buttonElement) {
      cleanup = createParticleEffect(buttonElement);
    }
  });

  onDestroy(() => {
    if (cleanup) cleanup();
  });
</script>

<button
  bind:this={buttonElement}
  on:click={onClick}
  class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#FF2D9E] text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00E5FF]/20"
>
  {text}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    />
  </svg>
</button>