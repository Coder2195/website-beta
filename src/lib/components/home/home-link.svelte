<script lang="ts">
  import type { NavLink } from "$lib/links";
  import { type LoadStatus } from "$lib/types";
  import { getContext } from "svelte";
  import { fade } from "svelte/transition";

  import Icon from "@iconify/svelte";

  let props: {
    link: NavLink;
    idx: number;
  } = $props();

  const {
    link: { href, name, description, tooltip: description2 },
    idx,
  } = props;

  let show = $state(false);

  let ready = $state(false);

  $effect(() => {
    let timeout = setTimeout(
      () => {
        show = true;
      },
      idx * 200 + 1800
    );

    let timeout2 = setTimeout(
      () => {
        ready = true;
      },
      idx * 200 + 1800 + 600
    );

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  });
</script>

<span class="{show ? 'opacity-100' : 'opacity-0'} duration-500">
  <a
    {href}
    class="group block font-extralight text-2xl p-2 my-4 rounded-md button {!ready
      ? 'pointer-events-none'
      : 'pointer-events-auto'}"
  >
    <div class="flex items-center">
      <Icon
        icon="ion:chevron-forward-sharp"
        class="w-0 h-6 group-hover:w-6 transition-[width] duration-300"
      />
      <div class="flex-1">{name}</div>
    </div>
    <div
      class="max-h-0 w-full font-normal text-base group-hover:max-h-12 transition-all duration-500 overflow-hidden"
    >
      {description}
    </div>
  </a>
</span>
