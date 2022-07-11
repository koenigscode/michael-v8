interface AboutEntry {
    title: string
    content?: React.ReactNode
}

const birthday = new Date('2002-04-27')

function getAge() {
    var diff_ms = Date.now() - birthday.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const aboutEntries: AboutEntry[] = [
    {
        title: 'Hi!',
        content: (
            <p>
                I'm Michael, interested in Informatics and I'm going to study
                Software Engineering and Management (BSc) at the{' '}
                <a
                    className='my-a'
                    target='_blank'
                    rel='noopener'
                    href='https://www.gu.se/en/study-gothenburg/software-engineering-and-management-bachelors-programme-n1sof'
                >
                    University of Gothenburg
                </a>, starting in August 2022.
            </p>
        )
    },
    {
        title: 'Programming',
        content: (
            <p>
                Besides uni I program a lot in my free time: web development with
                modern JS frameworks (React/Next, Vue), autonomous flying of drones
                (Python) + other projects.
            </p>
        )
    },
    {
        title: 'Creative',
        content: (
            <p>
                I've been using Photoshop for several years now and enjoy editing photos
                I've taken. I've also got some experience with Premiere Pro for editing
                videos.
            </p>
        )
    }
]

import Section from '../../components/section/section'

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
