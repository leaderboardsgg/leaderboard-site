import SearchBar from './SearchBar.vue';
import { fireEvent, stubbedRender } from '~/testUtils';

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
    const { container } = stubbedRender(SearchBar, {
      props: defaultProps,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  describe('when search is initiated', () => {
    describe('and no onSubmit prop is passed', () => {
      const spyConsoleLog = jest.spyOn(console, 'log');

      it('should call the default onSubmit methd', async () => {
        const { getByTestId } = stubbedRender(SearchBar);

        await fireEvent.click(getByTestId('search-button'));

        expect(spyConsoleLog).toHaveBeenCalled();
      });
    });

    test('the onSubmit method is called when search button is clicked', async () => {
      const { getByTestId } = stubbedRender(SearchBar, {
        props: defaultProps,
      });

      await fireEvent.click(getByTestId('search-button'));

      expect(mockOnSubmit).toHaveBeenCalled();
    });

    test('the onSubmit method is called when the enter key is released', async () => {
      const { getByTestId } = stubbedRender(SearchBar, {
        props: defaultProps,
      });

      await fireEvent.type(getByTestId('search-input'), '{enter}');

      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});
