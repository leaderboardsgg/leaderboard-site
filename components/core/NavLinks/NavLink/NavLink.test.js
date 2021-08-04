import { stubbedRender } from '@/testUtils';
import NavLink from './NavLink';

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
});
