import Vue, { ComponentOptions } from 'vue';
import { RouterLinkStub, VueClass } from '@vue/test-utils';
import userEvent from '@testing-library/user-event';
import { render, RenderOptions } from '@testing-library/vue';

export const NuxtLinkStub = Vue.component('NuxtLinkStub', {
  extends: RouterLinkStub,
  render(h) {
    const temp = h(
      // @ts-ignore
      this.tag || 'a',
      {
        attrs: {
          // @ts-ignore
          ...this.$vnode.data.attrs,
          ...this.$attrs,
          // @ts-ignore
          href: this.to,
        },
      },
      this.$slots.default,
    );

    return temp;
  },
});

export const stubbedRender = (
  Component: VueClass<Vue> | ComponentOptions<Vue>,
  options?: RenderOptions<Vue>,
) => {
  return render(Component, {
    stubs: { NuxtLink: NuxtLinkStub, ...options?.stubs },
    ...options,
  });
};

export * from '@testing-library/vue';
export * from '@vue/test-utils';
export { userEvent as fireEvent };
