import { GET_PROJECTS, hygraph } from "@/lib/graphql";
import type { PageLoad } from "./$types";
import { MetaTagsProps } from "svelte-meta-tags";

export const load: PageLoad = async () => {
  const data = await hygraph.request(GET_PROJECTS);

  const pageMetaTags: MetaTagsProps = {
    title: "Projects",
  };

  return {
    ...data,
    pageMetaTags,
  };
};
