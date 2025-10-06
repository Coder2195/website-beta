<script lang="ts">
  import Section from "./section.svelte";

  let { direction }: { direction: "up" | "down" } = $props();
</script>

<Section {direction}>
  <h1 class="my-6">Hi There!</h1>

  <h6 class="text-mocha-overlay2 animate-pulse">(scroll down to continue)</h6>
</Section>
