import SiteFooter from './SiteFooter.vue';
import { stubbedRender } from '@/testUtils';

describe('<SiteFooter />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(SiteFooter);

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(SiteFooter);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly with the copyright info', () => {
    const { getByText } = stubbedRender(SiteFooter);

    expect(getByText('Copyright 2021')).toBeInTheDocument();
  });
});
