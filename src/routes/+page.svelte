<script lang="ts">
  import HomeLink from "@/components/home/home-link.svelte";
  import SocialLink from "@/components/home/social-link.svelte";
  import Title from "@/components/home/title.svelte";
  import { NAV_LINKS, SOCIAL_LINKS } from "$lib/links";
</script>

<main>
  <Title />
  <h6 class="my-8">The master of unfinished projects.</h6>
  <h3>Explore My:</h3>
  {#each NAV_LINKS.slice(1) as link, i}
    <HomeLink {link} idx={i} />
  {/each}

  <div>
    <h3>Reach Out.</h3>
    <div class="flex flex-wrap items-center my-4 gap-4">
      {#each SOCIAL_LINKS as social, i}
        <SocialLink {social} idx={i} />
      {/each}
    </div>
  </div>
</main>
