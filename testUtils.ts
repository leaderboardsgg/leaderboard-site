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
      }),
    ),
  ])
}
