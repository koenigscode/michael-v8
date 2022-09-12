import Section from '../section/section'
import { useState } from 'react'

interface FaqItem {
    heading: string
    content: React.ReactNode
}

const faqItems: FaqItem[] = [
    {
        heading: 'When did you start programming?',
        content: `I already did some basic Java programming (really basic stuff with if/else, loops etc) in 2014 but really started in 2016 (in school).
        A year later I started with web development.` },
    {
        heading: 'Any future plans?',
        content: `After my bachelor, which I should finish by 2025, I'd like to do my master's degree.
            I don't know in which specific field yet, but I'd like to continue in the field of Software Engineering,
            but something more specialized.` },
    {
        heading: 'Any favorite programming language(s)?',
        content: `Always depends on the project, but modern JS + TS is quite nice and the environment I'm most familiar with :)`
    },
    {
        heading: 'Where are you located?',
        content: `I grew up in Austria, but have been living in Gothenburg since August 2022 and I'm studying here.`
    },
    {
        heading: "I'd like to get in contact!",
        content: <>
            Just leave me a message on <a target='_blank' className='my-a' href='https://www.linkedin.com/in/koenig-michael/'>LinkedIn</a>, looking forward to hearing from you!
        </>
    },
]

export default () => {
    const [current, setCurrent] = useState()

    const onSetCurrent = (event, idx) => {
        if (event.target.tagName.toLowerCase() === 'a')
            return
        if (current === idx)
            setCurrent(undefined)
        else
            setCurrent(idx)
    }

    return (
        <Section heading={"Want to know more about me?"}>
            {faqItems.map((val, idx) => (
                <div key={idx} className='Faq__item' onClick={event => { onSetCurrent(event, idx) }}>
                    <div className='Faq__item-heading'>{val.heading}</div>
                    <div className={`Faq__item-content ${current !== idx ? 'Faq__item-content--hidden' : ''}`}>{val.content}</div>
                </div>))}
        </Section>
    )
}