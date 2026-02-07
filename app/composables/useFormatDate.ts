import { useI18n } from '#i18n'

export const useFormatDate = () => {
  const { locale } = useI18n()

  const formatDate = (
    dateString: string | null | undefined,
    options?: Intl.DateTimeFormatOptions,
  ): string => {
    if (!dateString) return ''

    const date = new Date(dateString)

    if (isNaN(date.getTime())) return dateString

    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      ...options,
    }

    return new Intl.DateTimeFormat(locale.value, defaultOptions).format(date)
  }

  return {
    formatDate,
  }
}
