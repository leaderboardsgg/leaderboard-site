import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { mountSuspended } from '@nuxt/test-utils/runtime'
import * as apiComposables from 'composables/api'
import { getByTestId } from 'root/testUtils'
import SiteNavbar from './SiteNavbar.vue'

afterEach(() => {
  vi.restoreAllMocks()
  vi.clearAllMocks()
})

describe('<SiteNavbar />', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(SiteNavbar)

    expect(wrapper.isVisible()).toBe(true)
  })

  describe('when no user is logged in', () => {
    it('should render the login/sign up buttons', async () => {
      const wrapper = await mountSuspended(SiteNavbar)

      expect(getByTestId(wrapper, 'site-navbar-login-button').isVisible()).toBe(
        true,
      )

      expect(
        getByTestId(wrapper, 'site-navbar-sign-up-button').isVisible(),
      ).toBe(true)
    })

    describe('when the login button is clicked', () => {
      it('should bring up the login card', async () => {
        const wrapper = await mountSuspended(SiteNavbar)

        getByTestId(wrapper, 'site-navbar-login-button').trigger('click')

        expect(getByTestId(wrapper, 'log-in-card').isVisible()).toBe(true)
      })

      describe('when the login card is open and forgot password is clicked', () => {
        it('should bring up the forgot password card', async () => {
          const wrapper = await mountSuspended(SiteNavbar)

          getByTestId(wrapper, 'site-navbar-login-button').trigger('click')
          expect(getByTestId(wrapper, 'log-in-card').isVisible()).toBe(true)

          getByTestId(wrapper, 'forgot-password-button').trigger('click')

          expect(getByTestId(wrapper, 'forgot-password-card').isVisible()).toBe(
            true,
          )
        })
      })
    })

    describe('when the sign up button is clicked', () => {
      it('should bring up the signup card', async () => {
        const wrapper = await mountSuspended(SiteNavbar)

        getByTestId(wrapper, 'site-navbar-sign-up-button').trigger('click')

        expect(getByTestId(wrapper, 'sign-up-card').isVisible()).toBe(true)
      })
    })
  })

  describe('when a user is logged in', () => {
    beforeEach(() => {
      useSessionToken().value = 'token'
    })

    it('should render the logout button', async () => {
      const wrapper = await mountSuspended(SiteNavbar)

      expect(
        getByTestId(wrapper, 'site-navbar-logout-button').isVisible(),
      ).toBe(true)
    })

    describe('when the logout button is clicked', () => {
      it('should log out the user', async () => {
        const useLogoutUserSpy = vi.spyOn(apiComposables, 'useLogoutUser')
        const wrapper = await mountSuspended(SiteNavbar)

        await getByTestId(wrapper, 'site-navbar-logout-button').trigger('click')

        expect(useLogoutUserSpy).toHaveBeenCalled()
      })
    })
  })
})
