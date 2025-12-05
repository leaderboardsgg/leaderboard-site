/* eslint-disable @typescript-eslint/ban-ts-comment */
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SearchBar from './SearchBar.vue'

describe('<SearchBar />', () => {
  it('should render without crashing', async () => {
    const SearchBarWrapper = await mountSuspended(SearchBar)
    expect(SearchBarWrapper.isVisible()).toBe(true)
  })

  describe('when the search event is emitted', () => {
    it('when the search button is clicked', async () => {
      const inputValue = 'click test'
      const SearchBarWrapper = await mountSuspended(SearchBar)

      await SearchBarWrapper.getByTestId('search-input').setValue(inputValue)
      await SearchBarWrapper.getByTestId('search-button').trigger('click')

      // @ts-expect-error
      expect(SearchBarWrapper.emitted()?.search[0][0]).toBe(inputValue)
    })

    it('when the enter key is released', async () => {
      const inputValue = 'enter test'
      const SearchBarWrapper = await mountSuspended(SearchBar)

      await SearchBarWrapper.getByTestId('search-input').setValue(inputValue)
      await SearchBarWrapper.getByTestId('search-input').trigger('keyup.enter')

      // @ts-expect-error
      expect(SearchBarWrapper.emitted()?.search[0][0]).toBe(inputValue)
    })
  })
})
