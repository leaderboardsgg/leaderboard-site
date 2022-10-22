/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

// import { VueNode } from '@vue/test-utils/dist/types'
import SearchBar from './SearchBar.vue'

describe('<SearchBar />', () => {
  const SearchBarWrapper = mount(SearchBar)

  test('should render without crashing', () => {
    expect(SearchBarWrapper.isVisible()).toBe(true)
  })

  describe('when the search event is emitted', () => {
    const inputValue = 'test'

    test('when the search button is clicked', async () => {
      // on `wrapper.vm` we can access any method or value
      // @ts-expect-error
      SearchBarWrapper.vm.state.input.value = inputValue

      await SearchBarWrapper.get('[data-testid="search-button"]').trigger(
        'click',
      )

      // @ts-expect-error
      expect(SearchBarWrapper.emitted()?.search[0][0]).toBe(inputValue)
    })

    test('when the enter key is released', async () => {
      // on `wrapper.vm` we can access any method or value
      // @ts-expect-error
      SearchBarWrapper.vm.state.input.value = inputValue

      await SearchBarWrapper.get('[data-testid="search-button"]').trigger(
        'keyup.enter',
      )

      // @ts-expect-error
      expect(SearchBarWrapper.emitted()?.search[0][0]).toBe(inputValue)
    })
  })
})
