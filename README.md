# Sawala Cloud Docs

Public documentation for the [Sawala Cloud](https://sawala.cloud) platform — the source of [docs.sawala.cloud](https://docs.sawala.cloud) (in-flight; see deployment status below).

Covers every shipped Sawala product (Kontena, Berkasna, Formulir today; Sebar, Kiosna, Kelasna, Ajena as they ship) with four content surfaces per product, following the [Diátaxis](https://diataxis.fr/) shape: Tutorials, How-to Guides, Reference, and Explanation.

Bilingual: **Bahasa Indonesia** (default) and **English**.

## Stack

- **[Fumadocs](https://fumadocs.dev) 16** — docs framework (chosen via [`docs/decisions/0001-framework-evaluation.md`](./docs/decisions/0001-framework-evaluation.md))
- **Next.js 16** (app router, `[lang]/` routing)
- **React 19**, **Tailwind v4** — same stack as [sawala-cloud-ui](https://github.com/sawala-tech/sawala-cloud-ui)
- **Cloudflare Workers** deploy via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare)
- **Orama** — built-in client-side search

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. You will be redirected to `/id` (Indonesian) by default; switch to English via the language dropdown in the header.

## Repository layout

```
sawala-cloud-docs/
├── app/
│   └── [lang]/             # locale-prefixed routes (id, en)
│       ├── (home)/         # landing page per locale
│       ├── docs/           # docs layout + [[...slug]] page
├── content/docs/           # MDX content. Locale variants by suffix:
│   ├── index.mdx           # Indonesian (default)
│   ├── index.en.mdx        # English
│   └── kontena/            # one folder per product (added in M6)
├── lib/
│   ├── i18n.ts             # defineI18n config
│   ├── layout.shared.tsx   # i18nUI + baseOptions per locale
│   ├── source.ts           # fumadocs-core loader (i18n-aware)
│   └── shared.ts           # appName, gitConfig
├── components/
│   └── mdx.tsx             # MDX component registry
├── docs/decisions/         # Architecture Decision Records (ADRs)
├── middleware.ts           # createI18nMiddleware (NOT proxy.ts — OpenNext compat)
└── source.config.ts        # fumadocs-mdx config
```

## Add a page

1. Create `content/docs/{product}/{name}.mdx` (Indonesian, default locale).
2. Add frontmatter:

   ```mdx
   ---
   title: Halaman baru
   description: Deskripsi singkat satu kalimat.
   ---
   ```

3. Optionally add the English variant at `content/docs/{product}/{name}.en.mdx`.

The sidebar entry is auto-generated from the filename + frontmatter — no central nav file to edit.

## Add a translation

Add `name.en.mdx` next to `name.mdx`. If the EN variant is missing, the language switcher will leave the link disabled for that page.

## Cut a version

Versioning is convention-based — see [`docs/decisions/0001-framework-evaluation.md`](./docs/decisions/0001-framework-evaluation.md) for why Fumadocs uses this pattern rather than a built-in command.

```bash
cp -r content/docs/{kontena,berkasna,formulir} content/docs/v0.1/
git commit -am "chore: cut v0.1 snapshot"
```

The version switcher in the header is wired to a `versions.json` registry (added in M6).

## Deploy

Production deploy lives at `docs.sawala.cloud` on Cloudflare Workers via `@opennextjs/cloudflare`. CI in this repo runs build + typecheck on every PR; the production deploy step (M7 of the framework plan) is manual today via `wrangler deploy` from a maintainer's laptop.

## Related repos

| Repo | What it holds |
| --- | --- |
| **sawala-cloud-docs** (this) | Public-facing documentation source |
| [sawala-cloud-ui](https://github.com/sawala-tech/sawala-cloud-ui) | Dashboard frontend + `@sawala/ui` + `@sawala/app-shell` |
| [sawala-cloud-core](https://github.com/sawala-tech/sawala-cloud-core) | Backend Workers (api-gateway, kontena, berkasna, formulir, organization) |
| [sawala-cloud](https://github.com/sawala-tech/sawala-cloud) | Roadmap, architecture, execution plans (including the plan that birthed this repo) |
| [kodena-templates](https://github.com/sawala-tech/kodena-templates) | Sawala-built Instant Page templates |

## License

[MIT](./LICENSE) — see file. Copyright 2026 PT Sawala Inovasi Indonesia.
