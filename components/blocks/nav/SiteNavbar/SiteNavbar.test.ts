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

  it('should render without crashing', () => {
    expect(SiteNavbarWrapper.isVisible()).toBe(true)
  })

  describe('when no user is logged in', () => {
    it('should render the login/sign up buttons', () => {
      expect(
        SiteNavbarWrapper.get(
          '[data-testid="site-navbar-login-button"]',
        ).isVisible(),
      ).toBe(true)

      expect(
        SiteNavbarWrapper.get(
          '[data-testid="site-navbar-sign-up-button"]',
        ).isVisible(),
      ).toBe(true)
    })

    describe('when the login button is clicked', () => {
      it('should bring up the login card', () => {
        SiteNavbarWrapper.get(
          '[data-testid="site-navbar-login-button"]',
        ).trigger('click')

        expect(
          SiteNavbarWrapper.get('[data-testid="log-in-card"]').isVisible(),
        ).toBe(true)
      })
    })

    describe('when the sign up button is clicked', () => {
      it('should bring up the signup card', () => {
        SiteNavbarWrapper.get(
          '[data-testid="site-navbar-sign-up-button"]',
        ).trigger('click')

        expect(
          SiteNavbarWrapper.get('[data-testid="sign-up-card"]').isVisible(),
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

  //   it('should render the logout button', () => {
  //     expect(
  //       /* eslint-disable */
  //       // prettier-ignore
  //       SiteNavbarWrapper.get(
  //         '[data-testid="site-navbar-logout-button"]'
  //         /* eslint-enable */
  //       ).isVisible(),
  //     ).toBe(true)
  //   })

  // describe('when the logout button is clicked', () => {
  //   const useLogoutUserSpy = vi.spyOn(apiComposables, 'useLogoutUser')

  //   it('should log out the user', async () => {
  //     const { getByTestId } = stubbedRender(SiteNavbar)

  //     await fireEvent.click(getByTestId('site-navbar-logout-button'))

  //     expect(useLogoutUserSpy).toHaveBeenCalled()
  //   })
  // })
  // })
})
