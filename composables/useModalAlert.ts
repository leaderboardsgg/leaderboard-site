interface ModalAlertState {
  body: string
  show: boolean
  title: string
  type: 'info' | 'success' | 'warning' | 'error' | ''
  onClose?: () => void
}

export function useModalAlert() {
  const state = useState<ModalAlertState>('modal_alert', () => ({
    body: '',
    show: false,
    title: '',
    type: '',
  }))

  function closeAlert() {
    const { onClose } = state.value
    state.value = {
      ...state.value,
      body: '',
      show: false,
      title: '',
      type: '',
    }
    if (onClose) {
      onClose()
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
