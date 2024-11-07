<script lang="ts">
  import { cn } from "../lib/utils";
  
  export let text: string;
  export let author: string;
  export let avatar: string;
</script>

<figure
  class={cn(
    "relative w-80 cursor-pointer overflow-hidden rounded-xl p-6 mx-4",
    "border border-white/10 bg-[#1E1B3A]/50 hover:bg-[#1E1B3A]/80",
    "backdrop-blur-sm transition-all duration-300 hover:scale-105"
  )}
>
  <div class="flex flex-col gap-4">
    <blockquote class="relative">
      <span class="absolute -left-2 -top-2 text-4xl text-[#00E5FF]/30">"</span>
      <p class="text-base text-gray-300 italic relative z-10">{text}</p>
      <span class="absolute -bottom-4 -right-2 text-4xl text-[#FF2D9E]/30">"</span>
    </blockquote>
    <div class="flex items-center gap-3 mt-2">
      <div class="flex-shrink-0">
        <img src={avatar} alt={author} class="w-10 h-10 rounded-full bg-[#2A2751] p-1 border border-white/10" />
      </div>
      <div class="flex-1">
        <div class="h-px bg-gradient-to-r from-[#00E5FF]/20 to-transparent mb-2"></div>
        <p class="text-sm font-medium text-[#00E5FF]">{author}</p>
      </div>
    </div>
  </div>
</figure>