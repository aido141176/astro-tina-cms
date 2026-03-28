// tina/config.ts
import { defineConfig } from "tinacms";

// tina/collections/sections.ts
var sections = {
  label: "Sections",
  name: "sections",
  path: "content/sections",
  format: "md",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "rich-text",
      label: "Content",
      name: "content"
    },
    {
      type: "image",
      label: "Image",
      name: "image"
    },
    {
      type: "number",
      label: "Order",
      name: "order"
    }
  ]
};

// tina/config.ts
var config_default = defineConfig({
  branch: "main",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  schema: {
    collections: [sections]
  }
});
export {
  config_default as default
};
