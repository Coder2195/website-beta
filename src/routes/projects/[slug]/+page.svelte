<script lang="ts">
  import { Image } from "@unpic/svelte";

  let { data } = $props();
  let { project } = data;
</script>

<main>
  <div
    class="absolute left-0 top-0 w-full aspect-video flex items-center justify-center min-h-96 max-h-[100dvw]"
  >
    <h1
      class="p-4 rounded-lg flex gap-3 items-center flex-wrap bg-mocha-overlay0/50 z-10 backdrop-blur-lg border-4 border-mocha-maroon"
    >
      {project.title}
    </h1>
    <Image
      src={project.coverImage?.url || "https://picsum.photos/1280/720"}
      alt=""
      fill
      class="object-cover object-center -z-10 mask-t-from-10% absolute"
    />
  </div>
</main>
