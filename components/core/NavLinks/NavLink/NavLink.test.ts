import NavLink from './NavLink.vue';
import { stubbedRender } from '@/testUtils';

describe('<NavLink />', () => {
  const defaultAttrs = { class: 'custom-link' };
  const defaultProps = { to: '/games' };

  it('should render without crashing', () => {
    const { unmount } = stubbedRender(NavLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Games' },
    });

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(NavLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Games' },
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
