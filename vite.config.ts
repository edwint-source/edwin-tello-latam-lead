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
    prerender: {
      enabled: true,
      crawlLinks: true,
      filter: ({ path }: { path: string }) => staticRoutes.includes(path),
    },
    pages: staticRoutes.map((path) => ({ path, prerender: { enabled: true } })),
  },
});
