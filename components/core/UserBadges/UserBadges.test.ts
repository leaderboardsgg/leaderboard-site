import UserBadges from './UserBadges.vue';
import { stubbedRender } from '@/testUtils';

describe('<ProfileHeader />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(UserBadges);

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(UserBadges);

    expect(container.firstChild).toMatchSnapshot();
  });
});
