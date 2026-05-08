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

const prerenderOutputPath = (path: string) =>
  path === "/" ? "/index.html" : `${path}/index.html`;

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      filter: ({ path }: { path: string }) => staticRoutes.includes(path),
    },
    pages: staticRoutes.map((path) => ({
      path,
      prerender: { enabled: true, outputPath: prerenderOutputPath(path) },
    })),
  },
});
