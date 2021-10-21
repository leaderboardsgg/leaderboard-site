import { stubbedRender } from '@/testUtils';
import SiteNavbar from './SiteNavbar.vue';

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
});
