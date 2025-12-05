import '@vue/test-utils'
import 'vitest-fetch-mock'
import type { DOMWrapper } from '@vue/test-utils'

type WrappedElement = Omit<DOMWrapper<Element>, 'exists'>

declare module '@vue/test-utils' {
  interface VueWrapper {
    getByClass(className: string): WrappedElement
    getById(testId: string): WrappedElement
    getByTestId(testId: string): WrappedElement
    getHTMLElement(): HTMLElement
    typeString(toType: string): Promise<void>
  }
}

export {}
