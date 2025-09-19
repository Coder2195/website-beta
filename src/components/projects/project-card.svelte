<script lang="ts">
  import type { ProjectPreview } from "@/lib/graphql";
  import { optimize } from "@/lib/image";
  import { PROJECT_TYPE_MAP } from "@/lib/project";
  import Icon from "@iconify/svelte";

  let {
    project,
    index,
  }: {
    index: number;
    project: ProjectPreview;
  } = $props();

  let show = $state(false);
  $effect(() => {
    const timeout = setTimeout(
      () => {
        show = true;
      },
      index * 500 + 500
    );

    return () => clearTimeout(timeout);
  });
</script>

<a
  class="button rounded-lg overflow-hidden transition-all {show
    ? 'opacity-100 h-full'
    : 'opacity-0 h-0'} duration-500"
  href="/projects/{project.slug}"
>
  <figure class="aspect-video relative overflow-hidden">
    <img
      srcset={optimize(project.coverImage?.url!)}
      alt={project.title}
      width={800}
      height={450}
      class="object-cover object-center"
    />
  </figure>
  <div class="p-2">
    <h4 class="card-title tracking-tight flex items-center gap-2">
      {#if project.featured}
        <Icon icon="fa6-solid:thumbtack" class="inline w-6 h-6" />
      {/if}
      {project.title}
    </h4>
    <div class="flex items-center gap-2">
      <div class="text-sm text-mocha-overlay2">
        <Icon
          icon={PROJECT_TYPE_MAP[project.projectType]!.icon}
          class="inline-block"
        />
      </div>
      <div class="text-sm text-mocha-overlay2">
        {new Date(project.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </div>
    </div>
  </div>
</a>
