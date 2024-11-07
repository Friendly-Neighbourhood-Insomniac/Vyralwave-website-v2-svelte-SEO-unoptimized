<script lang="ts">
  import { onMount } from 'svelte';
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import Services from './components/Services.svelte';
  import About from './components/About.svelte';
  import Contact from './components/Contact.svelte';
  import Footer from './components/Footer.svelte';

  onMount(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.onload = () => {
      window.voiceflow?.chat?.load({
        verify: { projectID: '67294099d386721a4534a8ad' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };
    document.body.appendChild(script);
  });
</script>

<main class="bg-[#1E1B3A] min-h-screen text-white">
  <Header />
  <Hero />
  <Services />
  <About />
  <Contact />
  <Footer />
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>