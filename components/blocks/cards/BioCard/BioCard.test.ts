import BioCard from './BioCard.vue';
import { stubbedRender } from '~/testUtils';

describe('<BioCard />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(BioCard);

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(BioCard);

    expect(container.firstChild).toMatchSnapshot();
  });
});
