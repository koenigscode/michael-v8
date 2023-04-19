import React from 'react'

const sectionPadding = '5rem'

interface SectionProps {
    small?: boolean
    dark?: boolean
    heading?: string
    children?: React.ReactNode
}

const Section: React.FC<SectionProps> = (props: SectionProps) => {
    const skewHeight = '50px'
    let paddingTop = `calc(${skewHeight} + ${sectionPadding});`
    let paddingBottom = paddingTop

    if (props.small) {
        paddingTop = skewHeight
        paddingBottom = `calc(${skewHeight}/2)`
    }

    return (
        <div>
            <style jsx>{`
            .Section {
              background-color: ${props.dark ? '#181818' : '#f6f8fa'};
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='10' height='10' fill='%23${props.dark ? '333333' : 'cccccc'
                }'/%3E%3C/svg%3E");

              color: ${props.dark ? '#f6f8fa' : '#181818'};
              margin-top: -${skewHeight};
              padding-top: ${paddingTop};
              padding-bottom: ${paddingBottom};
              clip-path: polygon(
                0% 0%,
                100% calc(${skewHeight} - 2px),
                100% 100%,
                0% 100%
              );
            }
          `}</style>
            <div className='Section'>
                <div className='Section__content'>
                    {props.heading && (
                        <h2 className='my-section-heading'>{props.heading}</h2>
                    )}
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Section
