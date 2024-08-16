import { mountSuspended } from '@nuxt/test-utils/runtime'
import { getByClass, getByTestId, getHTMLElement } from 'root/testUtils'
import BasicAlert from './BasicAlert.vue'

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
      getHTMLElement(getByClass(wrapper, 'basic-modal-alert__header'))
        .childElementCount,
    ).toEqual(3)
    expect(getByClass(wrapper, 'basic-modal-alert__title').text()).toEqual(
      'A test alert?',
    )
    expect(getByClass(wrapper, 'basic-modal-alert__body').text()).toEqual(
      'This is a test',
    )
  })

  describe('when the close button is clicked', () => {
    it('should emit the close event', async () => {
      const wrapper = await mountSuspended(BasicAlert)
      expect(wrapper.find('.modal').exists()).toBe(true)
      await getByTestId(wrapper, 'basic-modal-alert-close-button').trigger(
        'click',
      )

      expect(wrapper.find('.modal').exists()).toBe(false)
    })
  })
})
