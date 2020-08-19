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
        heading: 'Any favorite programming language(s)?',
        content: `Always depends on the project but modern JS + TS is quite nice :)` },
    {
        heading: 'Any movie / tv show recommendations?',
        content: <>
            Totally! My favorite movie is <a target='_blank' className='my-a' href='https://www.imdb.com/title/tt2798920/'>Annihilation</a> (sci-if / lovecraftian horror)
            and my favorite tv show is <a target='_blank' className='my-a' href='https://www.imdb.com/title/tt9561862/'>Love, Death & Robots</a> (animated anthology series with mind-blowing twists).
            If you're interested in which episodes are my favorites, you can also check out <a target='_blank' className='my-a' href='https://mkoe.io/ldr'>my episode ranking</a> :D
        </>
    },
    {
        heading: 'What kind of music do you listen to?',
        content: <>
            I've got a few <a target='_blank' className='my-a' href='https://mkoe.io/spotify'>public Spotify playlists</a> :)
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
        <Section heading={"some \"fun facts\" you probably didn't ask for :)"}>
            {faqItems.map((val, idx) => (
                <div key={idx} className='Faq__item' onClick={event => { onSetCurrent(event, idx) }}>
                    <div className='Faq__item-heading'>{val.heading}</div>
                    <div className={`Faq__item-content ${current !== idx ? 'Faq__item-content--hidden' : ''}`}>{val.content}</div>
                </div>))}
        </Section>
    )
}