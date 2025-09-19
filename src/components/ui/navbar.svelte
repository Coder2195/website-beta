<script lang="ts">
  import { NAV_LINKS } from "$lib/links";
  import { type LoadStatus } from "$lib/types";
  import Icon from "@iconify/svelte";
  import { Image } from "@unpic/svelte/base";
  import { getContext } from "svelte";
  import { fade, scale } from "svelte/transition";
  import icon from "$assets/icon.png";
  import { optimize } from "@/lib/image";

  let loadStatus = getContext<LoadStatus>("loadStatus");

  let {
    pathname,
  }: {
    pathname: string;
  } = $props();
</script>

<div
  class="fixed w-full p-2 top-0 z-40"
  in:fade={{
    duration: 500,
  }}
>
  <nav
    class="w-full max-w-5xl bordered mx-auto p-2 rounded-lg flex overflow-hidden items-center bg-mocha-base/50 backdrop-blur-md select-none {loadStatus.mounted
      ? 'scale-x-100 opacity-100'
      : 'scale-x-0 opacity-0'} transition-all duration-700 ease-out delay-500"
  >
    <a href="/">
      <img
        srcset={optimize(icon)}
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
          class="flex gap-1 justify-end items-center button bg-transparent p-1 m-1 rounded-md {(pathname ==
            '/' &&
            link.href == '/') ||
          (link.href != '/' && pathname.startsWith(link.href))
            ? 'not-hover:border-mocha-lavender'
            : ''}"
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
