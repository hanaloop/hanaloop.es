
export interface PageSection {
  title: React.ReactNode,
  subtitle?: React.ReactNode,
  icon?: React.ReactNode
  items?: DisplayItem[]
};

export type DisplayItem = {
  icon?: any,
  imageUrl?: string,
  title: string,
  subtitle?: string,
  description?: any | any[], // the description, can be either string or JSX
  source?: string // the source of the data
  sourceUrl?: string // the url of the source
  link?: string,
  imgHeight?: number | string;
}
