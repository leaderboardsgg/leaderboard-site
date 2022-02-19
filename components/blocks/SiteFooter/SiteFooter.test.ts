import SiteFooter from './SiteFooter.vue';
import { mockI18n, stubbedRender } from '@/testUtils';

const { $i18n } = mockI18n();
jest.mock('@nuxtjs/composition-api', () => ({
  ...jest.requireActual('@nuxtjs/composition-api'),
  useContext: jest.fn(() => ({ i18n: $i18n })),
}));

describe('<SiteFooter />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(SiteFooter);

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(SiteFooter);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly with the copyright info', () => {
    const { getByText } = stubbedRender(SiteFooter);

    expect(getByText('Copyright 2021')).toBeInTheDocument();
  });

  it('renders the language selector', () => {
    const { getByTestId } = stubbedRender(SiteFooter);

    expect(getByTestId('language-selector')).toBeInTheDocument();
  });
});
