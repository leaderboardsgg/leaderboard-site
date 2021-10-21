import { stubbedRender } from '@/testUtils';
import Run from './Run';

describe('<ProfileHeader />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(Run);
    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(Run);
    expect(container.firstChild).toMatchSnapshot();
  });
});
