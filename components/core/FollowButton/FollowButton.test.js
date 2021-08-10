import { fireEvent, stubbedRender } from '@/testUtils';
import FollowButton from './FollowButton';

describe('<FollowButton />', () => {
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

        await fireEvent.click(container.firstChild);

        expect(spyConsoleLog).toHaveBeenCalled();
      });
    });

    test('the onClick method is called when follow button is clicked', async () => {
      const { container } = stubbedRender(FollowButton, {
        props: defaultProps,
      });

      await fireEvent.click(container.firstChild);

      expect(mockOnClick).toHaveBeenCalled();
    });

    test('the onClick method is called when the enter key is released', async () => {
      const { container } = stubbedRender(FollowButton, {
        props: defaultProps,
      });

      await fireEvent.type(container.firstChild, '{enter}');

      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
