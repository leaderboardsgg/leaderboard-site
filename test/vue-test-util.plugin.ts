import { config } from '@vue/test-utils'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'

type WrappedElement = Omit<DOMWrapper<Element>, 'exists'>

const plugin = (wrapper: VueWrapper) => {
  function getByClass(className: string): WrappedElement {
    return wrapper.get(`.${className}`)
  }

  function getById(testId: string): WrappedElement {
    return wrapper.get(`#${testId}`)
  }

  function getByTestId(testId: string): WrappedElement {
    return wrapper.get(`[data-testid="${testId}"]`)
  }

  async function typeString(toType: string): Promise<void> {
    await Promise.all([
      wrapper.trigger('click'),
      ...toType.split('').map((c) =>
        wrapper.trigger('keyup', {
          key: c,
        }),
      ),
    ])
  }

  return {
    getByClass,
    getById,
    getByTestId,
    typeString,
  }
}

config.plugins.VueWrapper.install(plugin)
