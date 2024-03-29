export interface ProjectLink {
    text: string
    href: string
}

export interface Project {
    type: string
    date: string
    name: string
    img: string
    text: React.ReactNode
    links: ProjectLink[]
    tags: Array<string>
}

export const projects: Project[] = [
    {
        type: "university project",
        date: "2023",
        name: "Plant Stein",
        img: "images/plant-stein.jpg",
        text: `Plant Stein is a plant surveillance system that monitors temperature, humidity, brightness and soil moisture of your plants and notifies you when the plant isn't happy.`,
        links: [
            {
                text: "Presentation Video",
                href: "https://youtu.be/81Tw_L5ifvU",
            }
        ],
        tags: ["Flutter", "Spring Boot", "Microcontroller"],
    },
    {
        type: "school diploma thesis project",
        date: "2020-2021",
        name: "Novellin",
        img: "images/novellin.png",
        text: `My school colleagues and I developed a prototype for a platform with social media features used to publish books. This was our diploma thesis project and I was primarily working on the frontend.`,
        links: [],
        tags: ["React Native", "Redux"],
    },
    {
        type: "school diploma thesis",
        date: "2020-2021",
        name: "Diploma Thesis: Cross-Platform App Development",
        img: "images/novellin.png",
        text: `My diploma thesis for school was about technologies used to develop mobile, desktop and web apps from one codebase.`,
        links: [],
        tags: ["React Native", "Flutter", "Ionic"],
    },
    {
        type: "web dev",
        date: "2020",
        name: "Personal Website",
        img: "images/header.jpg",
        text: `My personal website built with Next.js (React) and tailwindcss. You're on it right now ;)`,
        links: [
            {
                text: "Source Code",
                href: "https://github.com/koenigscode/michael-v8",
            },
        ],
        tags: ["React", "Next.js", "tailwindcss"],
    },
    {
        type: "autonomous drone flying",
        date: "2020",
        name: "ECER 2020",
        img: "images/ecer.png",
        text: `We - team vision from ATRIA - were preparing for the ECER 2020 (European Conference on Educational Robotics) in Bratislava.
    Sadly, due to COVID-19, the event couldn't take place as planned, but we still learnt a lot about ROS (Robot Operating System) and OpenCV to fly drones autonomously.`,
        links: [
            {
                text: "PRIA ECER",
                href: "https://pria.at/en/ecer/",
            },
            {
                text: "Team vision",
                href: "https://atria.or.at/team-vision/",
            },
        ],
        tags: ["Python", "ROS", "OpenCV"],
    },
    {
        type: "Programming",
        date: "2019",
        name: "collectIT - School Open Days",
        img: "images/collectit.jpg",
        text: `Six students of the HTL St. Pölten - including me - decided to make a web app for our school's open days and it was well-received.
    Guests could go around from booth to booth and were awarded points for doing so.
    I was responsible for the frontend (React) the visitors interacted with.`,
        links: [],
        tags: ["React", "Express"],
    },
    // {
    //     type: "writing",
    //     date: "2020-2021",
    //     name: "Introduction to React.js",
    //     img: "images/react.png",
    //     text: `I wrote a short and opinionated introduction to React.js that teaches its basics, as well as some modern JS and Next.js`,
    //     links: [
    //         {
    //             text: "Introduction to React",
    //             href: "https://react.mkoe.io",
    //         },
    //         {
    //             text: "Source Code",
    //             href: "https://github.com/introduction-to-react/introduction-to-react",
    //         },
    //     ],
    //     tags: ["React.js", "Next.js"],
    // },
    // {
    //     type: "writing",
    //     date: "2019",
    //     name: "Introduction to Python",
    //     img: "images/python.png",
    //     text: `Back in April 2019 I held a short 2½-hour long talk about Python for interested students at my school.
    // The introduction was well received and therefore I decided to write a short introduction about the language,
    // teaching its basics.`,
    //     links: [
    //         {
    //             text: "Introduction to Python",
    //             href: "https://python.mkoe.io",
    //         },
    //         {
    //             text: "Source Code",
    //             href: "https://github.com/koenigscode/introduction-to-python",
    //         },
    //     ],
    //     tags: ["Python"],
    // },
    {
        type: "robotics contest",
        date: "2019-2020",
        name: "First Lego League City Shaper",
        img: "images/fll.jpg",
        text: `After months of preparation we - team vision from ATRIA - managed to become 1st place in Robot Design and 3rd place overall at the regional tournament,
    qualifying us for the nation-wide tournament, where we became 1st place in Robot Design and 6th place overall.`,
        links: [
            {
                text: "First Lego League",
                href: "https://www.first-lego-league.org/",
            },
            {
                text: "Team vision",
                href: "https://atria.or.at/team-vision/",
            },
        ],
        tags: ["Java", "Robotics"],
    },

    {
        type: "hackathon project",
        date: "2019",
        name: "Open Weather Station - Jugend Hackt 2019, Linz",
        img: "images/ows.jpg",
        text: `After coding for one and a half day we had a working weather station prototype
    that could measure various environmental data.
    The data was then sent to a backend and displayed in a web-frontend.`,
        links: [
            {
                text: "Final Presentation",
                href: "https://jugendhackt.org/video/open-weather-station/",
            },
            {
                text: "Source Code",
                href: "https://github.com/jugend-hackt-weather-station",
            },
        ],
        tags: ["Vue.js", "Express"],
    },
]