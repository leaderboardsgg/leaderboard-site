import { shallowMount } from '@vue/test-utils'
import ButtonLink from './ButtonLink.vue'

describe('<ButtonLink />', () => {
  const defaultAttrs = { class: 'custom-link' }
  const defaultProps = { to: 'https://www.test.com/' }

  it('should render without crashing', () => {
    const ButtonLinkWrapper = shallowMount(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: () => 'Button' },
    })

    expect(ButtonLinkWrapper.isVisible()).toBe(true)
  })

  it('renders with the correct <slot />', () => {
    const ButtonLinkWrapper = shallowMount(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: () => 'Any%' },
      global: { stubs: { NuxtLink: { template: `<a><slot /></a>` } } },
    })
    expect(ButtonLinkWrapper.html()).toContain('Any%')
  })

  it('renders with the passed link', () => {
    const ButtonLinkWrapper = shallowMount(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
    })

    const link = ButtonLinkWrapper.findComponent({
      name: 'NuxtLink',
    })

    expect(link.exists()).toBe(true)
    expect(link.props('to')).toBe('https://www.test.com/')
  })

  it('renders with the custom classnames', () => {
    const ButtonLinkWrapper = shallowMount(ButtonLink, {
      attrs: {
        ...defaultAttrs,
        class: 'go-fast',
      },
      props: defaultProps,
    })

    expect(ButtonLinkWrapper.classes('go-fast')).toBe(true)
  })
})
