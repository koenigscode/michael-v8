

import Section from 'components/common/section/section'
import { otherSkills, skills } from './data'

export default () => (
    <Section dark heading="Technologies I'm using">
        <div className='Skills__grid'>
            {skills.map((val, idx) => (
                <div key={idx} className='Skills__item'>
                    <a
                        key={idx}
                        className='mr-6'
                        aria-label={val.name}
                        href={val.link}
                        target='_blank'
                        rel='noopener'
                    >
                        <span className={`text-5xl icon-${val.iconClass}`}></span>
                    </a>
                    <div>
                        <div className='text-xl font-semibold mb-2'>{val.name}</div>
                        <p className='inline-block w-full text-justify'>{val.text}</p>
                    </div>
                </div>
            ))}
            <div className='Skills__item px-0 flex justify-around items-center flex-wrap  lg:col-span-2'>
                {otherSkills.map((val, idx) => (
                    <a
                        key={idx}
                        className='inline-block m-4'
                        aria-label={val.name}
                        title={val.name}
                        href={val.link}
                        target='_blank'
                        rel='noopener'
                    >
                        <span className={`text-5xl icon-${val.iconClass}`}></span>
                    </a>
                ))}
            </div>
        </div>
    </Section>
)
