import { describe, test as it } from 'vitest'
import { setup } from '@nuxt/test-utils-edge'
import ButtonLink from './ButtonLink.vue'
import { stubbedRender } from '@/testUtils'

describe('<ButtonLink />', async () => {
  await setup({})

  const defaultAttrs = { class: 'custom-link' }
  const defaultProps = { to: 'https://www.test.com/' }

  it('should render without crashing', () => {
    const { unmount } = stubbedRender(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Button' },
    })

    unmount()
  })

  it('renders with the correct <slot />', () => {
    const { getByText } = stubbedRender(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Any%' },
    })
    expect(getByText('Any%')).toBeInTheDocument()
  })

  it('renders with the passed link', () => {
    const { getByText } = stubbedRender(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
    })

    const link = getByText('Placeholder Link Text')
    expect(link.tagName).toEqual('A')
    expect(link.getAttribute('to')).toEqual('https://www.test.com/')
  })

  it('renders with the custom classnames', () => {
    stubbedRender(ButtonLink, {
      attrs: {
        ...defaultAttrs,
        class: 'go-fast',
      },
      props: defaultProps,
    })

    expect(document.querySelector('.go-fast')).toBeInTheDocument()
  })
})
