<script lang="ts">
  import { onMount } from 'svelte';
  import { v4 as uuidv4 } from 'uuid';
  import { voiceflowApi } from '$lib/api/voiceflow';
  import ChatMessage from './ChatMessage.svelte';
  import ChatInput from './ChatInput.svelte';

  let messages: Array<{ message: string; isUser: boolean }> = [];
  let userId = '';
  let isOpen = false;
  let chatContainer: HTMLElement;
  let isLoading = false;
  let error: string | null = null;

  onMount(() => {
    userId = uuidv4();
  });

  async function initializeChat() {
    isLoading = true;
    error = null;
    try {
      const responses = await voiceflowApi.startConversation();
      if (responses.length > 0) {
        let delay = 0;
        responses.forEach((response) => {
          setTimeout(() => {
            messages = [...messages, { message: response.message, isUser: false }];
          }, delay);
          delay += response.delay || 500;
        });
      }
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to start chat';
      console.error('Chat initialization error:', err);
    } finally {
      isLoading = false;
    }
  }

  async function handleSendMessage(messageText: string) {
    if (!messageText.trim() || isLoading) return;

    messages = [...messages, { message: messageText, isUser: true }];
    isLoading = true;
    error = null;

    try {
      const responses = await voiceflowApi.sendMessage(messageText, userId);
      let delay = 0;
      responses.forEach((response) => {
        setTimeout(() => {
          messages = [...messages, { message: response.message, isUser: false }];
        }, delay);
        delay += response.delay || 500;
      });
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to send message';
      console.error('Message sending error:', err);
    } finally {
      isLoading = false;
      scrollToBottom();
    }
  }

  function scrollToBottom() {
    if (chatContainer) {
      setTimeout(() => {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 100);
    }
  }

  function toggleChat() {
    isOpen = !isOpen;
    if (isOpen && messages.length === 0) {
      initializeChat();
    }
    if (isOpen) {
      scrollToBottom();
    }
  }

  $: if (messages.length) {
    scrollToBottom();
  }
</script>

<div class="fixed bottom-4 right-4 z-50">
  {#if isOpen}
    <div class="bg-[#1E1B3A] rounded-lg shadow-xl w-96 h-[500px] flex flex-col border border-white/10">
      <div class="p-4 bg-gradient-to-r from-[#FF2D9E] to-[#00E5FF] text-white rounded-t-lg flex justify-between items-center">
        <h3 class="font-semibold">VyralWave Assistant</h3>
        <button on:click={toggleChat} class="text-white hover:opacity-80 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div bind:this={chatContainer} class="flex-1 overflow-y-auto p-4 space-y-4 bg-[#2A2751]">
        {#each messages as message}
          <ChatMessage {...message} />
        {/each}
        
        {#if isLoading}
          <div class="flex justify-start">
            <div class="bg-[#1E1B3A] text-white rounded-lg px-4 py-2 shadow-lg">
              <span class="inline-flex gap-1">
                <span class="animate-bounce">.</span>
                <span class="animate-bounce" style="animation-delay: 0.2s">.</span>
                <span class="animate-bounce" style="animation-delay: 0.4s">.</span>
              </span>
            </div>
          </div>
        {/if}

        {#if error}
          <div class="bg-red-500/10 text-red-400 p-2 rounded-lg text-sm">
            {error}
          </div>
        {/if}
      </div>

      <div class="p-4 border-t border-white/10">
        <ChatInput onSendMessage={handleSendMessage} {isLoading} />
      </div>
    </div>
  {:else}
    <button
      on:click={toggleChat}
      class="bg-gradient-to-r from-[#FF2D9E] to-[#00E5FF] p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </button>
  {/if}
</div>