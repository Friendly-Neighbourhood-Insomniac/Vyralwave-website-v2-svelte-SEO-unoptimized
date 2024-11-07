<script lang="ts">
  import { onMount } from 'svelte';
  import createGlobe from 'cobe';
  import { spring } from 'svelte/motion';
  import { cn } from '../lib/utils';

  let x = spring(0, {
    stiffness: 0.04,
    damping: 0.4,
    precision: 0.005
  });

  let className = '';
  export { className as class };
  let pointerInteracting: any = null;
  let pointerInteractionMovement = 0;
  let canvas: HTMLCanvasElement;

  let phi = 0;
  let width = 0;
  
  let onResize = () => {
    width = canvas.offsetWidth;
  };

  let onRender = (state: any) => {
    if (!pointerInteracting) {
      phi += 0.005;
    }
    state.phi = phi + $x;
    state.width = width * 2;
    state.height = width * 2;
  };

  const handleTouchStart = (e: TouchEvent) => {
    e.preventDefault();
    pointerInteracting = e.touches[0].clientX - pointerInteractionMovement;
    canvas.style.cursor = "grabbing";
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    if (pointerInteracting !== null) {
      const delta = e.touches[0].clientX - pointerInteracting;
      pointerInteractionMovement = delta;
      x.set(delta / 200);
    }
  };

  const handleTouchEnd = () => {
    pointerInteracting = null;
    canvas.style.cursor = "grab";
  };

  onMount(() => {
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width,
      height: width,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 0.4,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1, 0, 1],
      markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.03 },
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.05 },
        { location: [19.4326, -99.1332], size: 0.04 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [34.6937, 135.5022], size: 0.05 },
        { location: [41.0082, 28.9784], size: 0.06 },
      ],
      onRender: onRender
    });

    return () => {
      window.removeEventListener('resize', onResize);
    };
  });
</script>

<div
  class={cn(
    "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px] z-10 mt-24",
    className
  )}
>
  <canvas
    class="h-full w-full [contain:layout_paint_size]"
    bind:this={canvas}
    on:pointerdown={(e) => {
      pointerInteracting = e.clientX - pointerInteractionMovement;
      canvas.style.cursor = "grabbing";
    }}
    on:pointerup={() => {
      pointerInteracting = null;
      canvas.style.cursor = "grab";
    }}
    on:pointerout={() => {
      pointerInteracting = null;
      canvas.style.cursor = "grab";
    }}
    on:mousemove={(e) => {
      if (pointerInteracting !== null) {
        const delta = e.clientX - pointerInteracting;
        pointerInteractionMovement = delta;
        x.set(delta / 200);
      }
    }}
    on:touchstart|preventDefault={handleTouchStart}
    on:touchmove|preventDefault={handleTouchMove}
    on:touchend={handleTouchEnd}
  />
</div>