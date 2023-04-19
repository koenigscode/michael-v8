import Section from 'components/common/section/section'
import { useState } from 'react'
import { faqItems } from './data'

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