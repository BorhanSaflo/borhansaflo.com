import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { deskStructure } from "./sanity/deskStructure";

const studioConfig = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string,
  title: "borhansaflo.com Studio",
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: (S, context) => {
        return deskStructure(S, context);
      },
    }),
  ],
  schema: { types: schemas },
});

export default studioConfig;
