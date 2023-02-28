import ProfileHeader from './ProfileHeader.vue'
import { stubbedRender } from '@/testUtils'

describe('<ProfileHeader />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(ProfileHeader)

    unmount()
  })

  it('renders correctly', () => {
    const { container } = stubbedRender(ProfileHeader)

    expect(container.firstChild).toMatchSnapshot()
  })
})
