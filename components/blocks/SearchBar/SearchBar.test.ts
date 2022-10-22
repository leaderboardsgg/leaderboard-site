import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import SearchBar from './SearchBar.vue'

describe('<SearchBar />', () => {
  const SearchBarWrapper = mount(SearchBar)

  test('should render without crashing', () => {
    expect(SearchBarWrapper.isVisible()).toBe(true)
  })

  // describe('when the search event is emitted', () => {
  //   const inputValue = 'test'

  //   test('when the search button is clicked', async () => {
  //     const searchInput = SearchBarWrapper.get('[data-testid="search-input"]')
  //     // const searchInput: HTMLInputElement = getByTestId('search-input')

  //     await searchInput.setValue(inputValue)
  //     // await fireEvent.type(searchInput, inputValue)
  //     expect(searchInput).toEqual(inputValue)

  //     // await fireEvent.click(getByTestId('search-button'))

  //     // expect(emitted().search).toBeTruthy()
  //     // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // // @ts-expect-error
  //     // expect(emitted().search?.[0]?.[0]).toEqual(inputValue)
  //   })

  // test('when the enter key is released', async () => {
  //   const { emitted, getByTestId } = stubbedRender(SearchBar)
  //   const searchInput: HTMLInputElement = getByTestId('search-input')

  //   await fireEvent.type(searchInput, inputValue)
  //   expect(searchInput.value).toEqual(inputValue)

  //   await fireEvent.type(getByTestId('search-input'), '{enter}')

  //   expect(emitted().search).toBeTruthy()
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-expect-error
  //   expect(emitted().search?.[0]?.[0]).toEqual(inputValue)
  // })
  // })
})
