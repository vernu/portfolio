import React from 'react'

import { BasicInfo, Skill } from '@/data/types'
import Image from 'next/image'
import AnimatedScrollWrapper from './AnimatedScrollWrapper'

interface AboutSectionProps {
  basicInfo: BasicInfo
  skills: Skill[]
}

export default function AboutSection({ basicInfo, skills }: AboutSectionProps) {
  return (
    <AnimatedScrollWrapper>
      <section className='py-16'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className=' '>
              <div className='container mx-auto '>
                <h2 className='text-xl font-semibold mb-4'>
                  Hi 👋, It&apos;s{' '}
                  <span className='text-cyan-600'>Israel Abebe</span>
                </h2>

                <div className='text-justify font-[100]'>
                  I&apos;m a Full-stack developer based in Addis Ababa, Ethiopia
                  (UTC+3)
                  <br />
                  <br />I have over four years of experience in developing web
                  and mobile applications using modern technologies. Proficient
                  in both front-end and back-end development, with a strong
                  understanding of database design. Passionate about creating
                  clean, efficient, and scalable code that delivers a great user
                  experience.
                </div>
              </div>
            </div>
            <div className=' '>
              <div className='container md:mx-8 '>
                <Image
                  src='/illustration-1.png'
                  alt='Illustration'
                  width={500}
                  height={500}
                  className='m-auto w-72 hover:scale-[109%] transition-transform duration-1000'
                />
                {/* <img
                src='/profile-pic (14).png'
                alt='skills'
                className='m-auto w-72 border-orange-600 border-2 rounded-full shadow-md transform-y rotdate-180'
              /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedScrollWrapper>
  )
}
