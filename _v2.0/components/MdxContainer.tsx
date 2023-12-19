/**
 * Layout that wraps MDX component
 * It enforces the enclose of the doc with <article>
 * @param param0 
 * @returns 
 */
export default function MdxContainer({children, padding = true}: {children:JSX.Element, padding?: boolean}) {

  const style = padding ? "p-4 ": "";
  return (
    <article className={`${style} prose text-gray-800`}>
      {children}
    </article>
  )
}
