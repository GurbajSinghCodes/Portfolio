// src/components/Projects.jsx
import { projects } from "../projects.js";
import LazyImage from "./LazyImage.jsx";
import Reveal from "./Reveal.jsx";

export default function Projects() {
    return (
        <section id="work" className="section">
            <div className="section__inner">
                <Reveal as="header" className="section__head">
                    <span className="eyebrow">/ 02 — Selected work</span>
                    <h2 className="section__title">Things I've built</h2>
                </Reveal>

                <div className="work__grid">
                    {projects.map((p, i) => (
                        <Reveal
                            key={p.id}
                            as="article"
                            className={`work__card ${i === 0 ? "work__card--wide" : ""}`}
                            delay={i * 80}
                        >
                            <a
                                className="work__media"
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${p.heading}`}
                            >
                                <LazyImage
                                    src={p.image}
                                    alt={`${p.heading} preview`}
                                    width={p.width}
                                    height={p.height}
                                    sizes="(max-width: 720px) 100vw, 50vw"
                                />
                                <span className="work__index">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="work__overlay">
                                    Open live <span aria-hidden="true">↗</span>
                                </span>
                            </a>

                            <div className="work__body">
                                <h3 className="work__title">{p.heading}</h3>
                                <p className="work__desc">{p.text}</p>
                                <div className="work__links">
                                    <a
                                        className="work__link"
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live site <span aria-hidden="true">↗</span>
                                    </a>
                                    <a
                                        className="work__link work__link--muted"
                                        href={`https://www.github.com/GurbajSinghCodes/${p.github}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Source
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}