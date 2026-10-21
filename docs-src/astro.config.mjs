// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://globalstorm.cloud',
	base: '/docs',
	outDir: './dist',
	build: { format: 'directory' },
	integrations: [
		starlight({
			title: 'HurricaneOS Documentation',
			customCss: ['./src/styles/theme.css'],
			// Anodised theme (paper / ink / amber), light only, matching globalstorm.cloud: no colour-scheme
			// picker, the brand lockup in the header, the site's Lucide arrows on prev/next.
			components: {
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/Empty.astro',
				SiteTitle: './src/components/SiteTitle.astro',
				Pagination: './src/components/Pagination.astro',
				Footer: './src/components/Footer.astro',
			},
			head: [
				{
					tag: 'script',
					content: `(function () {
	// Accessibility polish that cannot be done in markup we do not own (Starlight asides, Expressive Code):
	// - repeated landmarks get a numbered accessible name ("Note 2", "Code block 3") so they are distinguishable;
	// - horizontally scrolling tables become keyboard-focusable. No visible text changes.
	function fix() {
		var seen = {};
		document.querySelectorAll('aside[aria-label]').forEach(function (a) {
			var l = a.getAttribute('aria-label'); seen[l] = (seen[l] || 0) + 1;
			if (seen[l] > 1) a.setAttribute('aria-label', l + ' ' + seen[l]);
		});
		var n = 0;
		document.querySelectorAll('.sl-markdown-content pre[role="region"]').forEach(function (p) {
			n++; if (!p.hasAttribute('aria-label')) p.setAttribute('aria-label', 'Code block ' + n);
		});
		var k = 0;
		document.querySelectorAll('.sl-markdown-content table').forEach(function (t) {
			k++;
			if (t.scrollWidth > t.clientWidth + 1 && !t.hasAttribute('tabindex')) {
				t.setAttribute('tabindex', '0'); t.setAttribute('role', 'region'); t.setAttribute('aria-label', 'Table ' + k);
			}
		});
	}
	var done = function () { fix(); setTimeout(fix, 400); };
	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', done); else done();
	window.addEventListener('load', done);
	window.addEventListener('resize', fix);
	// Expressive Code marks a block as a scrollable region only once it has measured it, so follow that.
	new MutationObserver(fix).observe(document.documentElement, { subtree: true, attributes: true, attributeFilter: ['role'] });
})();`,
				},
			],
			// Code blocks are ink panels (like the site's boot console), whatever the page theme.
			expressiveCode: {
				themes: ['github-dark'],
				useStarlightUiThemeColors: false,
				styleOverrides: {
					borderRadius: '4px',
					borderColor: '#252b33',
					codeBackground: '#0d0f12',
					codeFontFamily: "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
					codeFontSize: '0.875rem',
					uiFontFamily: "'Inter', system-ui, sans-serif",
					frames: {
						editorTabBarBackground: '#1a1e24',
						editorActiveTabBackground: '#0d0f12',
						editorActiveTabIndicatorTopColor: '#f5a300',
						editorActiveTabIndicatorHeight: '2px',
						terminalTitlebarBackground: '#1a1e24',
						terminalBackground: '#0d0f12',
						frameBoxShadowCssValue: 'none',
					},
				},
			},
			// Fonts are self-hosted (SIL OFL: Saira, Inter, IBM Plex Mono) — see src/styles/theme.css and
			// public/fonts/. No Fontshare / Google Fonts: the docs make no third-party request.
			// Four audience/role groups. Items are listed explicitly so the
			// sidebar follows the manual's section numbering (autogenerate would
			// order alphabetically by filename, which breaks the sequence).
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ slug: 'overview/how-it-works' },
					],
				},
				{
					label: 'Operators',
					items: [
						{ slug: 'operators/prerequisites' },
						{ slug: 'operators/flashing-a-device' },
						{ slug: 'operators/bulk-provisioning' },
						{ slug: 'operators/first-boot' },
					],
				},
				{
					label: 'Developers',
					items: [
						{ slug: 'developers/signing-in' },
						{ slug: 'developers/connecting-a-git-repository' },
						{ slug: 'developers/writing-your-application' },
						{ slug: 'developers/pushing-code' },
						{ slug: 'developers/attaching-devices' },
						{ slug: 'developers/deploying-a-build' },
						{ slug: 'developers/monitoring' },
						{ slug: 'developers/security-scan' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ slug: 'reference/advanced-options' },
						{ slug: 'reference/day-2-operations' },
						{ slug: 'reference/troubleshooting' },
						{ slug: 'reference/glossary' },
					],
				},
			],
		}),
	],
});
