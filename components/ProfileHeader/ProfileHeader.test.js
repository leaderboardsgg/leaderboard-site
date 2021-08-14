import { stubbedRender } from '@/testUtils';
import ProfileHeader from './ProfileHeader';

describe('<ProfileHeader />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(ProfileHeader);

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(ProfileHeader);

    expect(container.firstChild).toMatchSnapshot();
  });
});
