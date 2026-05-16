import Link from 'next/link';

type Copy = { heading: string; tagline: string; cta: string };

const COPY: Record<string, Copy> = {
  id: {
    heading: 'Dokumentasi Sawala Cloud',
    tagline:
      'Panduan resmi platform Sawala Cloud — Kontena, Berkasna, Formulir, dan seterusnya.',
    cta: 'Buka dokumentasi →',
  },
  en: {
    heading: 'Sawala Cloud Documentation',
    tagline:
      'Official guide for the Sawala Cloud platform — Kontena, Berkasna, Formulir, and more.',
    cta: 'Open the docs →',
  },
};

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  const t = COPY[lang] ?? COPY.id;

  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 gap-6 px-6">
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-blue-600 to-teal-500 bg-clip-text text-transparent">
        {t.heading}
      </h1>
      <p className="text-lg text-fd-muted-foreground max-w-xl">{t.tagline}</p>
      <Link
        href={`/${lang}/docs`}
        className="rounded-md bg-fd-primary px-5 py-2 text-fd-primary-foreground font-medium hover:opacity-90 transition"
      >
        {t.cta}
      </Link>
    </div>
  );
}
