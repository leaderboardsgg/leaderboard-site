import { stubbedRender } from '@/testUtils';
import SignUpCard from './SignUpCard.vue';

describe('<SignUpCard />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(SignUpCard);

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(SignUpCard);

    expect(container.firstChild).toMatchSnapshot();
  });
});
