import { stubbedRender } from '@/testUtils';
import LoginButton from './LoginButton';

describe('<LoginButton />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(LoginButton);

    unmount();
  });
});
