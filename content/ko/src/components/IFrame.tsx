
type IFrameProps = {
  title?: string, 
  source: string,
  height: number
}

export default function IFrame({title, source, height}: IFrameProps) {

  return (
    <div >
      <h2 className="font-bold text-2xl">{title}</h2>
      <a href={source}>
        Link to source
      </a>
      <iframe style={{height: height}}  className="w-full" src={source} />
    </div>
  )
}
