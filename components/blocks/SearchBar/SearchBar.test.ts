/* eslint-disable @typescript-eslint/ban-ts-comment */
import { mount, enableAutoUnmount } from '@vue/test-utils'
import SearchBar from './SearchBar.vue'
import { getByTestId } from 'root/testUtils'

function getSearchBarWrapper() {
  return mount(SearchBar)
}

enableAutoUnmount(afterEach)

describe('<SearchBar />', () => {
  it('should render without crashing', () => {
    const SearchBarWrapper = getSearchBarWrapper()
    expect(SearchBarWrapper.isVisible()).toBe(true)
  })

  describe('when the search event is emitted', () => {
    it('when the search button is clicked', async () => {
      const inputValue = 'click test'
      const SearchBarWrapper = getSearchBarWrapper()
      const searchButton = getByTestId(SearchBarWrapper, 'search-button')
      const searchInput = getByTestId(SearchBarWrapper, 'search-input')

      searchInput.setValue(inputValue)

      await searchButton.trigger('click')

      // @ts-expect-error
      expect(SearchBarWrapper.emitted()?.search[0][0]).toBe(inputValue)
    })

    it('when the enter key is released', async () => {
      const inputValue = 'enter test'
      const SearchBarWrapper = getSearchBarWrapper()
      const searchInput = getByTestId(SearchBarWrapper, 'search-input')

      searchInput.setValue(inputValue)

      await searchInput.trigger('keyup.enter')

      // @ts-expect-error
      expect(SearchBarWrapper.emitted()?.search[0][0]).toBe(inputValue)
    })
  })
})
