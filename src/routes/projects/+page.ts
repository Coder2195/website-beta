import { GET_PROJECTS, hygraph } from "@/lib/graphql";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const data = await hygraph.request(GET_PROJECTS);

  return data;
};
