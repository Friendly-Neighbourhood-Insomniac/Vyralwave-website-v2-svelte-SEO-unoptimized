<script lang="ts">
  import Ripple from './Ripple.svelte';

  function openChat() {
    // Trigger Voiceflow chat open
    if (window.voiceflow?.chat?.open) {
      window.voiceflow.chat.open();
    }
  }
</script>

<section id="contact" class="section relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#1E1B3A]">
  <div class="absolute inset-0">
    <Ripple mainCircleSize={800} mainCircleOpacity={0.3} numCircles={6} baseColor="#FF2D9E" />
  </div>
  
  <div class="relative z-10 text-center flex flex-col items-center gap-8 max-w-3xl mx-auto px-4">
    <h2 class="text-4xl sm:text-5xl font-bold">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FF2D9E] via-[#FF2D9E] to-[#00E5FF]">
        Ready to Transform
      </span>
      <br />
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]">
        Your Digital Presence?
      </span>
    </h2>
    
    <div class="relative mt-8">
      <div class="absolute -inset-1 bg-gradient-to-r from-[#FF2D9E] to-[#00E5FF] rounded-full opacity-75 blur-lg"></div>
      <button 
        class="relative px-8 py-4 bg-[#1E1B3A] rounded-full text-xl font-semibold text-white hover:scale-105 transition-all duration-300 group"
        on:click={openChat}
      >
        <span class="relative z-10 group-hover:text-white transition-colors duration-300">
          Get Started Today!
        </span>
        <div class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-[#FF2D9E] to-[#00E5FF]"></div>
      </button>
    </div>
  </div>
</section>

<style>
  .blur-lg {
    filter: blur(16px);
    animation: pulse 3s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.5;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }
</style>