import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
    name: "default",
    title: "hotel-booking",

    projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
    dataset: process.env.NEXT_PUBLIC_DATASET as string,

    basePath: "/studio",

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
});
