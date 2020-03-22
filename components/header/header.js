export default () => (
  <div className="Header">
    <div className="Header__content">
      <div className="flex flex-col">
        <h1 className="inline-block my-text-black text-5xl leading-none font-semibold">
          michael koenig
        </h1>
        <h2 className="inline-block text-gray-700 text-2xl">// koenigscode</h2>
        <div className=" text-3xl mt-2">
          <a className="mr-4" href="https://mkoe.io/linkedin" target="_blank">
            <span className="icon-linkedin"></span>
          </a>
          <a className="mr-4" href="https://mkoe.io/github" target="_blank">
            <span className="icon-github"></span>
          </a>
          <a className="mr-4" href="https://mkoe.io/instagram" target="_blank">
            <span className="icon-instagram"></span>
          </a>
        </div>
      </div>
    </div>
    <div className="Header__bg"></div>
  </div>
)
