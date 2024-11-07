<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  let menuItems = [
    { 
      label: 'Home', 
      href: '#hero',
      hoverColor: '#FF2D9E',
      icon: `<svg class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
    },
    { 
      label: 'Services', 
      href: '#services',
      hoverColor: '#00E5FF',
      icon: `<svg class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 10L17 7M17 7L13.5 4M17 7H8C6.34315 7 5 8.34315 5 10M10.5 14L7 17M7 17L10.5 20M7 17H16C17.6569 17 19 15.6569 19 14" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
    },
    { 
      label: 'About', 
      href: '#about',
      hoverColor: '#FF7700',
      icon: `<svg class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
    },
    { 
      label: 'Contact', 
      href: '#contact',
      hoverColor: '#FF2D9E',
      icon: `<svg class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.75 6.75V17.25C21.75 18.4926 20.7426 19.5 19.5 19.5H4.5C3.25736 19.5 2.25 18.4926 2.25 17.25V6.75M21.75 6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75M21.75 6.75V6.99271C21.75 7.77405 21.3447 8.49945 20.6792 8.90894L13.1792 13.5243C12.4561 13.9694 11.5439 13.9694 10.8208 13.5243L3.32078 8.90894C2.65535 8.49945 2.25 7.77405 2.25 6.99271V6.75" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
    }
  ];

  let activeIndex = 0;
  let dockEl: HTMLElement;

  onMount(() => {
    const items = dockEl.querySelectorAll('.dock-item');
    
    items.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(items[index], {
          scale: 1.2,
          y: -10,
          duration: 0.3
        });

        if (index > 0) {
          gsap.to(items[index - 1], {
            scale: 1.1,
            y: -5,
            duration: 0.3
          });
        }
        if (index < items.length - 1) {
          gsap.to(items[index + 1], {
            scale: 1.1,
            y: -5,
            duration: 0.3
          });
        }
      });

      item.addEventListener('mouseleave', () => {
        items.forEach(item => {
          gsap.to(item, {
            scale: 1,
            y: 0,
            duration: 0.3
          });
        });
      });
    });
  });
</script>

<header class="fixed w-full z-50 top-0 left-0 bg-transparent">
  <div class="flex justify-center items-start w-full pt-4">
    <div class="dock-menu bg-[#2A2751]/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-sm border border-white/10 scale-90">
      <div class="flex items-center gap-8">
        <div class="flex items-center gap-2">
          <svg class="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM24 40C15.178 40 8 32.822 8 24C8 15.178 15.178 8 24 8C32.822 8 40 15.178 40 24C40 32.822 32.822 40 24 40Z" fill="url(#paint0_linear)"/>
            <path d="M24 12C17.373 12 12 17.373 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24C36 17.373 30.627 12 24 12ZM24 32C19.589 32 16 28.411 16 24C16 19.589 19.589 16 24 16C28.411 16 32 19.589 32 24C32 28.411 28.411 32 24 32Z" fill="url(#paint1_linear)"/>
            <path d="M24 20C21.791 20 20 21.791 20 24C20 26.209 21.791 28 24 28C26.209 28 28 26.209 28 24C28 21.791 26.209 20 24 20Z" fill="url(#paint2_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="4" y1="24" x2="44" y2="24" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF2D9E"/>
                <stop offset="1" stop-color="#00E5FF"/>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="12" y1="24" x2="36" y2="24" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF2D9E"/>
                <stop offset="1" stop-color="#00E5FF"/>
              </linearGradient>
              <linearGradient id="paint2_linear" x1="20" y1="24" x2="28" y2="24" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF2D9E"/>
                <stop offset="1" stop-color="#00E5FF"/>
              </linearGradient>
            </defs>
          </svg>
          <span class="bg-gradient-to-r from-[#FF2D9E] via-[#FF7700] to-[#00E5FF] text-transparent bg-clip-text font-black tracking-tight text-xl sm:text-2xl">
            VyralWave
          </span>
        </div>

        <div bind:this={dockEl} class="flex gap-4 sm:gap-8">
          {#each menuItems as item, index}
            <a
              href={item.href}
              class="dock-item relative group flex flex-col items-center"
              class:active={activeIndex === index}
            >
              <div 
                class="p-2 sm:p-3 rounded-full bg-[#1E1B3A]/30 text-white transition-all duration-300 relative border border-white/5 group-hover:border-[{item.hoverColor}]/30"
                style="--hover-color: {item.hoverColor}"
              >
                {@html item.icon}
                <div class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style="background: {item.hoverColor}10"></div>
              </div>
              
              <div class="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs sm:text-sm font-medium whitespace-nowrap"
                   style="color: {item.hoverColor}">
                {item.label}
              </div>

              {#if activeIndex === index}
                <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                     style="background: {item.hoverColor}; filter: drop-shadow(0 0 8px {item.hoverColor});"></div>
              {/if}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</header>

<style>
  :global(.dock-item svg) {
    transition: transform 0.3s ease, stroke 0.3s ease;
  }

  :global(.dock-item:hover svg) {
    transform: translateY(-2px);
    stroke: var(--hover-color);
  }

  @media (max-width: 640px) {
    .dock-menu {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(30, 27, 58, 0.95);
      backdrop-filter: blur(10px);
      border-radius: 20px 20px 0 0;
      padding: 1rem;
    }
  }
</style>