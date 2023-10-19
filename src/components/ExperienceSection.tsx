import { ExperienceItem } from '@/data/types'
import { ExperienceCard } from './ExperienceCard'

interface ExperienceSectionProps {
  workExperience: ExperienceItem[]
}

export default function ExperienceSection({
  workExperience,
}: ExperienceSectionProps) {
  return (
    <section className='py-16'>
      <div className='container mx-auto px-6'>
        <h2 className='text-2xl font-semibold'>Experience</h2>
        <ol className='border-l border-neutral-500 '>
          {workExperience.map((experience) => (
            <li key={experience.company}>
              <ExperienceCard experience={experience} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
