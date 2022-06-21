import { useState } from '#app'

export const useSessionToken = () => useState<string>('session_token')

export default useSessionToken
