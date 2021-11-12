import SiteNavbar from './SiteNavbar.vue';
import { fireEvent, stubbedRender } from '~/testUtils';

/* Need to mock the `window.matchMedia` method here, because it has not
 * yet been implemented by JSDOM. Hopefully this will be fixed soon.
 * If we see errors creeping into other files about the `window.matchMedia`
 * method, then we can break this mock out into an includable file.
 *
 * https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
 */
Object.defineProperty(window, 'matchMedia', {
  value: jest.fn().mockImplementation((query) => ({
    addEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
    matches: false,
    media: query,
    onchange: null,
    removeEventListener: jest.fn(),
  })),
  writable: true,
});

describe('<SiteNavbar />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(SiteNavbar);

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(SiteNavbar);

    expect(container.firstChild).toMatchSnapshot();
  });

  describe('`<CoreLoginButton />` interactions', () => {
    describe('when being clicked', () => {
      it('should open the modal containing the `<LogInCard />`', async () => {
        const { getByTestId } = stubbedRender(SiteNavbar);
        const loginButton = getByTestId('site-navbar-login-button');

        await fireEvent.click(<HTMLElement>loginButton);

        expect(getByTestId('login-card')).toBeVisible();
      });
    });

    describe('when the element is focused and the enter key is released', () => {
      it('should open the modal containing the `<LogInCard />`', async () => {
        const { getByTestId } = stubbedRender(SiteNavbar);
        const loginButton = getByTestId('site-navbar-login-button');

        await fireEvent.type(<HTMLElement>loginButton, '{enter}');

        expect(getByTestId('login-card')).toBeVisible();
      });
    });
  });

  describe('`<CoreSignUpButton />` interactions', () => {
    describe('when being clicked', () => {
      it('should open the modal containing the `<SignUpCard />`', async () => {
        const { getByTestId } = stubbedRender(SiteNavbar);
        const signUpButton = getByTestId('site-navbar-sign-up-button');

        await fireEvent.click(<HTMLElement>signUpButton);

        expect(getByTestId('sign-up-card')).toBeVisible();
      });
    });

    describe('when the element is focused and the enter key is released', () => {
      it('should open the modal containing the `<SignUpCard />`', async () => {
        const { getByTestId } = stubbedRender(SiteNavbar);
        const signUpButton = getByTestId('site-navbar-sign-up-button');

        await fireEvent.type(<HTMLElement>signUpButton, '{enter}');

        expect(getByTestId('sign-up-card')).toBeVisible();
      });
    });
  });
});
