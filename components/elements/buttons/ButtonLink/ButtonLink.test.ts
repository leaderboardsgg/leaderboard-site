import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import ButtonLink from './ButtonLink.vue'

describe('<ButtonLink />', () => {
  const ButtonLinkWrapper = mount(ButtonLink)

  // const defaultAttrs = { class: 'custom-link' }
  // const defaultProps = { to: 'https://www.test.com/' }

  test('should render without crashing', () => {
    // const { unmount } = stubbedRender(ButtonLink, {
    //   attrs: defaultAttrs,
    //   props: defaultProps,
    //   slots: { default: 'Button' },
    // })

    expect(ButtonLinkWrapper.isVisible()).toBe(true)
  })

  // test('renders with the correct <slot />', () => {
  //   const { getByText } = stubbedRender(ButtonLink, {
  //     attrs: defaultAttrs,
  //     props: defaultProps,
  //     slots: { default: 'Any%' },
  //   })
  //   expect(getByText('Any%')).toBeInTheDocument()
  // })

  // test('renders with the passed link', () => {
  //   const { getByText } = stubbedRender(ButtonLink, {
  //     attrs: defaultAttrs,
  //     props: defaultProps,
  //   })

  //   const link = getByText('Placeholder Link Text')
  //   expect(link.tagName).toEqual('A')
  //   expect(link.getAttribute('to')).toEqual('https://www.test.com/')
  // })

  // test('renders with the custom classnames', () => {
  //   stubbedRender(ButtonLink, {
  //     attrs: {
  //       ...defaultAttrs,
  //       class: 'go-fast',
  //     },
  //     props: defaultProps,
  //   })

  //   expect(document.querySelector('.go-fast')).toBeInTheDocument()
  // })
})
