import { describe, expect, test, vi, afterEach } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'

import SiteNavbar from './SiteNavbar.vue'

afterEach(() => {
  vi.restoreAllMocks()
  vi.clearAllMocks()
})

describe('<SiteNavbar />', () => {
  let SiteNavbarWrapper: VueWrapper

  test('should render without crashing', () => {
    SiteNavbarWrapper = mount(SiteNavbar, {
      global: {
        mocks: {
          $t: (msg: any) => msg,
        },
      },
    })
  })

  describe('when no user is logged in', () => {
    test('should render the login/sign up buttons', () => {
      expect(
        SiteNavbarWrapper.get(
          '[data-testId="site-navbar-login-button"]',
        ).isVisible(),
      )

      expect(
        SiteNavbarWrapper.get(
          '[data-testId="site-navbar-sign-up-button"]',
        ).isVisible(),
      )
    })

    describe('when the login button is clicked', () => {
      test('should bring up the login card', () => {
        SiteNavbarWrapper.get(
          '[data-testId="site-navbar-login-button"]',
        ).trigger('click.left')

        expect(SiteNavbarWrapper.get('[data-testId="log-in-card"]').isVisible())
      })
    })

    describe('when the sign up button is clicked', () => {
      test('should bring up the signup card', () => {
        SiteNavbarWrapper.get(
          '[data-testId="site-navbar-sign-up-button"]',
        ).trigger('click.left')

        expect(
          SiteNavbarWrapper.get('[data-testId="sign-up-card"]').isVisible(),
        )
      })
    })
  })

  // Needs to be changed in the future anyways so 😬😬😬
  // describe('when a user is logged in', () => {
  //   beforeEach(() => {
  //     const Currentuser = SiteNavbarWrapper.getCurrentComponent().refs
  //     Currentuser.value = {
  //       admin: true,
  //       email: 'admin@leaderboards.gg',
  //       username: 'lbgg_admin',
  //     }
  //   })

  //   test('should render the logout button', () => {
  //     expect(
  //       SiteNavbarWrapper.get(
  //         '[data-testId="site-navbar-logout-button"]',
  //       ).isVisible(),
  //     )
  //   })

  //   describe('when the logout button is clicked', () => {
  //     const useLogoutUserSpy = vi.spyOn(apiComposables, 'useLogoutUser')

  //     test('should log out the user', async () => {
  //       const { getByTestId } = stubbedRender(SiteNavbar)

  //       await fireEvent.click(getByTestId('site-navbar-logout-button'))

  //       expect(useLogoutUserSpy).toHaveBeenCalled()
  //     })
  //   })
  // })
})
