<script lang="ts">
  import { NAV_LINKS } from "$lib/links";
  import { type LoadStatus } from "$lib/types";
  import Icon from "@iconify/svelte";
  import { Image } from "@unpic/svelte";
  import { getContext } from "svelte";
  import {
    backOut,
    bounceIn,
    bounceInOut,
    bounceOut,
    elasticIn,
    elasticInOut,
    elasticOut,
    sineIn,
    sineOut,
  } from "svelte/easing";
  import { fade, scale } from "svelte/transition";

  let loadStatus = getContext<LoadStatus>("loadStatus");
</script>

{#if loadStatus.mounted}
  <div
    class="fixed w-full p-2 top-0 z-40"
    in:fade={{
      duration: 700,
    }}
  >
    <nav
      in:scale={{
        start: 2,
        duration: 700,
        easing: backOut,
        delay: 500,
      }}
      class="w-full max-w-5xl bordered mx-auto p-2 rounded-lg flex overflow-hidden items-center bg-mocha-base/50 backdrop-blur-md select-none"
    >
      <a href="/">
        <Image
          src="/icon.png"
          width={40}
          height={40}
          alt=""
          class="w-10 h-10 rounded-md bordered"
        />
      </a>
      <div class="flex flex-1 justify-end">
        {#each NAV_LINKS as link, idx}
          <a
            href={link.href}
            class="flex gap-1 justify-end items-center button bg-transparent p-1 m-1 rounded-md"
          >
            <Icon icon={link.icon} class="w-5 h-5" />
            <span class="text-sm hidden xs:inline-block">
              {link.name}
            </span>
          </a>
        {/each}
      </div>
    </nav>
  </div>
{/if}
