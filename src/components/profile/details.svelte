<script lang="ts">
  import { fly, slide } from "svelte/transition";

  let { direction }: { direction: "up" | "down" } = $props();
</script>

<div
  class="h-[100dvh] flex-col pt-20"
  in:fly={direction == "down"
    ? { duration: 500, delay: 600, y: 200, opacity: 0 }
    : { duration: 500, delay: 600, y: -200, opacity: 0 }}
  out:fly={direction == "down"
    ? { duration: 500, delay: 100, y: -200, opacity: 0 }
    : { duration: 500, delay: 100, y: 200, opacity: 0 }}
>
  <h1 class="my-6">about me</h1>

  <div>Hello! My name is Amber.</div>
</div>
