import { stubbedRender } from '@/testUtils';
import LoginButton from './LoginButton.vue';

describe('<LoginButton />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(LoginButton);

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(LoginButton);

    expect(container.firstChild).toMatchSnapshot();
  });
});
