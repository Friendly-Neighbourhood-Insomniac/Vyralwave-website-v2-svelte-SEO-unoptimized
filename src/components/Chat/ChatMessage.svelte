<script lang="ts">
  export let message: string;
  export let isUser: boolean;
</script>

<div class="flex {isUser ? 'justify-end' : 'justify-start'}">
  <div class="{isUser ? 'bg-[#00E5FF] text-black' : 'bg-[#1E1B3A] text-white'} rounded-lg px-4 py-2 max-w-[80%] shadow-lg">
    {message}
  </div>
</div>