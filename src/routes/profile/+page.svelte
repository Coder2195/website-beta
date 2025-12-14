<script lang="ts">
  import Cover from "@/components/profile/cover.svelte";
  import Details from "@/components/profile/details.svelte";
  import Skills from "@/components/profile/skills.svelte";
  import Timeline from "@/components/profile/timeline.svelte";
  import type { Component } from "svelte";

  const TABS = [
    ["cover", Cover],
    ["cover2", Details],
    ["cover3", Skills],
    ["cover4", Timeline],
    ["cover5", Details],
    // Add other tabs here as needed
  ] as const;
  let currentTab = $state(0);
  let disabled = $state(false);
  let direction: "up" | "down" = $state("down");

  let touched = $state(false);
  let touchY = 0;

  function scrollUp() {
    if (currentTab > 0) {
      currentTab -= 1;
      direction = "up";
      disabled = true;
      setTimeout(() => {
        disabled = false;
      }, 2000); // Re-enable after a delay
    }
  }

  function scrollDown() {
    if (currentTab < TABS.length - 1) {
      currentTab += 1;
      direction = "down";
      disabled = true;
      setTimeout(() => {
        disabled = false;
      }, 2000); // Re-enable after a delay
    }
  }
</script>

<button
  type="button"
  class="w-full overflow-clip h-[100dvh] block relative touch-none"
  {disabled}
  onpointerdown={(e) => {
    if (disabled) return;
    touched = true;
    touchY = e.clientY;
  }}
  onkeypress={(e) => {
    if (disabled) return;
    if (e.key === "ArrowUp") {
      scrollUp();
    } else if (e.key === "ArrowDown") {
      scrollDown();
    }
  }}
  onpointermove={(e) => {
    if (disabled || !touched) return;
    e.preventDefault();
    const newPos = [e.clientX, e.clientY];
    const deltaY = newPos[1] - touchY;
    if (deltaY < -10) {
      scrollDown();
      touched = false;
    } else if (deltaY > 10) {
      scrollUp();
      touched = false;
    }
  }}
  onpointerup={(e) => {
    touched = false;
  }}
  onwheel={(e) => {
    // Prevent scrolling when the button is clicked
    if (disabled) return;
    if (e.deltaY < 0) {
      if (currentTab > 0) {
        scrollUp();
      }
    } else {
      scrollDown();
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
