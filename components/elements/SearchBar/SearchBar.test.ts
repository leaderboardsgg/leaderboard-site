import SearchBar from './SearchBar.vue';
import { fireEvent, stubbedRender } from '@/testUtils';

describe('<SearchBar />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(SearchBar);

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(SearchBar);

    expect(container.firstChild).toMatchSnapshot();
  });

  describe('when the search event is emitted', () => {
    const inputValue = 'test';

    test('when the search button is clicked', async () => {
      const { emitted, getByTestId } = stubbedRender(SearchBar);

      await fireEvent.type(getByTestId('search-input'), inputValue);
      await fireEvent.click(getByTestId('search-button'));

      expect(emitted().search).toBeTruthy();
      expect(emitted().search?.[0]?.[0]).toEqual(inputValue);
    });

    test('when the enter key is released', async () => {
      const { emitted, getByTestId } = stubbedRender(SearchBar);

      await fireEvent.type(getByTestId('search-input'), inputValue);
      await fireEvent.type(getByTestId('search-input'), '{enter}');

      expect(emitted().search).toBeTruthy();
      expect(emitted().search?.[0]?.[0]).toEqual(inputValue);
    });
  });
});
