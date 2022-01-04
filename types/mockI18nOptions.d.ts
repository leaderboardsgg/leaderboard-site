import { Locale } from './locale';

export interface MockI18nOptions {
  defaultLocale?: Locale;
  locales?: Locale[];
  setLocale?: jest.Mock;
}
