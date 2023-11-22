import { mount, enableAutoUnmount } from '@vue/test-utils'
import { useModalAlert } from 'composables/useModalAlert'
import { getByClass, getByTestId, getHTMLElement } from 'root/testUtils'
import BasicAlert from './BasicAlert.vue'

function getBasicAlertWrapper() {
  return mount(BasicAlert)
}

beforeEach(() => {
  const modalAlertState = useModalAlert()
  modalAlertState.value = {
    body: 'This is a test',
    show: true,
    title: 'A test alert?',
    type: 'info',
  }
})

enableAutoUnmount(afterEach)

afterEach(() => {
  fetchMock.resetMocks()
  vi.restoreAllMocks()
})

describe('<BasicAlert />', () => {
  it('should render without crashing', () => {
    const wrapper = getBasicAlertWrapper()

    expect(wrapper.isVisible()).toBe(true)
  })

  it('renders with the correct information', () => {
    const wrapper = getBasicAlertWrapper()

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
      const wrapper = getBasicAlertWrapper()

      await getByTestId(wrapper, 'basic-modal-alert-close-button').trigger(
        'click',
      )

      expect(wrapper.isVisible()).toBe(false)
    })
  })
})
