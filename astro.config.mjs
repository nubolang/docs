// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNext from "starlight-theme-next";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNext()],
      title: "Nubo",
      favicon: "/favicon.ico",

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/nubolang/nubo",
        },
      ],
      sidebar: [
        {
          label: "Getting started",
          autogenerate: { directory: "start" },
        },
        {
          label: "Guides",
          items: [
            {
              label: "Command Line Interface",
              autogenerate: { directory: "guide/cli" },
            },
            {
              label: "Language basics",
              autogenerate: { directory: "guide/basics" },
            },
            {
              label: "Structs",
              autogenerate: { directory: "guide/structs" },
            },
            {
              label: "Prototypes",
              autogenerate: { directory: "guide/prototypes" },
            },
          ],
        },
        {
          label: "Libraries",
          items: [
            {
              label: "Standard Libraries",
              autogenerate: { directory: "libraries/all" },
            },
            {
              label: "Networking Libraries",
              autogenerate: { directory: "libraries/net" },
            },
          ],
        },
        {
          label: "Server",
          autogenerate: { directory: "server" },
        },
        {
          label: "Package Manager",
          autogenerate: { directory: "package-manager" },
        },
      ],
    }),
  ],
});
