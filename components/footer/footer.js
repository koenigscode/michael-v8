import Link from "next/link"
import Section from "../section/section"

export default () => (
  <Section small>
    <div className="Footer">
      <Link href="/imprint">
        <a className="my-a mr-4">Imprint</a>
      </Link>
      <a href="mailto:mail@mkoe.io" className="my-a">
        Contact Me
      </a>
    </div>
  </Section>
)
