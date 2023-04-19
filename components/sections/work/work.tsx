import Section from 'components/common/section/section'
import { projects } from './data'

export default () => (
    <Section heading="My Work">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, idx) => (
                <div key={idx}>
                    <div className="Work__project">
                        <div className="text-md italic my-text-primary font-semibold lowercase">
                            {">"} {project.type} | {project.date}
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
