import Head from "next/head"

const Index = () => (
  <div className="Index">
    <Head>
      <title>Michael König</title>
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Code:300,400,500,600,700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <div className="flex h-screen">
      <div className="flex flex-col justify-center items-center w-3/5 h-full">
        <div className="flex flex-col">
          <h1 className="inline-block text-gray-900 text-5xl leading-none font-semibold">
            michael koenig
          </h1>
          <h2 className="inline-block text-gray-700 text-2xl">
            // koenigscode
          </h2>
          <div className="text-3xl mt-2">
            <a className="mr-4" href="https://mkoe.io/linkedin" target="_blank">
              <span className="icon-linkedin"></span>
            </a>
            <a className="mr-4" href="https://mkoe.io/github" target="_blank">
              <span className="icon-github"></span>
            </a>
            <a
              className="mr-4"
              href="https://mkoe.io/instagram"
              target="_blank"
            >
              <span className="icon-instagram"></span>
            </a>
          </div>
        </div>
      </div>
      <div className="Index__bg w-2/5 h-full"></div>
    </div>
  </div>
)

export default Index
