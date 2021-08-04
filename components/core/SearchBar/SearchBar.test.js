import { fireEvent, stubbedRender } from '@/testUtils';
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  const mockOnSubmit = jest.fn();
  const defaultProps = { onSubmit: mockOnSubmit };

  it('should render without crashing', () => {
    const { unmount } = stubbedRender(SearchBar, {
      props: defaultProps,
    });

    unmount();
  });

  it('renders correctly', () => {
    stubbedRender(SearchBar, {
      props: defaultProps,
    });

    expect(document.querySelector('.search-bar')).toMatchSnapshot();
  });

  describe('when search is initiated', () => {
    test('the onSubmit method is called when search button is clicked', async () => {
      stubbedRender(SearchBar, {
        props: defaultProps,
      });

      const searchButton = document.querySelector('button[type="submit"]');
      await fireEvent.click(searchButton);

      expect(mockOnSubmit).toHaveBeenCalled();
    });

    test('the onSubmit method is called when the enter key is released', async () => {
      stubbedRender(SearchBar, {
        props: defaultProps,
      });

      const searchInput = document.querySelector('input');
      await fireEvent.type(searchInput, '{enter}');

      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});
