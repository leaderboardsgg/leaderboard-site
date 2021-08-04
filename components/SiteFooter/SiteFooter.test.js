import { stubbedRender } from '@/testUtils';
import SiteFooter from './SiteFooter';

describe('<SiteFooter />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(SiteFooter);

    unmount();
  });

  it('renders correctly', () => {
    stubbedRender(SiteFooter);

    expect(document.querySelector('.site-footer')).toMatchSnapshot();
  });
});
