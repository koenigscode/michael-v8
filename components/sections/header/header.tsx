import { socialItems } from './data'

export default () => (
    <div className='Header'>
        <div className='Header__content'>
            <div className='flex flex-col'>
                <h1 className='inline-block my-text-black text-5xl leading-none font-semibold'>
                    Michael Koenig
                </h1>
                <h2 className='inline-block text-gray-700 text-2xl'>// @koenigscode</h2>
                <div className='text-3xl mt-4'>
                    {socialItems.map((val, idx) => (
                        <a
                            key={idx}
                            className='mr-4'
                            aria-label={val.name}
                            href={val.link}
                            target='_blank'
                            rel='noopener'
                        >
                            <span className={`icon-${val.iconClass}`}></span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
        <div className='Header__bg'></div>
    </div>
)
