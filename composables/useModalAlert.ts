interface ModalAlertState {
  body: string
  show: boolean
  title: string
  type: string
}

export function useModalAlert() {
  return useState<ModalAlertState>('modal_alert', () => ({
    body: '',
    show: false,
    title: '',
    type: '',
  }))
}

export default useModalAlert
