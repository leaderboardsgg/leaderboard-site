import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import ButtonLink from './ButtonLink.vue'

describe('<ButtonLink />', () => {
  const defaultAttrs = { class: 'custom-link' }
  const defaultProps = { to: 'https://www.test.com/' }

  test('should render without crashing', () => {
    const ButtonLinkWrapper = mount(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Button' },
    })

    expect(ButtonLinkWrapper.isVisible()).toBe(true)
  })

  test('renders with the correct <slot />', () => {
    const ButtonLinkWrapper = mount(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Any%' },
    })
    expect(ButtonLinkWrapper.html()).toContain('Any%')
  })

  test('renders with the passed link', () => {
    const ButtonLinkWrapper = mount(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
    })

    const link = ButtonLinkWrapper.get('[data-testid="button-link"]')

    expect(link.element.tagName).toBe('NUXTLINK')
    expect(link.attributes('to')).toBe('https://www.test.com/')
  })

  test('renders with the custom classnames', () => {
    const ButtonLinkWrapper = mount(ButtonLink, {
      attrs: {
        ...defaultAttrs,
        class: 'go-fast',
      },
      props: defaultProps,
    })

    expect(ButtonLinkWrapper.classes('go-fast')).toBe(true)
  })
})
