import { motion } from "framer-motion";
import CheckIcon from "../../../static/svg/Check.svg"
import useBaseUrl from "@docusaurus/useBaseUrl";

const MediaText = ({title, descriptions}: {title: string, descriptions: {subTitle: string; content:string}[]}) => {
    return (
      <div className='flex flex-col items-start gap-4 xl:w-[50%]'>
        <span className='font-bold sm:text-xl text-lg'>{title}</span>
        <div className='flex flex-col gap-4 items-start'>
          {
            descriptions.map((description) => {
              return (
                <>
                  <div className='flex items-center gap-3'>
                  <div className="w-3 rounded-md"><CheckIcon/></div>
                  <span className='sm:text-lg text-base font-semibold'>{description.subTitle}</span>
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
  
  const MediaImage = ({imageUrl}: {imageUrl:string}) => {
    return (
      <div className='xl:w-[400px] w-full sm:h-[350px] min-h-[200px] h-full rounded-md xl:flex-1 bg-contain bg-center bg-no-repeat z-10' style={{backgroundImage: `url(${useBaseUrl(imageUrl)})`}}></div>
    )
  }

  export const CardMediaImage = ({title, descriptions, imageUrl}: {title: string, descriptions: {subTitle: string; content:string}[], imageUrl: string}) => {
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
            <div className="flex justify-center w-full h-full mb-[150px]">
                <div className='sm:w-[80%] w-[90%] bg-gray-100 rounded-md px-10 py-6 flex gap-8 xl:flex-row-reverse flex-col xl:h-[400px] h-full'>  
                    <MediaImage imageUrl={imageUrl}/>
                    <MediaText title={title} descriptions={descriptions}/>
                </div>
            </div>
        </motion.div>
    )
  }

