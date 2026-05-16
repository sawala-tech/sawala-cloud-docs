import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { defineI18nUI } from 'fumadocs-ui/i18n';
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

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: appName,
      url: `/${locale}`,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
