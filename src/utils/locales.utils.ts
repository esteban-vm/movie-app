const locale = new Intl.Locale('en', { region: 'US' })
const names = new Intl.DisplayNames([locale], { type: 'language' })

export const formatDate = (date: string) => new Date(date).toLocaleDateString(locale, { dateStyle: 'long' })
export const formatLanguage = (lang: string) => names.of(lang)
export const formatNumber = (num: number) => num.toLocaleString(locale)
