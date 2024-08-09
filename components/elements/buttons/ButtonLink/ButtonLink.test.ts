import { describe, expect, it } from 'vitest'

import { mountSuspended } from '@nuxt/test-utils/runtime'
import ButtonLink from './ButtonLink.vue'

describe('<ButtonLink />', () => {
  const defaultAttrs = { class: 'custom-link' }
  const defaultProps = { to: 'https://www.test.com/' }

  it('should render without crashing', async () => {
    const ButtonLinkWrapper = await mountSuspended(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Button' },
    })

    expect(ButtonLinkWrapper.isVisible()).toBe(true)
  })

  it('renders with the correct <slot />', async () => {
    const ButtonLinkWrapper = await mountSuspended(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Any%' },
    })
    expect(ButtonLinkWrapper.html()).toContain('Any%')
  })

  it('renders with the passed link', async () => {
    const ButtonLinkWrapper = await mountSuspended(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
    })

    const link = ButtonLinkWrapper.findComponent({
      name: 'NuxtLink',
    })

    expect(link.exists()).toBe(true)
    expect(link.props('to')).toBe('https://www.test.com/')
  })

  it('renders with the custom classnames', async () => {
    const ButtonLinkWrapper = await mountSuspended(ButtonLink, {
      attrs: {
        ...defaultAttrs,
        class: 'go-fast',
      },
      props: defaultProps,
    })

    expect(ButtonLinkWrapper.classes('go-fast')).toBe(true)
  })
})
