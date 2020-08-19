interface Skill {
  name: string
  link?: string
  iconClass: string
  text: React.ReactNode
}

const skills: Skill[] = [
  {
    name: 'Next.js',
    link: 'https://nextjs.org/',
    iconClass: 'next-dot-js',
    text: `Next.js is a framework and static site generator for React. This website is built with it :)`,
  },
  {
    name: 'React',
    link: 'https://reactjs.org/',
    iconClass: 'react',
    text: `After using Vue.js for quite a while I decided to learn React and have been using it ever since.`,
  },
  {
    name: 'Vue.js',
    link: 'https://vuejs.org/',
    iconClass: 'vue-dot-js',
    text: `Vue.js was the first JS framework I've learnt and I still love its readability and simplicity.`,
  },
  {
    name: 'Javascript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    iconClass: 'javascript',
    text: `I'm using JS both on the client and server-side and I'm familiar with modern ES features like async/await.`,
  },
  {
    name: 'Python',
    link: 'https://www.python.org/',
    iconClass: 'python',
    text: `I'm using Python for different purposes: automation scripts, web servers, computer vision, ...`,
  },
  {
    name: 'tailwindcss',
    link: 'https://tailwindcss.com/',
    iconClass: 'tailwindcss',
    text: `tailwind is a css utility library and managed to boost my producity a lot - especially in combination with postcss.`,
  },
]

interface OtherSkill {
    name: string
    link?: string
    iconClass: string
}

const otherSkills = [
  {
    name: 'Java',
    link: 'https://www.java.com/',
    iconClass: 'java',
  },
  {
    name: 'Docker',
    link: 'https://www.docker.com/',
    iconClass: 'docker',
  },
  { name: 'Flutter', link: 'https://flutter.dev/', iconClass: 'flutter' },
  { name: 'Linux', iconClass: 'tux' },
  { name: 'Node.js', link: 'https://nodejs.org/', iconClass: 'node-dot-js' },
  { name: 'Git', link: 'https://git-scm.com/', iconClass: 'git' },
  //   { name: "Rust", link: "https://www.rust-lang.org/", iconClass: "rust" }
]

import Section from '../section/section'

export default () => (
  <Section dark heading="i'm using">
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
