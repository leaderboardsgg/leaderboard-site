import { stubbedRender } from '@/testUtils';
import ButtonLink from './ButtonLink';

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
    stubbedRender(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Button' },
    });

    expect(document.querySelector('.custom-link')).toMatchSnapshot();
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
    stubbedRender(ButtonLink, {
      attrs: defaultAttrs,
      props: defaultProps,
    });
    expect(document.querySelector('a').getAttribute('href')).toBe(
      'https://www.test.com/',
    );
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
