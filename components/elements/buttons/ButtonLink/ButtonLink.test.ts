import { mount, enableAutoUnmount } from '@vue/test-utils'

import ButtonLink from './ButtonLink.vue'

enableAutoUnmount(afterEach)

describe('<ButtonLink />', () => {
  const defaultAttrs = { class: 'custom-link' }
  const defaultProps = { to: 'https://www.test.com/' }

  it('should render without crashing', () => {
    const ButtonLinkWrapper = mount(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Button' },
    })

    expect(ButtonLinkWrapper.isVisible()).toBe(true)
  })

  it('renders with the correct <slot />', () => {
    const ButtonLinkWrapper = mount(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Any%' },
    })
    expect(ButtonLinkWrapper.html()).toContain('Any%')
  })

  it('renders with the passed link', () => {
    const ButtonLinkWrapper = mount(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
    })

    const link = ButtonLinkWrapper.get('[data-testid="button-link"]')

    expect(link.element.tagName).toBe('NUXTLINK')
    expect(link.attributes('to')).toBe('https://www.test.com/')
  })

  it('renders with the custom classnames', () => {
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
