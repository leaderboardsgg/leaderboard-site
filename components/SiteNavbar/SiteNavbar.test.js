import { stubbedRender } from '@/testUtils';
import SiteNavbar from './SiteNavbar';

describe('<SiteNavbar />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(SiteNavbar);

    unmount();
  });
});
