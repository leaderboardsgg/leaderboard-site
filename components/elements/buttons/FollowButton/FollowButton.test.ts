import FollowButton from './FollowButton.vue'
import { fireEvent, stubbedRender } from '@/testUtils'

describe('<FollowButton />', () => {
  /*
   * This is a mock function for the onClick prop that is passed to the component.
   * It is used to check a click event on the button calls the passed onClick function.
   */
  const mockOnClick = jest.fn()
  const defaultProps = { onClick: mockOnClick }

  it('should render without crashing', () => {
    const { unmount } = stubbedRender(FollowButton, {
      props: defaultProps,
    })

    unmount()
  })

  it('renders correctly', () => {
    const { container } = stubbedRender(FollowButton, {
      props: defaultProps,
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  describe('when the onClick is initiated', () => {
    describe('and no onClick prop is passed', () => {
      const spyConsoleLog = jest.spyOn(console, 'log')

      it('should call the default onSubmit methd', async () => {
        const { container } = stubbedRender(FollowButton)

        await fireEvent.click(<HTMLElement>container.firstChild)

        expect(spyConsoleLog).toHaveBeenCalled()
      })
    })

    test('the onClick method is called when follow button is clicked', async () => {
      const { container } = stubbedRender(FollowButton, {
        props: defaultProps,
      })

      await fireEvent.click(<HTMLElement>container.firstChild)

      expect(mockOnClick).toHaveBeenCalled()
    })

    test('the onClick method is called when the enter key is released', async () => {
      const { container } = stubbedRender(FollowButton, {
        props: defaultProps,
      })

      await fireEvent.type(<HTMLElement>container.firstChild, '{enter}')

      expect(mockOnClick).toHaveBeenCalled()
    })
  })
})
