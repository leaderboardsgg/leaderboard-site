import { DOMWrapper, VueWrapper } from '@vue/test-utils'
type WrappedElement = Omit<DOMWrapper<Element>, 'exists'>

export function getByClass(
  wrapper: VueWrapper<any>,
  className: string,
): WrappedElement {
  return wrapper.get(`.${className}`)
}

export function getById(
  wrapper: VueWrapper<any>,
  testId: string,
): WrappedElement {
  return wrapper.get(`#${testId}`)
}

export function getByQuery(
  wrapper: VueWrapper<any>,
  query: string,
): WrappedElement {
  return wrapper.get(query)
}

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
