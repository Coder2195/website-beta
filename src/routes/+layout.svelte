<script lang="ts">
  import { fade } from "svelte/transition";
  import "../app.css";
  import { setContext } from "svelte";
  import Splash from "$lib/components/ui/splash.svelte";
  import type { LoadStatus } from "$lib/types";
  import Navbar from "$lib/components/ui/navbar.svelte";

  let { children, data } = $props();

  $effect(() => {
    const timeout = setTimeout(() => {
      loadStatus.mounted = true;
      console.log("Mounted:", data.pathname);
    }, 1500);

    return () => clearTimeout(timeout);
  });

  let loadStatus: LoadStatus = $state({
    mounted: false,
    transitioning: true,
  });

  setContext("loadStatus", loadStatus);
</script>

<Navbar />
{#if !loadStatus.mounted}
  <Splash />
{:else}
  {#key data.pathname}
    <div
      class="mx-auto h-full w-full max-w-5xl overflow-hidden overflow-x-auto p-2 pt-16"
      in:fade={{ duration: 300, delay: 400 }}
      out:fade={{ duration: 300 }}
      onintrostart={() => {
        loadStatus.transitioning = true;
        console.log("Intro start:", data.pathname);
      }}
      onintroend={() => {
        loadStatus.transitioning = false;
        console.log("Intro end:", data.pathname);
      }}
      onoutrostart={() => {
        loadStatus.transitioning = true;
        console.log("Outro start:", data.pathname);
      }}
      onoutroend={() => {
        console.log("Outro end:", data.pathname);
      }}
    >
      {@render children()}
    </div>
  {/key}
{/if}
