const social = [
  { name: "LinkedIn", iconClass: "linkedin", link: "https://mkoe.io/linkedin" },
  { name: "GitHub", iconClass: "github", link: "https://mkoe.io/github" },
  {
    name: "Instagram",
    iconClass: "instagram",
    link: "https://mkoe.io/instagram"
  }
]

export default () => (
  <div className="Header">
    <div className="Header__content">
      <div className="flex flex-col">
        <h1 className="inline-block my-text-black text-5xl leading-none font-semibold">
          michael koenig
        </h1>
        <h2 className="inline-block text-gray-700 text-2xl">// koenigscode</h2>
        <div className=" text-3xl mt-2">
          {social.map((val, idx) => (
            <a
              key={idx}
              className="mr-4"
              aria-label={val.name}
              href={val.link}
              target="_blank"
              rel="noopener"
            >
              <span className={`icon-${val.iconClass}`}></span>
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="Header__bg"></div>
  </div>
)
