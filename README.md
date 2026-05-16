# Sawala Cloud Docs

Public documentation for the [Sawala Cloud](https://sawala.cloud) platform — the source of [docs.sawala.cloud](https://docs.sawala.cloud) (in-flight).

Covers every shipped Sawala product (Kontena, Berkasna, Formulir today; Sebar, Kiosna, Kelasna, Ajena as they ship) with four content surfaces per product, following the [Diátaxis](https://diataxis.fr/) shape: Tutorials, How-to Guides, Reference, and Explanation.

Bilingual: **Bahasa Indonesia** (default) and **English**.

## Stack

- **[Fumadocs](https://fumadocs.dev) 16** — docs framework
- **Next.js 16** (app router, `[lang]/` routing)
- **React 19**, **Tailwind v4**
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
│   └── kontena/            # one folder per product
├── lib/
│   ├── i18n.ts             # defineI18n config
│   ├── layout.shared.tsx   # i18nUI + baseOptions per locale
│   ├── source.ts           # fumadocs-core loader (i18n-aware)
│   └── shared.ts           # appName, gitConfig
├── components/
│   └── mdx.tsx             # MDX component registry
├── middleware.ts           # createI18nMiddleware
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

Add `name.en.mdx` next to `name.mdx`. If the EN variant is missing, the language switcher leaves the link disabled for that page.

## Cut a version

Versioning is convention-based:

```bash
cp -r content/docs/{kontena,berkasna,formulir} content/docs/v0.1/
git commit -am "chore: cut v0.1 snapshot"
```

A version-switcher component is added when v0.2 ships.

## Deploy

CI in this repo runs build + typecheck on every PR. Production deploys to `docs.sawala.cloud` are manual today.

## Related open-source repos

| Repo | What it holds |
| --- | --- |
| **sawala-cloud-docs** (this) | Public documentation source for the Sawala Cloud platform |
| [kodena-templates](https://github.com/sawala-tech/kodena-templates) | Sawala-built [Kodena Instant Page](https://sawala.cloud/products/kodena) templates |

The Sawala Cloud platform itself (dashboard, backend services) is closed source.

## License

[MIT](./LICENSE) — see file. Copyright 2026 PT Sawala Inovasi Indonesia.
