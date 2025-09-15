<script lang="ts">
  import Cover from "@/components/profile/cover.svelte";
  import Details from "@/components/profile/details.svelte";
  import type { Component } from "svelte";

  const TABS = [
    ["cover", Cover],
    ["cover2", Details],
    ["cover3", Details],
    ["cover4", Details],
    ["cover5", Details],
    // Add other tabs here as needed
  ] as const;
  let currentTab = $state(0);
  let disabled = $state(false);
  let direction: "up" | "down" = $state("down");
</script>

<button
  type="button"
  class="w-full overflow-clip h-screen block"
  {disabled}
  onwheel={(e) => {
    // Prevent scrolling when the button is clicked
    if (disabled) return;
    console.log("Wheel event:", e);
    if (e.deltaY < 0) {
      if (currentTab > 0) {
        currentTab -= 1;
        direction = "up";
        disabled = true;
        setTimeout(() => {
          disabled = false;
        }, 1000); // Re-enable after a delay
      }
    } else {
      if (currentTab < TABS.length - 1) {
        currentTab += 1;
        direction = "down";
        disabled = true;
        setTimeout(() => {
          disabled = false;
        }, 1000); // Re-enable after a delay
      }
    }
  }}
  onclick={() => {
    if (disabled) return;
  }}
>
  {#key TABS[currentTab][0]}
    {@const Tab = TABS[currentTab][1]}

    <Tab {direction} />
  {/key}
</button>
