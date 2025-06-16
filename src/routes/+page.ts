import { MetaTagsProps } from "svelte-meta-tags";
import { PageLoad } from "./$types";

export const load: PageLoad = () => {
  const pageMetaTags: MetaTagsProps = {
    title: "Home",
  };

  return {
    pageMetaTags,
  };
};
