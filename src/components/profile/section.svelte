<script lang="ts">
  import { type Snippet } from "svelte";
  import { fly } from "svelte/transition";

  let { direction, children }: { direction: "up" | "down"; children: Snippet } =
    $props();
</script>

<div
  class="h-[100dvh] flex-col pt-20 w-full"
  in:fly={direction == "down"
    ? { duration: 500, delay: 600, y: 200, opacity: 0 }
    : { duration: 500, delay: 600, y: -200, opacity: 0 }}
  out:fly={direction == "down"
    ? { duration: 500, delay: 100, y: -200, opacity: 0 }
    : { duration: 500, delay: 100, y: 200, opacity: 0 }}
>
  {@render children()}
</div>
