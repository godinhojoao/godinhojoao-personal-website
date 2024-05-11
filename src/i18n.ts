import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'pt'];

type RequestConfigProps = { locale: string };

export default getRequestConfig(async ({ locale }: RequestConfigProps) => {
  if (!locales.includes(locale)) return notFound();

  return {
    messages: (await import(`../translations/${locale}.json`)).default
  };
});