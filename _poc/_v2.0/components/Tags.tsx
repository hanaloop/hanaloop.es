

export type TagsProps = {
  tags?: string[]
  colorMapping?: Map<string, string>
}

export function Tags({tags}:TagsProps) {

  return (
    <div className="space-x-1">
      {tags && tags.map( tag => 
        <span className="px-1 rounded border border-primary text-xs" key={tag}>{tag}</span>
      )}
    </div>
  )
}