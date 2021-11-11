import LogoutButton from './LogoutButton.vue';
import { stubbedRender } from '@/testUtils';

describe('<LogoutButton />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(LogoutButton);

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(LogoutButton);

    expect(container.firstChild).toMatchSnapshot();
  });
});
