import { stubbedRender } from '@/testUtils';
import SignUpButton from './SignUpButton';

describe('<SignUpButton />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(SignUpButton);

    unmount();
  });
});
