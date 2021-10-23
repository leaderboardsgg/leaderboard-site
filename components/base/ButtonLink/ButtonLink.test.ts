import ButtonLink from './ButtonLink.vue';
import { stubbedRender } from '@/testUtils';

describe('<ButtonLink />', () => {
  const defaultAttrs = { class: 'custom-link' };
  const defaultProps = { to: 'https://www.test.com/' };

  it('should render without crashing', () => {
    const { unmount } = stubbedRender(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Button' },
    });

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Button' },
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with the correct <slot />', () => {
    const { getByText } = stubbedRender(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Any%' },
    });
    expect(getByText('Any%')).toBeInTheDocument();
  });

  it('renders with the passed link', () => {
    const { getByText } = stubbedRender(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
    });

    const link = getByText('Placeholder');
    expect(link.tagName).toEqual('A');
    expect(link.getAttribute('href')).toEqual('https://www.test.com/');
  });

  it('renders with the custom classnames', () => {
    stubbedRender(ButtonLink, {
      attrs: {
        ...defaultAttrs,
        class: 'go-fast',
      },
      props: defaultProps,
    });

    expect(document.querySelector('.go-fast')).toBeInTheDocument();
  });
});
