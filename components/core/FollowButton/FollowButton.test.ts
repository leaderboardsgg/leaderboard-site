import { fireEvent, stubbedRender } from '@/testUtils';
import FollowButton from './FollowButton.vue';

describe('<FollowButton />', () => {
  /*
   * This is a mock function for the onClick prop that is passed to the component.
   * It is used to check a click event on the button calls the passed onClick function.
   */
  const mockOnClick = jest.fn();
  const defaultProps = { onClick: mockOnClick };

  it('should render without crashing', () => {
    const { unmount } = stubbedRender(FollowButton, {
      props: defaultProps,
    });

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(FollowButton, {
      props: defaultProps,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  describe('when the onClick is initiated', () => {
    describe('and no onClick prop is passed', () => {
      const spyConsoleLog = jest.spyOn(console, 'log');

      it('should call the default onSubmit methd', async () => {
        const { container } = stubbedRender(FollowButton);

        fireEvent.click(container.firstChild as HTMLElement);

        expect(spyConsoleLog).toHaveBeenCalled();
      });
    });

    test('the onClick method is called when follow button is clicked', async () => {
      const { container } = stubbedRender(FollowButton, {
        props: defaultProps,
      });

      fireEvent.click(container.firstChild as HTMLElement);

      expect(mockOnClick).toHaveBeenCalled();
    });

    test('the onClick method is called when the enter key is released', async () => {
      const { container } = stubbedRender(FollowButton, {
        props: defaultProps,
      });

      fireEvent.type(container.firstChild as HTMLElement, '{enter}');

      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
