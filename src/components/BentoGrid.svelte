<script lang="ts">
  let className = '';
  export { className as class };
</script>

<div class={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto p-4 ${className}`}>
  <slot />
</div>

<style>
  .grid {
    grid-auto-rows: minmax(250px, auto);
  }
</style>