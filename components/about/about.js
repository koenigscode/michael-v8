const aboutEntries = [
  {
    title: "Hi!",
    content: (
      <p>
        I'm Michael, 17 years old and currently attending the department for
        informatics at the{" "}
        <a className="my-a" target="_blank" href="https://htlstp.ac.at/">
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
        modern JS frameworks (React/Next, Vue), autonomous flying with drones
        (Python) + other projects.
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
      <h2 className="my-section-heading">// about me</h2>
      <div className="About__grid">
        {aboutEntries.map((entry, idx) => {
          return (
            <div key={idx}>
              <h3 className="text-2xl font-semibold mb-4">{entry.title}</h3>
              <div className="text-justify">{entry.content}</div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)
