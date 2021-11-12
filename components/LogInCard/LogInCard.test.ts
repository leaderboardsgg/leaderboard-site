import { stubbedRender } from '@/testUtils';
import LogInCard from './LogInCard.vue';

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
