<script lang="ts">
  import type { ProjectPreview } from "@/lib/graphql";
  import type { ProjectType } from "@/lib/graphql/generated/types";
  import Icon from "@iconify/svelte";
  import { Image } from "@unpic/svelte";

  let {
    project,
  }: {
    project: ProjectPreview;
  } = $props();

  const PROJECT_TYPE_MAP: {
    [key in ProjectType]: {
      icon: string;
    };
  } = {
    coding: {
      icon: "famicons:code-slash",
    },
    video: {
      icon: "material-symbols:video-library-outline-rounded",
    },
    other: {
      icon: "octicon:project-roadmap-24",
    },
  };
</script>

<a class="button rounded-lg overflow-hidden" href="/projects/${project.slug}">
  <figure class="aspect-video relative overflow-hidden">
    <Image
      src={project.coverImage?.url || "https://picsum.photos/800/450"}
      alt={project.title}
      fill
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
