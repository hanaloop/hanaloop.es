
export type AttributeType = {
  [key: string]: any;
}

export type ContentMetaType = {
  title: string,
  authors: any,
  tags: [string],
  date: string,
  contentTruncated?: string,
  contentFull?: string,
  slug: string,
  readingTime: {
    text: string,
    minutes: number,
    time: number,
    words: number
  }
  meta: any
}

export type ContentTreeItem = {
  _type: string, // "item" | "folder"
  label?: string, // Either the _meta.yaml#label or slug
  slug: string, 
  meta?: any
  contents?: ContentTreeItem[]
}
