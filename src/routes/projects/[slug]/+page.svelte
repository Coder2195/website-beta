<script lang="ts">
  import { optimize } from "@/lib/image.js";
  import Icon from "@iconify/svelte";

  let { data } = $props();
  let { project } = data;
</script>

<main>
  <div class="h-[56.25dvw] w-full min-h-96 max-h-[100dvw]"></div>
  <div
    class="absolute left-0 top-0 w-[100dvw] aspect-video flex items-center justify-center min-h-96 max-h-[100dvw]"
  >
    <h1
      class="p-4 rounded-lg flex gap-3 items-center flex-wrap bg-mocha-overlay0/50 z-10 backdrop-blur-lg border-4 border-mocha-maroon hover:border-mocha-red duration-300 transition-all ease-in-out hover:scale-110"
    >
      {project.title}
    </h1>
    <img
      srcset={optimize(project.coverImage?.url!)}
      alt=""
      class="object-cover object-center -z-10 mask-t-from-10% w-full absolute"
    />
  </div>
  <div class="grid md:grid-cols-2 gap-4 pb-8">
    {#if project.embed}
      <iframe
        src={project.embed}
        class="w-full aspect-video rounded-lg border-1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        title={project.title}
      ></iframe>
    {/if}
    <div class="border-1 rounded-lg {project.embed ? '' : 'col-span-2'} p-4">
      {@html project.description.html}
      <div class="mt-4">
        <a
          href={project.link}
          target="_blank"
          class="underline-link inline-flex gap-2 items-center"
          >Open Project <Icon icon="mdi:open-in-new" /></a
        >
      </div>
    </div>
  </div>
</main>
