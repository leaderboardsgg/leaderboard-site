import LoginButton from './LoginButton.vue';
import { stubbedRender } from '~/testUtils';

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
