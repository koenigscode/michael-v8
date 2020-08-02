const projects = [
  {
    type: "programming",
    date: "2020",
    name: "Personal Website",
    img: "images/header.png",
    text: `My personal website built with Next.js (React) and tailwindcss. You're on it right now ;)`,
    links: [
      { text: "Visit", href: "" },
      { text: "Source Code", href: "https://github.com/koenigscode/michael-v8" }
    ],
    tags: ["React", "Next.js", "tailwindcss"]
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
        href: "https://pria.at/en/ecer/"
      },
      {
        text: "Team vision",
        href: "https://atria.or.at/team-vision/"
      }
    ],
    tags: ["Python", "ROS", "OpenCV"]
  },
  {
    type: "Programming",
    date: "2019",
    name: "collectIT - School Open Days",
    img: "images/collectit.jpg",
    text: `Six students of the HTL St. Pölten - including me - decided to make a web app for our school's open days and it was well-received.
    Guests could go around from booth to booth and were awarded points for doing so.
    I was responsible for the frontend (React) the guests would interact with.`,
    links: [],
    tags: ["React", "Express"]
  },
  {
    type: "writing",
    date: "2019",
    name: "Introduction to Python",
    img: "images/python.png",
    text: `Back in April 2019 I held a short 2h30m talk about Python to interested students at my school.
    The introduction was well received and therefore I decided to write a short introduction about the language,
    teaching its basics.`,
    links: [
      {
        text: "Introduction to Python",
        href:
          "https://python.mkoe.io"
      },
      {
        text: "Source Code",
        href: "https://github.com/koenigscode/introduction-to-python"
      }
    ],
    tags: ["Python"]
  },
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
        href: "https://www.first-lego-league.org/"
      },
      {
        text: "Team vision",
        href: "https://atria.or.at/team-vision/"
      }
    ],
    tags: ["Java", "Robotics"]
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
        href: "https://mkoe.io/ows"
      },
      {
        text: "Source Code",
        href: "https://github.com/jugend-hackt-weather-station"
      }
    ],
    tags: ["Vue.js", "Express"]
  }
]

import Section from "../section/section"

export default () => (
  <Section heading="my work">
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, idx) => (
        <div key={idx}>
          <div className="Work__project">
            <div className="text-md italic my-text-primary font-semibold lowercase">
              > {project.type} | {project.date}
            </div>
            <div className="text-xl font-semibold mb-2">{project.name}</div>
            <div className="mb-2 text-justify">{project.text}</div>
            <div className="mb-4">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="mr-2 uppercase font-bold text-sm">
                  #{tag}
                </span>
              ))}
            </div>
            <div>
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className="my-a mr-2"
                >
                  {link.text}
                </a>
              ))}
            </div>
            <style jsx>{`
                .Work__project-bg {
                    background-image: url("${project.img}");
                }
            `}</style>
            <div className="overflow-hidden absolute left-0 right-0 block w-full h-full -z-10">
              <div className="Work__project-bg"></div>
            </div>
            <div className="Work__project-bg Work__project-bg--blur -z-20"></div>
          </div>
        </div>
      ))}
    </div>
  </Section>
)
