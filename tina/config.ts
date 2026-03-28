import { defineConfig } from "tinacms"
import { sections } from "./collections/sections"

export default defineConfig({
  branch: "main",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  schema: {
    collections: [sections],
  },
})