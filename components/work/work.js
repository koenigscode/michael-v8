const projects = [
  {
    type: "Programming",
    name: "Personal Website",
    img: "images/header.png",
    text: `My personal website built with Next.js`,
    tags: ["React", "Next.js", "tailwindcss"],
    links: [
      { text: "Visit", href: "" },
      { text: "Source Code", href: "https://github.com/koenigscode/michael-v8" }
    ]
  },
  {
    type: "Writing",
    name: "Introduction to Python",
    img: "images/python-introduction.png",
    text: `Back in April 2019 I held a short 2h30m talk about Python to interested students at my school.
    The introduction was well received and therefore I decided to write a short PDF about the language (~ 30 pages),
    teaching the basics of the language.`,
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
    ]
  },
  {
    type: "Programming Contest",
    name: "First Lego League City Shaper",
    img:
      "https://images.unsplash.com/photo-1584822637328-52c834e23a42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    text: `Back in April 2019 I held a short 2h30m talk about Python to interested students at my school.
    The introduction was well received and therefore I decided to write a short PDF about the language (~ 30 pages),
    teaching the basics of the language.`,
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
    ]
  }
]

export default () => (
  <div className="Work">
    <div className="Work__content">
      <h2 className="my-section-heading">// my work</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
          <div key={idx}>
            <style jsx>{`
                .Work__project {
                  background-image: linear-gradient(
                      to bottom right,
                      rgba(0, 0, 0, 0.6),
                      rgba(0, 0, 0, 0.7)
                    ),
                    url("${project.img}");
                    background-position: center;
                }
              `}</style>

            <div className="Work__project">
              <div className="text-md italic my-text-primary font-semibold -mb-1">
                > {project.type}
              </div>
              <div className="leading-tight text-xl font-semibold mb-2">
                {project.name}
              </div>
              <div className="leading-tight mb-2">{project.text}</div>
              <div>
                {project.links.map((link, idx) => (
                  <a key={idx} href={link.href} className="my-a mr-2">
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)
