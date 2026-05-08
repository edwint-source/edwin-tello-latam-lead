import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const staticRoutes = [
  "/",
  "/bio",
  "/speaking",
  "/eventos",
  "/videos",
  "/insights",
  "/contacto",
];

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
      },
    },
    pages: staticRoutes.map((path) => ({
      path,
      prerender: { enabled: true, outputPath: `${path === "/" ? "/index" : path}.html` },
    })),
  },
});
