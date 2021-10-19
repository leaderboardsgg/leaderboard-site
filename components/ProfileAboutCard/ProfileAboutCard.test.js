import { stubbedRender } from '@/testUtils';
import ProfileAboutCard from './ProfileAboutCard';

describe('<ProfileAboutCard />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(ProfileAboutCard);

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(ProfileAboutCard);

    expect(container.firstChild).toMatchSnapshot();
  });
});
