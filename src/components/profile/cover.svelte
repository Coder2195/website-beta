<script lang="ts">
  import { fly, slide } from "svelte/transition";

  let { direction }: { direction: "up" | "down" } = $props();
</script>

<div
  class="h-[100dvh] flex items-center justify-center flex-col"
  in:fly={direction == "down"
    ? { duration: 500, delay: 600, y: 200, opacity: 0 }
    : { duration: 500, delay: 600, y: -200, opacity: 0 }}
  out:fly={direction == "down"
    ? { duration: 500, delay: 100, y: -200, opacity: 0 }
    : { duration: 500, delay: 100, y: 200, opacity: 0 }}
>
  <h1 class="my-6">Hi There!</h1>

  <h6 class="text-mocha-overlay0 animate-pulse">(scroll to continue)</h6>
</div>
