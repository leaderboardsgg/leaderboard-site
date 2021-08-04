import { stubbedRender } from '@/testUtils';
import NavLinks from './NavLinks';

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
    stubbedRender(NavLinks, {
      props: defaultProps,
    });

    expect(document.querySelector('.nav-link-container')).toMatchSnapshot();
  });

  it('should render the same amount of <NavLink /> components as there are items in the navLinks props', () => {
    stubbedRender(NavLinks, {
      props: defaultProps,
    });

    expect(document.querySelectorAll('.nav-link').length).toEqual(
      defaultProps.navLinks.length,
    );
  });
});
