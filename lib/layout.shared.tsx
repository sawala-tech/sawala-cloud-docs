import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import Image from 'next/image';
import { i18n } from '@/lib/i18n';
import { appName, gitConfig } from './shared';

export const i18nUI = defineI18nUI(i18n, {
  translations: {
    id: {
      displayName: 'Bahasa Indonesia',
      toc: 'Daftar Isi',
      search: 'Cari dokumentasi',
      lastUpdate: 'Terakhir diperbarui',
      searchNoResult: 'Tidak ada hasil',
      previousPage: 'Sebelumnya',
      nextPage: 'Berikutnya',
      chooseLanguage: 'Pilih bahasa',
    },
    en: {
      displayName: 'English',
    },
  },
});

function NavTitle() {
  return (
    <span className="flex items-center gap-2">
      <Image
        src="/sawala-cloud-icon.png"
        alt="Sawala Cloud"
        width={24}
        height={24}
        className="rounded-sm dark:invert"
      />
      <span className="text-sm font-semibold tracking-tight">{appName}</span>
    </span>
  );
}

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: <NavTitle />,
      url: `/${locale}`,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
