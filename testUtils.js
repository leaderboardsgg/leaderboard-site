import Vue from 'vue';
import { RouterLinkStub } from '@vue/test-utils';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/vue';

export const NuxtLinkStub = Vue.component('NuxtLinkStub', {
  extends: RouterLinkStub,
  render(h) {
    const temp = h(
      this.tag || 'a',
      {
        attrs: {
          ...this.$vnode.data.attrs,
          ...this.$attrs,
          href: this.to,
        },
      },
      this.$slots.default,
    );

    return temp;
  },
});

export const stubbedRender = (Component, options) => {
  return render(Component, {
    stubs: { NuxtLink: NuxtLinkStub, ...options?.stubs },
    ...options,
  });
};

export * from '@testing-library/vue';
export * from '@vue/test-utils';
export { userEvent as fireEvent };
