import { stubbedRender } from '@/testUtils';
import SignUpButton from './SignUpButton.vue';

describe('<SignUpButton />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(SignUpButton);

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(SignUpButton);

    expect(container.firstChild).toMatchSnapshot();
  });
});
