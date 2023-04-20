import React from 'react'

const experienceItems = [
  {
    company: 'John Snow, Inc.',
    position: 'Software Engineer',
    startDate: 'Sept 2022',
    endDate: 'present',
    description: [
      'working on a budget-tool platform, completely replacing the company\'s Excel-based annual budget management for different projects.',
      'my roles include adding new features to the application and maintaining the existing functionalities.',
      'Technologies used: React, Material UI, Java, Spring, PostgreSQL,',
    ],
  },
  {
    company: '1888 EC Startup Studio',
    position: 'Full-stack Developer',
    startDate: 'Dec 2021',
    endDate: 'Sept 2022',
    description: [
      'worked on a complete rewrite of a travel portal platform (triopia.travel)',
      'built payment integrations with stripe, CyberSource, telebirr, and local banks',
      'Configured and maintained deployment infrastructure on AWS including EC2 instances, S3 buckets, and Lambda functions.',
      'Technologies used: React, NextJs, NodeJs, NestJs, AWS',
    ],
  },
  {
    company: 'Arifpay Financial Technologies',
    position: 'Software Developer',
    startDate: 'Jun 2021',
    endDate: 'Dec 2021',
    description: [
      'Worked on a team that developed large-scale fintech solutions including mPOS and payment gateway.',
      'Worked on a web-based dashboard application',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section className='bg-gray-200 py-16'>
      <div className='container mx-auto px-6'>
        <h2 className='text-xl font-bold'>Experience</h2>

        <ul className=''>
          {experienceItems.map((experiece, i) => (
            <li className='' key={i}>
              <h3 className='text-lg font-medium pt-8 pb-2'>
                {experiece.company}
              </h3>
              <p className=''>
                {experiece.position} ({experiece.startDate} -{' '}
                {experiece.endDate})
              </p>

              <ul className='list-outside list-disc px-4 space-y-2 pt-2 pb-8 text-justify'>
                {experiece.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
