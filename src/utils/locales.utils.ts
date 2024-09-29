const locale = 'en-US'
const Names = new Intl.DisplayNames([locale], { type: 'language' })

export const formatDate = (date: string) => new Date(date).toLocaleDateString(locale, { dateStyle: 'long' })
export const formatLanguage = (language: string) => Names.of(language)
