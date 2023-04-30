import { ExperienceItem } from '@/data/types'

interface ExperienceSectionProps {
  workExperience: ExperienceItem[]
}

export default function ExperienceSection({
  workExperience,
}: ExperienceSectionProps) {
  return (
    <section className='bg-gray-200 py-16'>
      <div className='container mx-auto px-6'>
        <h2 className='text-xl font-bold'>Experience</h2>

        <ul className=''>
          {workExperience.map(
            ({ company, position, startDate, endDate, bulletPoints }) => (
              <li className='' key={company}>
                <h3 className='text-lg font-medium pt-8 pb-2'>{company}</h3>
                <p className=''>
                  {position} ({startDate} - {endDate})
                </p>

                <ul className='list-outside list-disc px-4 space-y-2 pt-2 pb-8 text-justify'>
                  {bulletPoints.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  )
}
