<script lang="ts">
  import Section from "./section.svelte";

  let { direction }: { direction: "up" | "down" } = $props();
</script>

<Section {direction}>
  <h1>Timeline</h1>
  <p>This timeline contains notable events and milestones.</p>
</Section>
