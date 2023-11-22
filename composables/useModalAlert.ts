interface ModalAlertState {
  body: string
  show: boolean
  title: string
  type: string
}

export const useModalAlert = () =>
  useState<ModalAlertState>('modal_alert', () => ({
    body: '',
    show: false,
    title: '',
    type: '',
  }))

export default useModalAlert
