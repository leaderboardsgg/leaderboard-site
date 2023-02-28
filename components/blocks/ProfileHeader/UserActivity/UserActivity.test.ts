import UserActivity from './UserActivity.vue'
import { stubbedRender } from '@/testUtils'

describe('<UserActivity />', () => {
  it('should render without crashing', () => {
    const { unmount } = stubbedRender(UserActivity)

    unmount()
  })

  it('renders correctly', () => {
    const { container } = stubbedRender(UserActivity)

    expect(container.firstChild).toMatchSnapshot()
  })
})
