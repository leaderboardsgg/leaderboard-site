import { stubbedRender } from '@/testUtils';
import SocialButtons from './SocialButtons.vue';

describe('<SocialButtons />', () => {
  const defaultProps = {
    socials: [
      {
        icon: 'dscrd',
        name: 'Discord',
        url: 'https://discord.com/',
      },
      {
        icon: 'twch',
        name: 'Twitch',
        url: 'https://twitch.tv/johnsmithruns',
      },
      {
        icon: 'twtr',
        name: 'Twitter',
        url: 'https://twitter.com/johnsmithruns',
      },
    ],
  };

  it('should render without crashing', () => {
    const { unmount } = stubbedRender(SocialButtons, {
      props: defaultProps,
    });

    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(SocialButtons, {
      props: defaultProps,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the correct amount of social links', () => {
    const { container, getByText } = stubbedRender(SocialButtons, {
      props: defaultProps,
    });

    expect(container.firstChild?.childNodes.length).toEqual(
      defaultProps.socials.length,
    );
    defaultProps.socials.forEach((social) => {
      expect(getByText(social.icon)).toBeInTheDocument();
    });
  });
});
