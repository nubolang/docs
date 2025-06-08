// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Nubo',

			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nubolang/nubo' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting started', slug: 'guides/getting-started' },
						{ label: 'Language Basics', slug: 'guides/language-basics' },
						{ label: 'Variables and Types', slug: 'guides/variables-and-types' },
						{ label: 'Control Flow', slug: 'guides/control-flow' },
						{ label: 'Functions', slug: 'guides/functions' },
						{ label: 'Imports and Modules', slug: 'guides/imports-and-modules' },
						{ label: 'HTML Templates', slug: 'guides/html-templates' },
						{ label: 'Event (pub/sub)', slug: 'guides/events' },
					],
				},
				{
					label: 'Libraries',
					items: [
						{ label: 'Input/Output', slug: 'libraries/io' },
						{ label: 'JSON', slug: 'libraries/json' },
						{ label: 'Logging', slug: 'libraries/log' },
						{ label: 'Math', slug: 'libraries/math' },
						{ label: 'Threads and Concurrency', slug: 'libraries/thread' },
					],
				},
			],
			plugins: [catppuccin()]
		}),
	],
});
