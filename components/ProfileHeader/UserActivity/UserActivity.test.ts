import { stubbedRender } from '@/testUtils';
import UserActivity from './UserActivity.vue';

describe('<UserActivity />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(UserActivity);

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(UserActivity);

    expect(container.firstChild).toMatchSnapshot();
  });
});
