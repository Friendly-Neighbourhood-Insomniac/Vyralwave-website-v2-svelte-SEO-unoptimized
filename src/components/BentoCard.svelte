<script lang="ts">
  import { Motion, useMotionValue, useMotionTemplate } from "svelte-motion";
  import { cn } from '../lib/utils';
  import CoolButton from './CoolButton.svelte';
  import Modal from './Modal.svelte';

  export let name: string;
  export let description: string;
  export let href: string = "#";
  export let cta: string;
  export let iconSrc: string;
  export let background: string;
  let className = '';
  export { className as class };

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  let isModalOpen = false;

  function handleMouseMove(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  let bg = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0,229,255,0.1), transparent 40%)`;
</script>

<Motion
  style={{
    background: bg,
  }}
  let:motion
>
  <div
    use:motion
    class={cn(
      "group relative overflow-hidden rounded-xl border border-white/10 bg-[#2A2751] p-6 transition-all hover:border-white/20",
      className
    )}
    on:mousemove={handleMouseMove}
  >
    <div class="relative z-10 h-full flex flex-col">
      <div class="flex items-center gap-3 mb-4">
        <div class="rounded-full bg-[#1E1B3A] p-2">
          <img src={iconSrc} alt={name} class="w-8 h-8" />
        </div>
        <h3 class="text-xl font-semibold text-white">{name}</h3>
      </div>
      
      <p class="text-gray-300 leading-relaxed mb-4">{description}</p>
      
      <div class="mt-auto">
        <CoolButton
          text={cta}
          onClick={() => isModalOpen = true}
        />
      </div>
    </div>
  </div>
</Motion>

<Modal
  isOpen={isModalOpen}
  onClose={() => isModalOpen = false}
  title={name}
>
  <div class="space-y-4">
    <p class="text-gray-300 mb-6">{description}</p>
    <h4 class="text-lg font-semibold text-[#00E5FF] mb-4">Key Features</h4>
    <ul class="space-y-3">
      <slot />
    </ul>
  </div>
</Modal>