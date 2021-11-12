import SignUpButton from './SignUpButton.vue';
import { stubbedRender } from '~/testUtils';

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
