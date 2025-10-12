<script lang="ts">
  import { type Snippet } from "svelte";
  import { fly } from "svelte/transition";

  let {
    direction,
    children,
    class: className,
  }: { direction: "up" | "down"; children: Snippet; class?: string } = $props();
</script>

<div
  class="h-[100dvh] flex-col flex pt-20 w-full overflow-scroll {className ||
    ''}"
  in:fly={direction == "down"
    ? { duration: 500, delay: 600, y: 200, opacity: 0 }
    : { duration: 500, delay: 600, y: -200, opacity: 0 }}
  out:fly={direction == "down"
    ? { duration: 500, delay: 100, y: -200, opacity: 0 }
    : { duration: 500, delay: 100, y: 200, opacity: 0 }}
>
  {@render children()}
</div>
