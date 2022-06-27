import SearchBar from './SearchBar.vue'
import { fireEvent, stubbedRender } from '@/testUtils'

describe('<SearchBar />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(SearchBar)

    unmount()
  })

  describe('when the search event is emitted', () => {
    const inputValue = 'test'

    test('when the search button is clicked', async () => {
      const { emitted, getByTestId } = stubbedRender(SearchBar)
      const searchInput: HTMLInputElement = getByTestId('search-input')

      await fireEvent.type(searchInput, inputValue)
      expect(searchInput.value).toEqual(inputValue)

      await fireEvent.click(getByTestId('search-button'))

      expect(emitted().search).toBeTruthy()
      expect(emitted().search?.[0]?.[0]).toEqual(inputValue)
    })

    test('when the enter key is released', async () => {
      const { emitted, getByTestId } = stubbedRender(SearchBar)
      const searchInput: HTMLInputElement = getByTestId('search-input')

      await fireEvent.type(searchInput, inputValue)
      expect(searchInput.value).toEqual(inputValue)

      await fireEvent.type(getByTestId('search-input'), '{enter}')

      expect(emitted().search).toBeTruthy()
      expect(emitted().search?.[0]?.[0]).toEqual(inputValue)
    })
  })
})
