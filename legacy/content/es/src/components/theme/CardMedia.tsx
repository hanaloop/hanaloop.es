import { motion } from "framer-motion";
import CheckIcon from "../../../static/svg/Check.svg"
import useBaseUrl from "@docusaurus/useBaseUrl";

const MediaText = ({title, descriptions}: {title: string, descriptions: {subTitle: string; content:string}[]}) => {
    return (
      <div className='flex flex-col items-start gap-4 xl:w-[50%]'>
        <h2 className='font-bold sm:text-xl text-lg'>{title}</h2>
        <div className='flex flex-col gap-4 items-start'>
          {
            descriptions.map((description) => {
              return (
                <>
                  <div className='flex items-center gap-3'>
                  <div className="w-3 rounded-md"><CheckIcon/></div>
                  <h3 className='sm:text-lg text-base font-semibold'>{description.subTitle}</h3>
                  </div>
                  <div className='text-start sm:text-base text-sm'>{description.content}</div>     
                </>
              )
            })
          }
        </div>
      </div>
    )
  }
  
  const MediaImage = ({imageUrl, imgSize}: {imageUrl:string, imgSize:string}) => {
    
    return (
      <div className={`xl:w-[400px] w-full ${imgSize} min-h-[150px] rounded-md xl:flex-1 bg-contain bg-center bg-no-repeat z-10`} style={{backgroundImage: `url(${useBaseUrl(imageUrl)})`}}></div>
    )
  }

  export const CardMediaImage = ({size="l", title, descriptions, imageUrl}: { size: "m" | 'l', title: string, descriptions: {subTitle: string; content:string}[], imageUrl: string}) => {
    const imgSize = size === "m" ? 'sm:h-[270px]' : 'sm:h-[300px]'
    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
            }}
        >
            <div className="flex justify-center w-full h-full space-y-[100px]">
                <div className='sm:w-[70%] w-[90%] rounded-md px-10 py-6 flex gap-8 xl:flex-row-reverse flex-col xl:h-[400px] h-full justify-center'>  
                    <MediaImage imageUrl={imageUrl} imgSize={imgSize}/>
                    <MediaText title={title} descriptions={descriptions}/>
                </div>
            </div>
        </motion.div>
    )
  }

