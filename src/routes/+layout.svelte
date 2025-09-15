<script lang="ts">
  import { fade } from "svelte/transition";
  import "../app.css";
  import { setContext } from "svelte";
  import Splash from "@/components/ui/splash.svelte";
  import type { LoadStatus } from "$lib/types";
  import Navbar from "@/components/ui/navbar.svelte";

  import { MetaTags, deepMerge } from "svelte-meta-tags";

  import { page } from "$app/state";

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

  let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<MetaTags {...metaTags} />
<Navbar pathname={data.pathname} />
{#if !loadStatus.mounted}
  <Splash />
{:else}
  {#key data.pathname}
    <div
      class="mx-auto h-[100dvh] w-[100dvw] max-w-5xl"
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
