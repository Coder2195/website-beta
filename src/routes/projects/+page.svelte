<script lang="ts">
  import ProjectCard from "@/components/projects/project-card.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let { projects } = data;
</script>

<main>
  <h1>Projects</h1>
  <div class="my-4 mb-8">Some of the stuff I have been working on...</div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.projects.sort((a, b) => {
      // featured on top, then sort by date
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }) as project, index}
      <ProjectCard {project} {index} />
    {/each}
  </div>
</main>
