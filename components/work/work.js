const projects = [
  {
    type: "programming",
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
    type: "writing",
    name: "Introduction to Python",
    img: "images/python.png",
    text: `Back in April 2019 I held a short 2h30m talk about Python to interested students at my school.
    The introduction was well received and therefore I decided to write a short PDF about the language (~ 30 pages),
    teaching its basics.`,
    links: [
      {
        text: "Download",
        href:
          "https://github.com/koenigscode/python-introduction/releases/latest/download/python-introduction.pdf"
      },
      {
        text: "Source Code",
        href: "https://github.com/koenigscode/python-introduction"
      }
    ],
    tags: ["Python", "LaTeX"]
  },
  {
    type: "robotics contest",
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
    type: "autonomous drone flying contest",
    name: "ECER 2020",
    img: "images/ecer.png",
    text: `We - team vision from ATRIA - are currently preparing for the ECER (European Conference on Educational Robotics) in Bratislava this year.
    We're using ROS (Robot Operating System) and OpenCV to complete different missions autonomously.`,
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
    type: "hackathon project",
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

export default () => (
  <div className="Work">
    <div className="Work__content">
      <h2 className="my-section-heading">// my work</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
          <div key={idx}>
            <div className="Work__project">
              <div className="text-md italic my-text-primary font-semibold lowercase">
                > {project.type}
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
    </div>
  </div>
)
