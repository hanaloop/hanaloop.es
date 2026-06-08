
import type { ReactNode } from 'react'

type CaptionedImageProps = {
  imageSrc: string, 
  caption: ReactNode, 
  containerClassName?: string // E.g. w-96
  imageClassName?: string // E.g. w-80
  isHero: boolean
  float?: string // E.g. "ml-4 float-right"
}

export default function CaptionedImage({imageSrc, caption, containerClassName, imageClassName, float, isHero = false}: CaptionedImageProps) {

  const containerClass = `${isHero ? '' : 'my-8'} ${float ?? ''}`.trim();
  const innerClass = `${containerClassName ?? ''} flex flex-col items-center`;
  const imgClass = `${isHero ? 'w-full object-contain' : 'mx-auto object-contain'} max-w-full ${imageClassName ?? ''}`.trim();

  return (
    <div className={containerClass}>
      <div className={innerClass}>
      <img className={imgClass} src={imageSrc} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
      <div className="text-xs text-center text-gray-600">{caption}</div>
      </div>
    </div>
  )
} 
