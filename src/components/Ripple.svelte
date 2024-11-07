<script lang="ts">
  export let mainCircleSize: number = 210;
  export let mainCircleOpacity: number = 0.24;
  export let numCircles: number = 8;
  export let baseColor: string = "#FF2D9E";
</script>

<div class="absolute inset-0 flex items-center justify-center">
  {#each { length: numCircles } as _, i}
    <div
      class="absolute animate-ripple rounded-full shadow-xl border top-1/2 left-1/2"
      style="
        width: {mainCircleSize + i * 150}px;
        height: {mainCircleSize + i * 150}px;
        --opacity: {mainCircleOpacity - i * 0.03};
        --duration: 3s;
        --i: {i};
        transform: translate(-50%, -50%);
        border-style: {i === numCircles - 1 ? 'dashed' : 'solid'};
        border-width: 2px;
        border-color: {baseColor}80;
        background: radial-gradient(circle, {baseColor}30, {baseColor}10);
        box-shadow: 0 0 30px {baseColor}40;
      "
    ></div>
  {/each}
</div>

<style>
  .animate-ripple {
    animation: ripple var(--duration) ease-in-out calc(var(--i, 0) * 0.3s) infinite;
  }

  @keyframes ripple {
    0% {
      transform: translate(-50%, -50%) scale(0.8);
      opacity: var(--opacity);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.1);
      opacity: calc(var(--opacity) * 0.7);
    }
    100% {
      transform: translate(-50%, -50%) scale(0.8);
      opacity: var(--opacity);
    }
  }
</style>