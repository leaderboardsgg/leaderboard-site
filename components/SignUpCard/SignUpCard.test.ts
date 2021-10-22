import SignUpCard from './SignUpCard.vue';
import { stubbedRender } from '@/testUtils';

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
