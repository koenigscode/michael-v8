import Section from 'components/common/section/section'
import { aboutEntries } from './data'

export default () => (
    <Section dark heading='About Me'>
        <div className='About__grid'>
            {aboutEntries.map((entry, idx) => {
                return (
                    <div key={idx}>
                        <h3 className='text-2xl font-semibold mb-4'>{entry.title}</h3>
                        <div className='text-justify'>{entry.content}</div>
                    </div>
                )
            })}
        </div>
    </Section>
)
