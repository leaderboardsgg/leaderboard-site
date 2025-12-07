import { mountSuspended } from '@nuxt/test-utils/runtime'
import BasicAlert from './BasicAlert.vue'
import { useModalAlert } from '#imports'

beforeEach(() => {
  const { state: modalAlertState } = useModalAlert()
  modalAlertState.value = {
    title: 'A test alert?',
    body: 'This is a test',
    show: true,
    type: 'info',
  }
})

afterEach(() => {
  fetchMock.resetMocks()
  vi.restoreAllMocks()
})

describe('<BasicAlert />', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(BasicAlert)

    expect(wrapper.isVisible()).toBe(true)
  })

  it('renders with the correct information', async () => {
    const wrapper = await mountSuspended(BasicAlert)

    expect(
      wrapper.getByClass('basic-modal-alert__header').element.childElementCount,
    ).toEqual(3)
    expect(wrapper.getByClass('basic-modal-alert__title').text()).toEqual(
      'A test alert?',
    )
    expect(wrapper.getByClass('basic-modal-alert__body').text()).toEqual(
      'This is a test',
    )
  })

  describe('when the close button is clicked', () => {
    it('should emit the close event', async () => {
      const wrapper = await mountSuspended(BasicAlert)
      expect(wrapper.find('.modal').exists()).toBe(true)

      await wrapper
        .getByTestId('basic-modal-alert-close-button')
        .trigger('click')
      expect(wrapper.find('.modal').exists()).toBe(false)
    })
  })
})
