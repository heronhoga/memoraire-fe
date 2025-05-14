// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  server: {
    port: 3000,
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: node({
    mode: "standalone",
  }),
  env: {
    schema: {
      PUBLIC_APP_KEY: envField.string({
        context: "server",
        access: "public",
        default: "sdnbi",
      }),
    },
  },
});
