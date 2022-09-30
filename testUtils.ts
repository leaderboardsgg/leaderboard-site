import { createElementBlock, Component, ComponentOptions } from 'vue'
import { MountingOptions } from '@vue/test-utils'
import userEvent from '@testing-library/user-event'
import { render, RenderOptions } from '@testing-library/vue'

export const stubbedRender = (
  Component: Component | ComponentOptions,
  options?: RenderOptions | MountingOptions<any>,
) => {
  return render(Component, {
    global: {
      stubs: {
        NuxtLink: createElementBlock('a'),
      },
    },
    ...options,
  })
}

export * from '@testing-library/vue'
export * from '@nuxt/test-utils'
export * from '@vue/test-utils'
export { userEvent as fireEvent }
