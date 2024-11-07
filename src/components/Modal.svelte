<script lang="ts">
  import { Motion } from "svelte-motion";
  import { onMount } from "svelte";
  
  export let isOpen: boolean = false;
  export let onClose: () => void;
  export let title: string;

  let modalContent: HTMLDivElement;

  onMount(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  });

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  $: if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
</script>

{#if isOpen}
  <Motion
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      on:click={handleBackdropClick}
    >
      <Motion
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.3 }}
      >
        <div
          bind:this={modalContent}
          class="relative w-full max-w-lg bg-[#2A2751] rounded-xl shadow-xl border border-white/10 overflow-hidden"
        >
          <!-- Modal Header -->
          <div class="p-6 border-b border-white/10">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl font-bold bg-gradient-to-r from-[#FF2D9E] to-[#00E5FF] bg-clip-text text-transparent">
                {title}
              </h3>
              <button
                class="text-gray-400 hover:text-white transition-colors"
                on:click={onClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Modal Content -->
          <div class="p-6">
            <slot />
          </div>
        </div>
      </Motion>
    </div>
  </Motion>
{/if}