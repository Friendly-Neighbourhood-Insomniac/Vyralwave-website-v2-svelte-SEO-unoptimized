<script lang="ts">
  import { Motion, useMotionValue, useMotionTemplate } from "svelte-motion";
  import { onMount } from "svelte";
  import { cn } from '../lib/utils';

  export let gradientSize: number = 300;
  export let gradientColor: string = '#00E5FF';
  export let gradientOpacity: number = 0.2;
  let className: string = "";
  export { className as class };

  let gradSize = useMotionValue(gradientSize);
  let gradColor = useMotionValue(gradientColor);
  let mouseX = useMotionValue(-gradientSize);
  let mouseY = useMotionValue(-gradientSize);
  let isTouching = false;
  let touchStartY = 0;
  let isScrolling = false;

  function handleMouseMove(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleTouchStart(e: TouchEvent) {
    touchStartY = e.touches[0].clientY;
    isTouching = true;
    isScrolling = false;
  }

  function handleTouchMove(e: TouchEvent) {
    if (!isTouching) return;

    const touchY = e.touches[0].clientY;
    const deltaY = Math.abs(touchY - touchStartY);

    // If vertical movement is significant, prioritize scrolling
    if (deltaY > 10) {
      isScrolling = true;
      handleTouchEnd();
      return;
    }

    if (!isScrolling) {
      const touch = e.touches[0];
      const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
      mouseX.set(touch.clientX - rect.left);
      mouseY.set(touch.clientY - rect.top);
    }
  }

  function handleTouchEnd() {
    isTouching = false;
    isScrolling = false;
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }

  function handleMouseLeave() {
    if (!isTouching) {
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
    }
  }

  onMount(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  });

  let bg = useMotionTemplate`radial-gradient(${gradSize}px circle at ${mouseX}px ${mouseY}px, ${gradColor}, transparent 100%)`;
</script>

<div
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
  on:touchend={handleTouchEnd}
  class={cn(
    "group relative h-full bg-[#2A2751] rounded-xl transition-all duration-300 p-4 overflow-hidden",
    className
  )}
>
  <div class="relative z-10">
    <slot />
  </div>
  <Motion
    style={{
      background: bg,
      opacity: gradientOpacity,
    }}
    let:motion
  >
    <div
      use:motion
      class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
  </Motion>
</div>

<style>
  /* Apply hover effects only on devices that support hover */
  @media (hover: hover) {
    :global(.group:hover) {
      transform: scale(1.02);
      transition: transform 0.3s ease;
    }
  }

  /* For touch devices, only show effect on active state */
  @media (hover: none) {
    :global(.group:active) {
      transform: scale(1.02);
    }
  }
</style>