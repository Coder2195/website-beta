<script lang="ts">
  import type { NavLink, Social } from "$lib/links";

  import Icon from "@iconify/svelte";

  let {
    social,
    idx,
  }: {
    social: Social;
    idx: number;
  } = $props();

  let show = $state(false);

  let ready = $state(false);

  $effect(() => {
    let timeout = setTimeout(
      () => {
        show = true;
      },
      idx * 200 + 2500
    );

    let timeout2 = setTimeout(
      () => {
        ready = true;
      },
      idx * 200 + 2500 + 600
    );

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  });
</script>

<a
  href={social.url}
  class="hover:scale-125 transition-all duration-300"
  aria-label={social.name}
>
  <div
    class="{show
      ? 'opacity-100'
      : 'opacity-0'} duration-500 flex items-center justify-center"
  >
    <Icon icon={social.icon} width={48} class="w-12 h-12" />
  </div>
</a>
