// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setup, $fetch, url } from '@nuxt/test-utils-edge'
import { describe, expect, it, vi } from 'vitest'

// import from 'nuxt'

import { ref } from 'vue'
import SiteNavbar from './SiteNavbar.vue'
// import 'root/vitest.setup'
import { fireEvent, stubbedRender } from 'root/testUtils'
import * as apiComposables from 'root/composables/api'
import { User } from 'root/lib/api/data-contracts'

vi.doMock(`${url('#app')}`, () => ({
  useRuntimeConfig: () => ({
    public: {
      BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
    },
  }),
}))

afterEach(() => {
  vi.restoreAllMocks()
  vi.clearAllMocks()
})

describe('<SiteNavbar />', async () => {
  await setup({})
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(SiteNavbar)

    unmount()
  })

  describe('when no user is logged in', async () => {
    await setup({})
    beforeEach(() => {
      ref<User>({
        admin: false,
        email: '',
        username: '',
      })
    })

    it('should render the login/sign up buttons', () => {
      const { getByTestId } = stubbedRender(SiteNavbar)

      expect(getByTestId('site-navbar-login-button')).toBeInTheDocument()
      expect(getByTestId('site-navbar-sign-up-button')).toBeInTheDocument()
    })

    describe('when the login button is clicked', async () => {
      await setup({})
      it('should bring up the login card', async () => {
        const { container, getByTestId } = stubbedRender(SiteNavbar)

        await fireEvent.click(getByTestId('site-navbar-login-button'))

        expect(container.querySelector('.login-card')).toBeInTheDocument()
      })
    })

    describe('when the sign up button is clicked', async () => {
      await setup({})
      it('should bring up the signup card', async () => {
        const { container, getByTestId } = stubbedRender(SiteNavbar)

        await fireEvent.click(getByTestId('site-navbar-sign-up-button'))

        expect(container.querySelector('.signup-card')).toBeInTheDocument()
      })
    })
  })

  describe('when a user is logged in', async () => {
    await setup({})
    beforeEach(() => {
      ref<User>({
        admin: true,
        email: 'admin@leaderboards.gg',
        username: 'lbgg_admin',
      })
    })

    it('should render the logout button', () => {
      const { getByTestId } = stubbedRender(SiteNavbar)

      expect(getByTestId('site-navbar-logout-button')).toBeInTheDocument()
    })

    describe('when the logout button is clicked', async () => {
      await setup({})
      const useLogoutUserSpy = vi.spyOn(apiComposables, 'useLogoutUser')

      it('should log out the user', async () => {
        const { getByTestId } = stubbedRender(SiteNavbar)

        await fireEvent.click(getByTestId('site-navbar-logout-button'))

        expect(useLogoutUserSpy).toHaveBeenCalled()
      })
    })
  })
})
