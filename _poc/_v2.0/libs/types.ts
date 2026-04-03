
export type DisplayItem = {
  icon?: any,
  imageUrl?: string,
  title: string,
  subtitle?: string,
  description?: any | string[], // the description, can be either string or JSX
  source?: string // the source of the data
  sourceUrl?: string // the url of the source
}
