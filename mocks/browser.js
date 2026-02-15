import { setupWorker } from 'msw/browser'
import { getBaseUrl } from 'lib/helpers'
import { handlers } from './handlers'

const worker = setupWorker(...handlers)
const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development' || process.env.TEST) {
    return
  }

  await worker.start({
    onUnhandledRequest: (req, print) => {
      if (req.url.startsWith(getBaseUrl())) {
        print.warning()
      }
    },
  })
}

export { enableMocking, worker }
