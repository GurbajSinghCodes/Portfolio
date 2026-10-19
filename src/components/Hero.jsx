// src/components/Hero.jsx
import LazyImage from "./LazyImage.jsx";
import Reveal from "./Reveal.jsx";

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero__glow hero__glow--a" aria-hidden="true" />
            <div className="hero__glow hero__glow--b" aria-hidden="true" />

            <div className="hero__inner">
                <div className="hero__copy">
                    <Reveal as="span" className="hero__badge">
                        <span className="hero__pulse" />
                        Available for work
                    </Reveal>

                    <Reveal as="h1" className="hero__title" delay={80}>
                        Gurbaj Singh.
                        <br />
                        <span className="hero__title-dim">
                            I build things for the web.
                        </span>
                    </Reveal>

                    <Reveal as="p" className="hero__sub" delay={160}>
                        B.Tech CS student, full-stack developer, and lifelong tinkerer.
                        I like turning messy problems into clean, fast interfaces.
                    </Reveal>

                    <Reveal as="div" className="hero__actions" delay={240}>
                        <a href="#work" className="btn btn--primary">
                            View my work <span aria-hidden="true">→</span>
                        </a>
                        <a href="#contact" className="btn btn--ghost">
                            Get in touch
                        </a>
                    </Reveal>
                </div>

                <Reveal className="hero__portrait" delay={200}>
                    <LazyImage
                        src="Gurbaj.jpg"
                        alt="Portrait of Gurbaj Singh"
                        width={420}
                        height={420}
                        eager
                        fit="cover"
                    />
                </Reveal>
            </div>
        </section>
    );
}