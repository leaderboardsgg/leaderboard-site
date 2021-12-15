import Run from './Run.vue';
import { stubbedRender } from '@/testUtils';

describe('<Run />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(Run);
    unmount();
  });

  it('renders correctly', () => {
    const { container } = stubbedRender(Run);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('#formattedStanding', () => {
  it('should return the "1st" formatted standing', () => {
    const { getByText } = stubbedRender(Run, {
      props: { standing: 1 },
    });

    expect(getByText('1st')).toBeInTheDocument();
  });

  it('should return the "2nd" formatted standing', () => {
    const { getByText } = stubbedRender(Run, {
      props: { standing: 2 },
    });

    expect(getByText('2nd')).toBeInTheDocument();
  });

  it('should return the "3rd" formatted standing', () => {
    const { getByText } = stubbedRender(Run, {
      props: { standing: 3 },
    });

    expect(getByText('3rd')).toBeInTheDocument();
  });

  it('should return the "11th" formatted standing', () => {
    const { getByText } = stubbedRender(Run, {
      props: { standing: 11 },
    });

    expect(getByText('11th')).toBeInTheDocument();
  });

  it('should return the trophy', () => {
    const { getByTestId } = stubbedRender(Run, {
      props: { standing: 1 },
    });

    expect(getByTestId('trophy-icon')).toBeInTheDocument();
  });
});
