import { describe, expect, test, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'

import SiteNavbar from './SiteNavbar.vue'

afterEach(() => {
  vi.restoreAllMocks()
  vi.clearAllMocks()
})

describe('<SiteNavbar />', () => {
  const SiteNavbarWrapper = mount(SiteNavbar, {
    global: {
      mocks: {
        $t: (msg: any) => msg,
      },
    },
  })

  test('should render without crashing', () => {
    expect(SiteNavbarWrapper.isVisible()).toBe(true)
  })

  describe('when no user is logged in', () => {
    test('should render the login/sign up buttons', () => {
      expect(
        SiteNavbarWrapper.get(
          '[data-testId="site-navbar-login-button"]',
        ).isVisible(),
      ).toBe(true)

      expect(
        SiteNavbarWrapper.get(
          '[data-testId="site-navbar-sign-up-button"]',
        ).isVisible(),
      ).toBe(true)
    })

    describe('when the login button is clicked', () => {
      test('should bring up the login card', () => {
        SiteNavbarWrapper.get(
          '[data-testId="site-navbar-login-button"]',
        ).trigger('click')

        expect(
          SiteNavbarWrapper.get('[data-testId="log-in-card"]').isVisible(),
        ).toBe(true)
      })
    })

    describe('when the sign up button is clicked', () => {
      test('should bring up the signup card', () => {
        SiteNavbarWrapper.get(
          '[data-testId="site-navbar-sign-up-button"]',
        ).trigger('click')

        expect(
          SiteNavbarWrapper.get('[data-testId="sign-up-card"]').isVisible(),
        ).toBe(true)
      })
    })
  })

  // Needs to be changed in the future anyways so 😬😬😬
  // describe('when a user is logged in', async () => {
  //   await SiteNavbarWrapper.setre({
  //     currentUser: {
  //       admin: true,
  //       email: 'admin@leaderboards.gg',
  //       username: 'lbgg_admin',
  //     },
  //   })

  //   test('should render the logout button', () => {
  //     expect(
  //       /* eslint-disable */
  //       // prettier-ignore
  //       SiteNavbarWrapper.get(
  //         '[data-testId="site-navbar-logout-button"]'
  //         /* eslint-enable */
  //       ).isVisible(),
  //     ).toBe(true)
  //   })

  // describe('when the logout button is clicked', () => {
  //   const useLogoutUserSpy = vi.spyOn(apiComposables, 'useLogoutUser')

  //   test('should log out the user', async () => {
  //     const { getByTestId } = stubbedRender(SiteNavbar)

  //     await fireEvent.click(getByTestId('site-navbar-logout-button'))

  //     expect(useLogoutUserSpy).toHaveBeenCalled()
  //   })
  // })
  // })
})
