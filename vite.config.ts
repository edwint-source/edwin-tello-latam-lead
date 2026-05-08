import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    srcDirectory: "src",
    router: {
      srcDirectory: "src/routes",
      generatedRouteTree: "src/routeTree.gen.ts",
    },
    start: { entry: "./src/start.ts" },
    server: { entry: "./src/server.ts" },
    client: { entry: "./src/router.tsx" },
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
