<script lang="ts">
  import Section from "./section.svelte";

  let { direction }: { direction: "up" | "down" } = $props();
</script>

<Section {direction} class="justify-center h-full">
  <h1>Hi There!</h1>

  <h6 class="text-mocha-overlay2 animate-pulse py-6">
    (scroll down to continue)
  </h6>
</Section>
