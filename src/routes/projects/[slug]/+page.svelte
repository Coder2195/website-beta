<script lang="ts">
  import { optimize } from "@/lib/image.js";

  let { data } = $props();
  let { project } = data;
</script>

<main>
  <div
    class="absolute left-0 top-0 w-[100dvw] aspect-video flex items-center justify-center min-h-96 max-h-[100dvw]"
  >
    <h1
      class="p-4 rounded-lg flex gap-3 items-center flex-wrap bg-mocha-overlay0/50 z-10 backdrop-blur-lg border-4 border-mocha-maroon"
    >
      {project.title}
    </h1>
    <img
      srcset={optimize(project.coverImage?.url!)}
      alt=""
      class="object-cover object-center -z-10 mask-t-from-10% w-full absolute"
    />
  </div>
</main>
