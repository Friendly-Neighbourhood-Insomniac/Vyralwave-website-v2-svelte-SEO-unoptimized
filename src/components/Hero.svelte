<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import Globe from './Globe.svelte';

  function openChat() {
    if (window.voiceflow?.chat?.open) {
      window.voiceflow.chat.open();
    }
  }

  onMount(() => {
    gsap.from('.hero-content', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    });
  });
</script>

<section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pb-16 sm:pb-0">
  <div class="absolute inset-0 bg-gradient-to-b from-[#1E1B3A] via-[#1E1B3A] to-[#2A2751] opacity-90"></div>
  
  <div class="relative w-full h-full flex flex-col items-center justify-center pt-24">
    <div class="absolute inset-0 top-0">
      <Globe class="opacity-50 mix-blend-screen -mt-24 scale-75 sm:scale-100" />
    </div>
    
    <div class="hero-content relative z-20 text-center max-w-4xl mx-auto px-4">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF2D9E] to-[#00E5FF]">
        VyralWave - Digital Marketing & AI Solutions
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300">
        Transform your digital presence with VyralWave's innovative marketing and AI solutions.
      </p>
      <button 
        class="btn btn-primary text-base sm:text-lg"
        on:click={openChat}
      >
        Get Started
      </button>
    </div>
  </div>
</section>