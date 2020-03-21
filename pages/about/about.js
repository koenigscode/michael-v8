const aboutEntries = [
  {
    title: "Hi!",
    content: (
      <p>
        I'm Michael, 17 years old and currently attending the department for
        Informatics at the{" "}
        <a className="my-a" href="https://htlstp.ac.at/">
          HTL St. Pölten
        </a>{" "}
        with focus on Java, relational database design, network engineering and
        project management.
      </p>
    )
  },
  {
    title: "Programming",
    content: (
      <p>
        Besides school I program a lot in my free time: web development with
        modern js frameworks (react/next, vue), autonomous flying with drones
        (python) + other projects.
      </p>
    )
  },
  {
    title: "Creative",
    content: (
      <p>
        I've been using Photoshop for several years now and enjoy editing photos
        I've taken. I've also got some experience with Premiere Pro for editing
        videos.
      </p>
    )
  }
]

export default () => (
  <div className="About">
    <div className="About__content">
      <h2 className="inline-block text-3xl font-semibold">// about me</h2>
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
        {aboutEntries.map((entry, idx) => {
          return (
            <div key={idx} className="my-8 max-w-xs lg:mx-4 lg:w-1/3">
              <h3 className="text-2xl font-semibold mb-4">{entry.title}</h3>
              <div className="text-justify">{entry.content}</div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)
