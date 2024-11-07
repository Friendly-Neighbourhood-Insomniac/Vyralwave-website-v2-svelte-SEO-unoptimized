<script lang="ts">
  export let onSendMessage: (message: string) => void;
  export let isLoading: boolean;

  let inputMessage = '';

  function handleSubmit() {
    if (!inputMessage.trim() || isLoading) return;
    onSendMessage(inputMessage);
    inputMessage = '';
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="flex gap-2">
  <input
    type="text"
    bind:value={inputMessage}
    placeholder="Type your message..."
    class="flex-1 bg-[#1E1B3A] text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00E5FF] border border-white/10"
    disabled={isLoading}
  />
  <button
    type="submit"
    class="bg-gradient-to-r from-[#FF2D9E] to-[#00E5FF] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
    disabled={isLoading || !inputMessage.trim()}
  >
    Send
  </button>
</form>