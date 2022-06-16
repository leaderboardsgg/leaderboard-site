import { SpyInstanceFn } from 'vitest'
import { ref } from 'vue'
import { useState } from '#app'
import SiteNavbar from './SiteNavbar.vue'
import * as apiComposables from '@/composables/api'
import { User } from '@/lib/api/data-contracts'
import { fireEvent, stubbedRender } from '@/testUtils'

vi.mock('#app', () => ({
  useState: vi.fn(),
}))

afterEach(() => {
  vi.restoreAllMocks()
  vi.clearAllMocks()
})

describe('<SiteNavbar />', () => {
  it('should render without crashing', () => {
    ;(useState as SpyInstanceFn).mockImplementation(() => ref())

    const { unmount } = stubbedRender(SiteNavbar)

    unmount()
  })

  describe('when no user is logged in', () => {
    beforeEach(() => {
      ;(useState as SpyInstanceFn).mockImplementationOnce((_stateId: string) =>
        ref<User>({
          admin: false,
          email: '',
          username: '',
        }),
      )
    })

    it('should render the login/sign up buttons', () => {
      const { getByTestId } = stubbedRender(SiteNavbar)

      expect(getByTestId('site-navbar-login-button')).toBeInTheDocument()
      expect(getByTestId('site-navbar-sign-up-button')).toBeInTheDocument()
    })

    describe('when the login button is clicked', () => {
      it('should bring up the login card', async () => {
        const { container, getByTestId } = stubbedRender(SiteNavbar)

        await fireEvent.click(getByTestId('site-navbar-login-button'))

        expect(container.querySelector('.login-card')).toBeInTheDocument()
      })
    })

    describe('when the sign up button is clicked', () => {
      it('should bring up the signup card', async () => {
        const { container, getByTestId } = stubbedRender(SiteNavbar)

        await fireEvent.click(getByTestId('site-navbar-sign-up-button'))

        expect(container.querySelector('.signup-card')).toBeInTheDocument()
      })
    })
  })

  describe('when a user is logged in', () => {
    beforeEach(() => {
      ;(useState as SpyInstanceFn).mockImplementation((_stateId: string) =>
        ref<User>({
          admin: true,
          email: 'admin@leaderboards.gg',
          username: 'lbgg_admin',
        }),
      )
    })

    it('should render the logout button', () => {
      const { getByTestId } = stubbedRender(SiteNavbar)

      expect(getByTestId('site-navbar-logout-button')).toBeInTheDocument()
    })

    describe('when the logout button is clicked', () => {
      const useLogoutUserSpy = vi.spyOn(apiComposables, 'useLogoutUser')

      it('should log out the user', async () => {
        const { getByTestId } = stubbedRender(SiteNavbar)

        await fireEvent.click(getByTestId('site-navbar-logout-button'))

        expect(useLogoutUserSpy).toHaveBeenCalled()
      })
    })
  })
})
