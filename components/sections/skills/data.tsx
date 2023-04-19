export interface Skill {
    name: string
    link?: string
    iconClass: string
    text: React.ReactNode
}

export const skills: Skill[] = [
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
        text: `After learning Vue.js I decided to learn React and have been using it ever since. I have some experience with React Native as well.`,
    },
    {
        name: 'Javascript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        iconClass: 'javascript',
        text: `I'm using JS both on the client and server-side and I'm familiar with modern ES features (ES6+).`,
    },
    {
        name: 'Python',
        link: 'https://www.python.org/',
        iconClass: 'python',
        text: `I'm using Python for different purposes: scripts, web servers, computer vision, ...`,
    },

]

export interface OtherSkill {
    name: string
    link?: string
    iconClass: string
}

export const otherSkills = [
    {
        name: 'Vue.js',
        link: 'https://vuejs.org/',
        iconClass: 'vue-dot-js',
    },
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