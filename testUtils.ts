import { ComponentOptions } from 'vue'
import userEvent from '@testing-library/user-event'
import { render, RenderOptions } from '@testing-library/vue'

export const stubbedRender = (
  Component: ComponentOptions,
  options?: RenderOptions,
) => {
  return render(Component, {
    ...options,
  })
}

export * from '@testing-library/vue'
export * from '@nuxt/test-utils-edge'
export * from '@vue/test-utils'
export { userEvent as fireEvent }
