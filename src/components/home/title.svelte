<script lang="ts">
  import type { LoadStatus } from "$lib/types";
  import { getContext, onDestroy } from "svelte";

  const target = "Coder2195";
  let text = $state("");
  let interval: number;
  let i = -1;

  let loadStatus = getContext<LoadStatus>("loadStatus");

  $effect(() => {
    console.log("Transitioning:", loadStatus.transitioning);
    if (loadStatus.transitioning) return;
    interval = setInterval(() => {
      if (i < 0) {
        i++;
        return;
      }
      if (i < target.length) {
        text += target[i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return cleanUp;
  });

  function cleanUp() {
    clearInterval(interval);
  }

  onDestroy(cleanUp);
</script>

<h1 class=" flex flex-wrap items-center gap-3 py-4">
  Hello, I&apos;m{" "}
  <span
    class="border-mocha-mauve bg-mocha-mantle rounded-lg border-4 p-2 font-mono text-5xl"
  >
    {text}<span class="animate-blink -mx-3">|</span>
  </span>
</h1>
