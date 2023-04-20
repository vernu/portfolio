import React from 'react'

export default function AboutSection() {
  return (
    <section className='py-16 bg-gray-200 '>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className=' '>
            <div className='container mx-auto '>
              <h2 className='text-xl font-bold mb-4'>Hi, I&apos;m Israel Abebe!</h2>

              <div className='text-justify'>
                I&apos;m a Full-stack developer based in Addis Ababa, Ethiopia (UTC+3)<br/><br/>
                I have over 3 years of experience in
                developing web and mobile applications using modern
                technologies. Proficient in both front-end and back-end
                development, with a strong understanding of database design.
                Passionate about creating clean, efficient, and scalable code
                that delivers a great user experience.
              </div>
            </div>
          </div>
          <div className=' '>
            <div className='container md:mx-8 '>
              <h2 className='text-xl font-bold mb-4'>Skills</h2>

              <div className=''>
                <div className=''>
                  <span className='font-bold'>Frontend: </span> React, Next.js,
                  Tailwind CSS, Material UI, Redux, VueJs, Nuxt
                </div>

                <div className=''>
                  <span className='font-bold'>Backend: </span> NodeJs (Express,
                  NestJs), Java (Spring), Python (Django)
                </div>

                <div className=''>
                  <span className='font-bold'>Others: </span> Flutter, Firebase,
                  AWS,
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
