import { ExperienceItem } from './types'

export const workExperience: ExperienceItem[] = [
  {
    company: 'John Snow, Inc.',
    position: 'Software Engineer',
    startDate: 'Sept 2022',
    endDate: 'present',
    bulletPoints: [
      "working on a budget-tool platform, completely replacing the company's Excel-based annual budget management for different projects.",
      'my roles include adding new features to the application and maintaining the existing functionalities.',
      'Technologies used: React, Material UI, Java, Spring, PostgreSQL,',
    ],
  },
  {
    company: '1888 EC Startup Studio',
    position: 'Full-stack Developer',
    startDate: 'Dec 2021',
    endDate: 'Sept 2022',
    bulletPoints: [
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
    bulletPoints: [
      'Worked on a team that developed large-scale fintech solutions including mPOS and payment gateway.',
      'Worked on a web-based dashboard application',
    ],
  },
]
