import { stubbedRender } from '@/testUtils';
import NavLinks from './NavLinks.vue';

describe('<NavLinks />', () => {
  const defaultProps = {
    navLinks: [
      { name: 'Home', to: '/' },
      { name: 'About', to: '/about' },
      { name: 'Contact', to: '/contact' },
    ],
  };

  it('should render without crashing', () => {
    const { unmount } = stubbedRender(NavLinks, {
      props: defaultProps,
    });

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(NavLinks, {
      props: defaultProps,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the same amount of <NavLink /> components as there are items in the navLinks props', () => {
    const { container, getByText } = stubbedRender(NavLinks, {
      props: defaultProps,
    });

    expect(container.firstChild?.childNodes.length).toEqual(
      defaultProps.navLinks.length,
    );
    defaultProps.navLinks.forEach((navLink) => {
      expect(getByText(navLink.name)).toBeInTheDocument();
    });
  });
});
