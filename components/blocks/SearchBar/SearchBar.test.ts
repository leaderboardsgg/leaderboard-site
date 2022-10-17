// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setup, $fetch } from '@nuxt/test-utils-edge'
import { describe, test } from 'vitest'

import SearchBar from './SearchBar.vue'
import { fireEvent, stubbedRender } from 'root/testUtils'

describe('<SearchBar />', async () => {
  await setup({})

  test('should render without crashing', () => {
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      expect(emitted().search?.[0]?.[0]).toEqual(inputValue)
    })

    test('when the enter key is released', async () => {
      const { emitted, getByTestId } = stubbedRender(SearchBar)
      const searchInput: HTMLInputElement = getByTestId('search-input')

      await fireEvent.type(searchInput, inputValue)
      expect(searchInput.value).toEqual(inputValue)

      await fireEvent.type(getByTestId('search-input'), '{enter}')

      expect(emitted().search).toBeTruthy()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      expect(emitted().search?.[0]?.[0]).toEqual(inputValue)
    })
  })
})
