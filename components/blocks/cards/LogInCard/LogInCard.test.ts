import LogInCard from './LogInCard.vue';
import { stubbedRender } from '~/testUtils';

describe('<LogInCard />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(LogInCard);

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(LogInCard);

    expect(container.firstChild).toMatchSnapshot();
  });
});
