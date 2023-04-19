export interface AboutEntry {
    title: string
    content?: React.ReactNode
}



export const aboutEntries: AboutEntry[] = [
    {
        title: 'Hi!',
        content: (
            <p>
                I'm Michael, interested in Informatics and currently studying
                Software Engineering and Management (BSc) at the{' '}
                <a
                    className='my-a'
                    target='_blank'
                    rel='noopener'
                    href='https://www.gu.se/en/study-gothenburg/software-engineering-and-management-bachelors-programme-n1sof'
                >
                    University of Gothenburg
                </a>, since August 2022.
            </p>
        )
    },
    {
        title: 'Programming',
        content: (
            <p>
                Besides uni I program a lot in my free time: web development with
                modern JS frameworks (i.e. React/Next), autonomous flying of drones
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