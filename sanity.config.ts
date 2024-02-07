import { defineConfig } from "sanity";
import { structureTool  } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import { crossDatasetDuplicator } from "@sanity/cross-dataset-duplicator";
import schemas from "./sanity/schemas";
import { deskStructure } from "./sanity/deskStructure";

const studioConfig = defineConfig([
  {
    name: "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    dataset: "production",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string,
    title: "borhansaflo.com Production Studio",
    basePath: "/admin/production",
    plugins: [
      structureTool({
        structure: (S, context) => {
          return deskStructure(S, context);
        },
      }),
      visionTool({
        defaultApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
        defaultDataset: "production",
      }),
      vercelDeployTool(),
      crossDatasetDuplicator({
        types: [
          "section",
          "project",
          "tag",
          "skill",
          "skillGroup",
          "social",
          "meta",
          "button",
          "subSection",
          "shortUrl",
        ],
      }),
    ],
    schema: { types: schemas },
  },
  {
    name: "staging",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    dataset: "staging",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string,
    title: "borhansaflo.com Staging Studio",
    basePath: "/admin/staging",
    plugins: [
      structureTool({
        structure: (S, context) => {
          return deskStructure(S, context);
        },
      }),
      visionTool({
        defaultApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
        defaultDataset: "staging",
      }),
      vercelDeployTool(),
      crossDatasetDuplicator({
        types: [
          "section",
          "project",
          "tag",
          "skill",
          "skillGroup",
          "social",
          "meta",
          "button",
          "subSection",
          "shortUrl",
        ],
      }),
    ],
    schema: { types: schemas },
  },
]);

export default studioConfig;
