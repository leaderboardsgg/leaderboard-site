import { render } from '@/testUtils';
import index from '../index.vue';

describe('/index', () => {
  it('should render without crashing', () => {
    const { unmount } = render(index);
    unmount();
  });

  it('should render the placeholder text', () => {
    const { getByText } = render(index);
    expect(
      getByText('This is just a primary content placeholder.'),
    ).toBeInTheDocument();
  });
});
