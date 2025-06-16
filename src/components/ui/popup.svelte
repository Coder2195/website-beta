<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    show,
    children,
    title,
  }: { show: boolean; children: Snippet; title?: string } = $props();
</script>

{#if show}
  <div class="bg-mocha-crust w-[90vw] h-[90vh] bordered rounded-lg">
    <div>
      {title || "Popup"}
    </div>
    {@render children?.()}
  </div>
{/if}
