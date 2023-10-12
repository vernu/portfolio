import { ExperienceItem } from '@/data/types'
import AnimatedScrollWrapper from './AnimatedScrollWrapper'

interface ExperienceSectionProps {
  workExperience: ExperienceItem[]
}

export default function ExperienceSection({
  workExperience,
}: ExperienceSectionProps) {
  return (
    <>
      <section className='py-16'>
        <div className='container mx-auto px-6'>
          <h2 className='text-2xl font-semibold'>Experience</h2>
          <ol className='border-l border-neutral-500 '>
            {workExperience.map(
              ({ company, position, startDate, endDate, bulletPoints }) => (
                <li key={company}>
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
                </li>
              )
            )}
          </ol>
        </div>
      </section>
    </>
  )
}
