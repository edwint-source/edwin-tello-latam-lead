import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    pages: [{ path: "/", prerender: { enabled: true } }],
    prerender: {
      enabled: true,
      crawlLinks: false,
      failOnError: true,
      autoStaticPathsDiscovery: false,
    },
    spa: {
      enabled: true,
      maskPath: "/",
      prerender: {
        outputPath: "/index",
      },
    },
  },
});
