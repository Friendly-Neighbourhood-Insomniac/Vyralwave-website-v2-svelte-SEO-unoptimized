<script lang="ts">
  import MagicCard from "./MagicCard.svelte";

  const features = [
    {
      title: "Analyze",
      description: "Discover what's holding you back with data-driven insights into your market and competitors.",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjggMjhINFY0aDI0djI0eiIgZmlsbD0iI0ZGMkQ5RSIvPjxwYXRoIGQ9Ik04IDIwaDR2NGgtNHYtNHptNi04aDR2MTJoLTRWMTJ6bTYtNGg0djE2aC00Vjh6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==",
      gradientColor: "#FF2D9E",
      hoverColor: "#FF2D9E",
      borderColor: "#ff2d9e94"
    },
    {
      title: "Create",
      description: "Get custom strategies and creative solutions designed to increase your leads, traffic, and sales.",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjIuNyAxOS4zTDIwLjcgMTcuM0MyMS4xIDE2LjIgMjEuMSAxNSAyMC43IDEzLjlMMjIuNyAxMS45QzIzLjEgMTEuNSAyMy4xIDEwLjkgMjIuNyAxMC41TDIxLjUgOS4zQzIxLjEgOC45IDIwLjUgOC45IDIwLjEgOS4zTDE4LjEgMTEuM0MxNyAxMC45IDE1LjggMTAuOSAxNC43IDExLjNMMTIuNyA5LjNDMTIuMyA4LjkgMTEuNyA4LjkgMTEuMyA5LjNMMTAuMSAxMC41QzkuNyAxMC45IDkuNyAxMS41IDEwLjEgMTEuOUwxMi4xIDEzLjlDMTEuNyAxNSAxMS43IDE2LjIgMTIuMSAxNy4zTDEwLjEgMTkuM0M5LjcgMTkuNyA5LjcgMjAuMyAxMC4xIDIwLjdMMTEuMyAyMS45QzExLjcgMjIuMyAxMi4zIDIyLjMgMTIuNyAyMS45TDE0LjcgMTkuOUMxNS44IDIwLjMgMTcgMjAuMyAxOC4xIDE5LjlMMjAuMSAyMS45QzIwLjUgMjIuMyAyMS4xIDIyLjMgMjEuNSAyMS45TDIyLjcgMjAuN0MyMy4xIDIwLjMgMjMuMSAxOS43IDIyLjcgMTkuM1oiIGZpbGw9IiMwMEU1RkYiLz48L3N2Zz4=",
      gradientColor: "#00E5FF",
      hoverColor: "#00E5FF",
      borderColor: "#00e5ff94"
    },
    {
      title: "Optimize",
      description: "Watch your results improve over time with ongoing performance tracking and updates.",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgMkw0IDguNUw2IDE5TDEyIDIyTDE4IDE5TDIwIDguNUwxMiAyWiIgZmlsbD0iI0ZGNzcwMCIvPjxwYXRoIGQ9Ik0xMCA5TDggMTFMMTEuNSAxNC41TDE2IDEwTDE0IDhMMTEuNSAxMC41TDEwIDlaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==",
      gradientColor: "#FF7700",
      hoverColor: "#FF7700",
      borderColor: "#ff770094"
    },
  ];
</script>

<section id="about" class="section bg-[#2A2751]">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-[#FF2D9E] via-[#00E5FF] to-[#FF7700] bg-clip-text text-transparent">
      About VyralWave
    </h2>
    <p class="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
      At VyralWave we strive to provide clients with effective solutions, tailored to their needs, based on the A-C-O approach:
    </p>
    
    <div class="flex w-full flex-col gap-6 lg:flex-row">
      {#each features as feature}
        <MagicCard
          class="cursor-pointer flex-col items-center justify-center shadow-2xl text-xl group hover:border-[{feature.borderColor}] transition-all duration-300 w-full lg:w-1/3 min-h-[300px] border-2 border-transparent"
          gradientColor={feature.gradientColor}
          gradientSize={300}
        >
          <div class="flex flex-col items-center gap-3 text-center p-6">
            <div class="flex items-center justify-center gap-3">
              <img
                src={feature.icon}
                alt="{feature.title} icon"
                class="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
              />
              <div
                class="font-semibold text-3xl group-hover:text-[{feature.hoverColor}] transition-all duration-500"
              >
                {feature.title}
              </div>
            </div>
            <p class="text-base sm:text-lg text-gray-300 mt-4 whitespace-normal leading-relaxed group-hover:font-bold transition-all duration-300">
              {feature.description}
            </p>
          </div>
        </MagicCard>
      {/each}
    </div>
  </div>
</section>