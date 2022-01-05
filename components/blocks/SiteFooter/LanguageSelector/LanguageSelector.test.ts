import LanguageSelector from './LanguageSelector.vue';
import { fireEvent, mockI18n, stubbedRender } from '@/testUtils';

const { $i18n: i18n } = mockI18n();

jest.mock('@nuxtjs/composition-api', () => ({
  ...jest.requireActual('@nuxtjs/composition-api'),
  useContext: jest.fn(() => ({ i18n })),
}));

describe('<LanguageSelector />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(LanguageSelector);

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(LanguageSelector);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a dropdown with all the locales as options', () => {
    const { getByText } = stubbedRender(LanguageSelector);

    for (const locale of i18n.locales) {
      expect(getByText(locale.name)).toBeInTheDocument();
    }
  });

  describe('when an option is selected', () => {
    it('should call the $i18n.setLocale method with the selected locale', async () => {
      const { getByRole } = stubbedRender(LanguageSelector);
      const dropdown = getByRole('listbox');

      await fireEvent.selectOptions(dropdown, 'es');

      expect(i18n.setLocale).toHaveBeenCalledWith('es');
    });
  });
});
