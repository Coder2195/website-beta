import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { GET_PROJECT, hygraph } from "@/lib/graphql";
import { MetaTagsProps, OpenGraph, Twitter } from "svelte-meta-tags";
import { addQueryParams } from "@/lib/url";
import { PROJECT_TYPE_MAP } from "@/lib/project";

export const load: PageLoad = async ({ params }) => {
  const { project } = await hygraph.request(GET_PROJECT, {
    slug: params.slug,
  });

  if (!project) error(404, "Not found");

  const videoLink =
    project.embed &&
    addQueryParams(project.embed, {
      autoplay: 1,
    });

  const video: OpenGraph =
    project.projectType == "video" && videoLink
      ? {
          type: "video.other",
          videos: [
            {
              url: videoLink,
              secureUrl: videoLink,
              type: "text/html",
              width: 1280,
              height: 720,
            },
          ],
        }
      : {};

  const twitter: Twitter =
    project.projectType == "video" && videoLink
      ? {
          cardType: "player",
          player: videoLink,
          playerStream: videoLink,
          playerHeight: 720,
          playerWidth: 1280,
        }
      : {};

  const pageMetaTags: MetaTagsProps = {
    title: `${PROJECT_TYPE_MAP[project.projectType].emoji} ${project.title}`,
    description: project.excerpt || "Check out this cool project I made!",
    openGraph: {
      images: [
        {
          url: project.coverImage?.url || "/icon.png",
        },
      ],
      ...video,
    },
    twitter,
  };

  return { project, pageMetaTags };
};
