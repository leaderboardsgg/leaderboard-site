interface ModalAlertState {
  body: string
  show: boolean
  title: string
  type: string
}

export function useModalAlert() {
  const state = useState<ModalAlertState>('modal_alert', () => ({
    body: '',
    show: false,
    title: '',
    type: '',
  }))

  function closeAlert() {
    state.value = {
      body: '',
      show: false,
      title: '',
      type: '',
    }
  }

  function showAlert(stateProps: Omit<ModalAlertState, 'show'>) {
    state.value = {
      ...stateProps,
      show: true,
    }
  }

  return {
    closeAlert,
    showAlert,
    state,
  }
}

export default useModalAlert
