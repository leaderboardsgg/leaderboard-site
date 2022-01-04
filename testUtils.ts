import Vue, { ComponentOptions } from 'vue';
import { config, RouterLinkStub, VueClass } from '@vue/test-utils';
import userEvent from '@testing-library/user-event';
import { render, RenderOptions } from '@testing-library/vue';
import { MockI18nOptions } from '@/types';

export const NuxtLinkStub = Vue.component<
  { tag: string; to: string },
  unknown,
  unknown
>('NuxtLinkStub', {
  extends: RouterLinkStub,
  render(h) {
    const temp = h(
      this.tag || 'a',
      {
        attrs: {
          ...this.$vnode.data?.attrs,
          ...this.$attrs,
          href: this.to,
        },
      },
      this.$slots.default,
    );

    return temp;
  },
});

export const mockI18n = (options?: MockI18nOptions) => {
  const mockEnglishLocale = { code: 'en', name: 'English' };

  return {
    $i18n: {
      locales: [
        mockEnglishLocale,
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' },
        ...(options?.locales ?? []),
      ],
      locale: options?.defaultLocale ?? mockEnglishLocale,
      setLocale: options?.setLocale ?? jest.fn(),
    },
  };
};

export const stubbedRender = (
  Component: VueClass<Vue> | ComponentOptions<Vue>,
  options?: RenderOptions<Vue>,
) => {
  return render(Component, {
    mocks: {
      ...mockI18n(),
      ...options?.mocks,
    },
    stubs: {
      NuxtLink: NuxtLinkStub,
      'svg-icon': true,
      ...options?.stubs,
    },
    ...options,
  });
};

config.mocks.$t = (key: string) => key;
config.mocks.localeRoute = (route: string) => route;

export * from '@testing-library/vue';
export * from '@vue/test-utils';
export { userEvent as fireEvent };
