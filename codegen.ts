import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://us-east-1.cdn.hygraph.com/content/cl8hzzoiu59rq01tccufrg18c/master",
  documents: ["src/lib/graphql/**/*.ts"],
  generates: {
    "src/lib/graphql/generated/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
    "src/lib/graphql/generated/": {
      preset: "client",
    },
  },
};

export default config;
