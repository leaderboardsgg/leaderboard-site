// TODO: either use and expand this for testing or remove this if we decide against it

// import { createElementBlock, Component, ComponentOptions } from 'vue'
// import { MountingOptions } from '@vue/test-utils'
// import userEvent from '@testing-library/user-event'
// import { render, RenderOptions } from '@testing-library/vue'

// export const stubbedRender = (
//   Component: Component | ComponentOptions,
//   options?: RenderOptions | MountingOptions<any>,
// ) => {
//   return render(Component, {
//     global: {
//       stubs: {
//         NuxtLink: createElementBlock('a'),
//       },
//     },
//     ...options,
//   })
// }

// export * from '@testing-library/vue'
// export * from '@nuxt/test-utils-edge'
// export * from '@vue/test-utils'
// export { userEvent as fireEvent }

import { DOMWrapper, VueWrapper } from '@vue/test-utils'
type WrappedElement = Omit<DOMWrapper<Element>, 'exists'>

export function getByTestId(
  wrapper: VueWrapper<any>,
  testId: string,
): WrappedElement {
  return wrapper.get(`[data-testid="${testId}"]`)
}

export function getHTMLElement(wrappedElement: WrappedElement): HTMLElement {
  return wrappedElement.getRootNodes()[0] as HTMLElement
}

export async function typeString(
  wrappedElement: WrappedElement,
  toType: string,
): Promise<void> {
  Promise.all([
    wrappedElement.trigger('click'),
    ...toType.split('').map((c) =>
      wrappedElement.trigger('keyup', {
        key: c,
        // keyCode: c.charCodeAt(0),
      }),
    ),
  ])
}
