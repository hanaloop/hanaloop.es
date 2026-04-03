
type CaptionedImageProps = {
  imageSrc: string, 
  caption: any, 
  containerClassName?: string // E.g. w-96
  imageClassName?: string // E.g. w-80
  isHero: boolean
  float?: string // E.g. "ml-4 float-right"
}

export default function CaptionedImage({imageSrc, caption, containerClassName, imageClassName, float, isHero = false}: CaptionedImageProps) {

  const containerClass = `${isHero ? '' : 'flex justify-center my-8 '} `;
  const imgClass = `${isHero ? "object-cover w-full bg-center": ''} ${imageClassName}`;
  
  return (
    <div className={`${containerClass} ${float}`}>
      <div className={containerClassName}>
      <img className={`${imgClass}`} src={imageSrc} />
      <div className="text-xs text-center text-gray-600">{caption}</div>
      </div>
    </div>
  )
} 