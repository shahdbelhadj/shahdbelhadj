import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences, socialLinks } from '../constants'
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold
        drop-shadow'>Shahd Belhadj</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-state-500'>
        <p>Junior full-stack developer and computer science student specializing in software engineering. I’m skilled in front-end and back-end development, passionate about building user-friendly applications, and solving technical challenges. </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill)=>(
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Professional Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-state-500'>
          <p>Through academic projects, I have developed hands-on experience in full-stack development, building practical applications and solving real-world challenges. These projects reflect my ability to deliver innovative and efficient solutions.</p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience)=>(
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{background: experience.iconBg}}
                contentStyle={{
                  borderBottom:'8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow:'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base"
                  style={{margin:0}}>
                    {experience.title}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index)=> (
                    <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>

                  ))}

                </ul>



              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>      <hr className='border-x-slate-200'/>
      <CTA />
    </section>
  )
}

export default About