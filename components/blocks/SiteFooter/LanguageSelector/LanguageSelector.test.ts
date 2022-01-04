import LanguageSelector from './LanguageSelector.vue';
import { fireEvent, mockI18n, stubbedRender } from '@/testUtils';

const mocks = {
  ...mockI18n(),
};

describe('<LanguageSelector />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(LanguageSelector, { mocks });

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(LanguageSelector, { mocks });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a dropdown with all the locales as options', () => {
    const { getByText } = stubbedRender(LanguageSelector, { mocks });

    expect(getByText('English')).toBeInTheDocument();
    expect(getByText('Spanish')).toBeInTheDocument();
    expect(getByText('French')).toBeInTheDocument();
  });

  describe('when an option is selected', () => {
    it('should call the $i18n.setLocale method with the selected locale', async () => {
      const { getByRole } = stubbedRender(LanguageSelector, { mocks });
      const dropdown = getByRole('listbox');

      await fireEvent.selectOptions(dropdown, 'es');

      expect(mocks.$i18n.setLocale).toHaveBeenCalledWith('es');
    });
  });
});
