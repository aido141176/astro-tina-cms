// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "master",
  clientId: null,
  // Get this from app.tina.io
  token: null,
  // Get this from app.tina.io
  build: {
    outputFolder: "admin",
    // This creates public/admin
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
