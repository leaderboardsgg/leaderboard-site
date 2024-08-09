import { describe, expect, it } from 'vitest'

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SearchBar from './SearchBar.vue'
import { getByTestId } from 'root/testUtils'

describe('<SearchBar />', () => {
  it('should render without crashing', async () => {
    const SearchBarWrapper = await mountSuspended(SearchBar)
    expect(SearchBarWrapper.isVisible()).toBe(true)
  })

  describe('when the search event is emitted', () => {
    it('when the search button is clicked', async () => {
      const inputValue = 'click test'
      const SearchBarWrapper = await mountSuspended(SearchBar)
      const searchButton = getByTestId(SearchBarWrapper, 'search-button')
      const searchInput = getByTestId(SearchBarWrapper, 'search-input')

      searchInput.setValue(inputValue)

      await searchButton.trigger('click')

      // @ts-expect-error
      expect(SearchBarWrapper.emitted()?.search[0][0]).toBe(inputValue)
    })

    it('when the enter key is released', async () => {
      const inputValue = 'enter test'
      const SearchBarWrapper = await mountSuspended(SearchBar)
      const searchInput = getByTestId(SearchBarWrapper, 'search-input')

      searchInput.setValue(inputValue)

      await searchInput.trigger('keyup.enter')

      // @ts-expect-error
      expect(SearchBarWrapper.emitted()?.search[0][0]).toBe(inputValue)
    })
  })
})
