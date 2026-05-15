type CaptionedImageProps = {
  imageSrc: string;
  caption?: React.ReactNode;
  containerClassName?: string;
  imageClassName?: string;
  isHero?: boolean;
  float?: string;
};

export default function CaptionedImage({
  imageSrc,
  caption,
  containerClassName,
  imageClassName,
  float,
  isHero = false,
}: CaptionedImageProps) {
  const containerClass = isHero ? '' : 'flex justify-center my-8 ';
  const imgClass = `${isHero ? 'object-cover w-full bg-center' : ''} ${imageClassName ?? ''}`.trim();

  return (
    <div className={`${containerClass}${float ?? ''}`}>
      <div className={containerClassName}>
        <img className={imgClass} src={imageSrc} alt={typeof caption === 'string' ? caption : ''} />
        {caption ? <div className="text-center text-xs text-gray-600">{caption}</div> : null}
      </div>
    </div>
  );
}
