<script lang="ts">
  import HomeLink from "$lib/components/home/home-link.svelte";
  import Title from "$lib/components/home/title.svelte";
  import { NAV_LINKS } from "$lib/links";
</script>

<main>
  <Title />
  <h6 class="my-8">The master of unfinished projects.</h6>
  <h3>Explore My:</h3>
  {#each NAV_LINKS.slice(1) as link, i}
    <HomeLink {link} idx={i} />
  {/each}
  <a href="/another" class="text-blue-500 hover:underline">
    Go to another page
  </a>
</main>
