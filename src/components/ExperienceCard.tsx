import { ExperienceItem } from '@/data/types'
import AnimatedScrollWrapper from './shared/AnimatedScrollWrapper'

interface ExperienceCardProps {
  experience: ExperienceItem
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { company, position, startDate, endDate, bulletPoints } = experience
  return (
    <AnimatedScrollWrapper>
      <div className='flex-start flex items-center pt-3'>
        <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-500'></div>
        <p className='text-sm'>
          {startDate} - {endDate}
        </p>
      </div>
      <div className='mb-6 ml-4 mt-2'>
        <h4 className='mb-1.5 text-xl font-semibold'>
          {company} - {position}{' '}
        </h4>
        <ul className='list-outside list-disc px-4 space-y-2 pt-2 pb-8 text-justify font-[100]'>
          {bulletPoints.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      </div>
    </AnimatedScrollWrapper>
  )
}
