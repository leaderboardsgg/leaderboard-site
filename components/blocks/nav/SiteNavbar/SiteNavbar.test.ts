// import { fileURLToPath } from 'node:url'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setup, $fetch, url, startServer, setup } from '@nuxt/test-utils'
import { describe, expect, test, vi, beforeEach, afterEach } from 'vitest'

// import from 'nuxt'

import { ref } from 'vue'
import SiteNavbar from './SiteNavbar.vue'
// import 'root/vitest.setup'
import { fireEvent, stubbedRender } from 'root/testUtils'
import * as apiComposables from 'composables/api'
import { User } from 'lib/api/data-contracts'

await setup({
  rootDir: './../../../../../',
  server: true,
})

// vi.doMock(url('#app'), () => ({
//   useRuntimeConfig: () => ({
//     public: {
//       BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
//     },
//   }),
// }))

afterEach(() => {
  vi.restoreAllMocks()
  vi.clearAllMocks()
})

describe('<SiteNavbar />', () => {
  test('should render without crashing', () => {
    const { unmount } = stubbedRender(SiteNavbar)

    unmount()
  })

  describe('when no user is logged in', () => {
    beforeEach(() => {
      ref<User>({
        admin: false,
        email: '',
        username: '',
      })
    })

    test('should render the login/sign up buttons', () => {
      const { getByTestId } = stubbedRender(SiteNavbar)

      expect(getByTestId('site-navbar-login-button')).toBeInTheDocument()
      expect(getByTestId('site-navbar-sign-up-button')).toBeInTheDocument()
    })

    describe('when the login button is clicked', () => {
      test('should bring up the login card', async () => {
        const { container, getByTestId } = stubbedRender(SiteNavbar)

        await fireEvent.click(getByTestId('site-navbar-login-button'))

        expect(container.querySelector('.login-card')).toBeInTheDocument()
      })
    })

    describe('when the sign up button is clicked', () => {
      test('should bring up the signup card', async () => {
        const { container, getByTestId } = stubbedRender(SiteNavbar)

        await fireEvent.click(getByTestId('site-navbar-sign-up-button'))

        expect(container.querySelector('.signup-card')).toBeInTheDocument()
      })
    })
  })

  describe('when a user is logged in', () => {
    beforeEach(() => {
      ref<User>({
        admin: true,
        email: 'admin@leaderboards.gg',
        username: 'lbgg_admin',
      })
    })

    test('should render the logout button', () => {
      const { getByTestId } = stubbedRender(SiteNavbar)

      expect(getByTestId('site-navbar-logout-button')).toBeInTheDocument()
    })

    describe('when the logout button is clicked', () => {
      const useLogoutUserSpy = vi.spyOn(apiComposables, 'useLogoutUser')

      test('should log out the user', async () => {
        const { getByTestId } = stubbedRender(SiteNavbar)

        await fireEvent.click(getByTestId('site-navbar-logout-button'))

        expect(useLogoutUserSpy).toHaveBeenCalled()
      })
    })
  })
})
