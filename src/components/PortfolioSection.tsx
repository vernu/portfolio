import Image from 'next/image'
import React from 'react'
const portfolioItems = [
  {
    title: 'SMS Gateway',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus ligula in justo pulvinar vestibulum.',
    image:
      'https://ik.imagekit.io/vernu/portfolio/Screenshot_2023-03-19_at_2.56.05_PM.png?updatedAt=1679227051628',
    tech: ['Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Real.et',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus ligula in justo pulvinar vestibulum.',
    image:
      'https://ik.imagekit.io/vernu/portfolio/Screenshot_2023-03-19_at_1.41.07_PM.png?updatedAt=1679222499485',
  },
  {
    title: 'Pomodoro Timer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus ligula in justo pulvinar vestibulum.',
    image:
      'https://ik.imagekit.io/vernu/portfolio/Screenshot_2023-03-19_at_1.32.18_PM.png?updatedAt=1679221967804',
  },
  {
    title: 'AfroSoundz Radio',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus ligula in justo pulvinar vestibulum.',
    image: 'https://ik.imagekit.io/vernu/portfolio/afrosoundz.webp?updatedAt=1679225783418',
  },
  {
    title: 'Fatou Jobs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus ligula in justo pulvinar vestibulum.',
    image:
      'https://ik.imagekit.io/vernu/portfolio/Screenshot_2023-03-19_at_1.42.56_PM.png?updatedAt=1679222647489',
  },
  {
    title: 'The Hub',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus ligula in justo pulvinar vestibulum.',
    image: '/portfolio-item-1.jpg',
  },
]
export default function PortfolioSection() {
  return (
    <section className='py-16'>
      <div className='container px-4 mx-auto'>
        <h2 className='text-3xl font-bold mb-4'>Portfolio</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {portfolioItems.map(({ title, description, image, tech }) => (
            <div
              key={title}
              className=' bg-white rounded shadow-md overflow-hidden'
            >
              <Image
                src={image ?? '/images/placeholder.jpeg'}
                alt={title}
                // layout='fill'
                // objectFit='cover'
                style={{ objectFit: 'cover' }}
                loading='lazy'
                width={400}
                height={300}

                // objectPosition={'center'}
              />
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{title}</div>
                <p className='text-gray-700 text-base text-justify'>{description}</p>
              </div>
              <div className='px-6 py-4'>
                {tech?.map((item) => (
                  <span
                    key={item}
                    className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
