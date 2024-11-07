<script lang="ts">
  import BentoGrid from "./BentoGrid.svelte";
  import BentoCard from "./BentoCard.svelte";

  const services = [
    {
      title: "AI Solutions",
      description: "Harness the power of artificial intelligence to transform your business operations. Our AI solutions are designed to automate processes, enhance decision-making, and provide valuable insights from your data.",
      features: [
        "Custom AI Model Development",
        "Natural Language Processing",
        "Predictive Analytics",
        "Machine Learning Integration",
        "Automated Decision Systems",
      ],
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptNC45NyAxNC45NWMtLjMyLjMyLS43NC40OC0xLjE2LjQ4LS40MiAwLS44NC0uMTYtMS4xNi0uNDhsLTMuMzYtMy4zNkMxMC4yOSAxMy41OSAxMCAxMi41NSAxMCAxMS41VjdoM3Y0LjVjMCAuMjguMTEuNTUuMzEuNzVsMy4zNiAzLjM2Yy42NC42NC42NCAxLjY4IDAgMi4zMnoiIGZpbGw9IiNGRjJEOUUiLz48L3N2Zz4=",
      gradientColor: "#FF2D9E",
      class: "md:col-span-2 lg:col-span-3",
      cta: "Explore AI Solutions",
    },
    {
      title: "Web Development",
      description: "Custom websites and applications built for performance and growth.",
      features: [
        "Responsive Design",
        "Custom Web Applications",
        "E-commerce Solutions",
        "Performance Optimization",
        "SEO-friendly Architecture",
      ],
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tNyAxM2wtNCA0aC0yTDMgMTd2LTJsNC00IDQgNCA0LTQgNCA0di4wMWwtNC0zLjk5eiIgZmlsbD0iIzAwRTVGRiIvPjwvc3ZnPg==",
      gradientColor: "#00E5FF",
      class: "md:col-span-2 lg:col-span-3",
      cta: "Learn More",
    },
    {
      title: "Marketing & Content Creation",
      description: "Amplify your brand's reach with content that connects and captivates. Our marketing solutions range from ad campaign videos to brand mascots, all tailored to engage your audience and boost visibility across digital platforms like TikTok and YouTube.",
      features: [
        "Social Media Content Strategy",
        "Custom Brand Mascot Creation",
        "Engaging Short-Form Video Content",
        "Audience Growth and Engagement",
      ],
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjEgM0gzYy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS0xMCA5LjVWOWw2IDQuNS02IDQuNXYtMy41SDR2LTJoN3oiIGZpbGw9IiNGRjc3MDAiLz48L3N2Zz4=",
      gradientColor: "#FF7700",
      class: "md:col-span-3 lg:col-span-4",
      cta: "Start Creating",
    },
    {
      title: "Branding & Design",
      description: "Strategic brand identity development and creative design solutions.",
      features: [
        "Brand Strategy Development",
        "Logo & Visual Identity",
        "Marketing Materials",
        "UI/UX Design",
        "Brand Guidelines",
      ],
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptNS4xNyA5LjgzbC02IDZjLS4zOS4zOS0xLjAyLjM5LTEuNDEgMGwtMy41OS0zLjU5Yy0uMzktLjM5LS4zOS0xLjAyIDAtMS40MS4zOS0uMzkgMS4wMi0uMzkgMS40MSAwTDExIDEyLjI1bDUuMTctNS4xN2MuMzktLjM5IDEuMDItLjM5IDEuNDEgMHMuMzkgMS4wMiAwIDEuNDF6IiBmaWxsPSIjRkY3NzAwIi8+PC9zdmc+",
      gradientColor: "#FF7700",
      class: "md:col-span-3 lg:col-span-2",
      cta: "Discover Design",
    },
    {
      title: "Analytics & Growth",
      description: "Data-driven strategies to optimize your digital presence.",
      features: [
        "Performance Tracking",
        "Conversion Optimization",
        "Market Analysis",
        "Growth Strategy",
        "ROI Monitoring",
      ],
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6TTkgMTdIN3YtN2gydjd6bTQgMGgtMlY3aDJ2MTB6bTQgMGgtMnYtNGgydjR6IiBmaWxsPSIjMDBFNUZGIi8+PC9zdmc+",
      gradientColor: "#00E5FF",
      class: "md:col-span-3 lg:col-span-4",
      cta: "Start Growing",
    },
  ];
</script>

<section id="services" class="section bg-[#1E1B3A] pt-32">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12 pt-5">
      <h2 class="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 relative inline-block">
        <span class="bg-gradient-to-r from-[#FF2D9E] via-[#FF7700] to-[#00E5FF] bg-clip-text text-transparent">
          Our Services
        </span>
        <div class="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-[#FF2D9E] via-[#FF7700] to-[#00E5FF] rounded-full"></div>
      </h2>
      <p class="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
        Innovative solutions tailored to elevate your digital presence
      </p>
    </div>
    
    <BentoGrid>
      {#each services as service}
        <BentoCard
          name={service.title}
          description={service.description}
          href="#contact"
          cta={service.cta}
          iconSrc={service.icon}
          background=""
          class={service.class}
        >
          <ul class="space-y-3">
            {#each service.features as feature}
              <li class="flex items-center gap-3 text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                <span class="w-1.5 h-1.5 rounded-full bg-[#00E5FF] group-hover:bg-[#FF2D9E] transition-colors duration-300"></span>
                {feature}
              </li>
            {/each}
          </ul>
        </BentoCard>
      {/each}
    </BentoGrid>
  </div>
</section>