import { ProjectType } from "./graphql/generated/types";

export const PROJECT_TYPE_MAP: {
  [key in ProjectType]: {
    icon: string;
    emoji: string;
  };
} = {
  coding: {
    icon: "famicons:code-slash",
    emoji: "👩‍💻",
  },
  video: {
    icon: "material-symbols:video-library-outline-rounded",
    emoji: "🎥",
  },
  other: {
    icon: "octicon:project-roadmap-24",
    emoji: "📂",
  },
};
