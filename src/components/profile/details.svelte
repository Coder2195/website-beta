<script lang="ts">
  import { optimize } from "$lib/image";
  import { scale } from "svelte/transition";
  import amber_cover from "$assets/amber_cover.png";
  import { circOut, elasticOut } from "svelte/easing";
  import Section from "./section.svelte";

  let { direction }: { direction: "up" | "down" } = $props();

  let step = $state(0);

  let interval = setInterval(() => {
    if (step > 70) clearInterval(interval);
    else step++;
  }, 100);
</script>

<Section {direction}>
  <img
    srcset={optimize(amber_cover)}
    alt=""
    width="1920"
    height="1080"
    class="absolute object-cover left-0 top-0 w-full h-full -z-50 mask-[radial-gradient(ellipse_closest-side_at_center,white,transparent)]"
  />
  {#if step > 10}
    <h1
      class="inline absolute left-[25%] top-[20%] rotate-12 scale-125"
      in:scale={{ duration: 400, easing: elasticOut }}
    >
      This
    </h1>
  {/if}
  {#if step > 13}
    <h1
      class="inline absolute left-[45%] top-[27%] -rotate-6 scale-110"
      in:scale={{
        duration: 400,
        easing: elasticOut,
      }}
    >
      Is
    </h1>
  {/if}
  {#if step > 16}
    <h1
      class="inline absolute right-[35%] top-[34%] scale-150 -rotate-[30deg]"
      in:scale={{ duration: 600, easing: elasticOut }}
    >
      Me
    </h1>
  {/if}

  {#if step > 35}
    <h1
      class="inline absolute left-[40%] bottom-[30%] scale-125 rotate-6"
      in:scale={{ duration: 400, easing: elasticOut }}
    >
      Call
    </h1>
  {/if}

  {#if step > 39}
    <h1
      class="inline absolute right-[36%] bottom-[23%] scale-110 -rotate-12"
      in:scale={{ duration: 600, easing: elasticOut }}
    >
      Me
    </h1>
  {/if}

  {#if step > 43}
    <h1
      class="inline absolute right-[50%] translate-x-1/2 bottom-[10%] scale-150 transition-colors duration-300 ease-in-out"
      in:scale={{ duration: 800, easing: circOut }}
    >
      <span
        class="underline-link {step > 50
          ? 'underline-link-active text-amber-600 '
          : ''}"
        style="background-image:linear-gradient(to right, #fff, #fff),linear-gradient(to right, var(--color-amber-500), var(--color-amber-600));"
      >
        Amber
      </span>
    </h1>
  {/if}
</Section>
