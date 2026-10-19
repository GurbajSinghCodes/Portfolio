// src/components/Nav.jsx
import { useEffect, useState } from "react";

const LINKS = [
    { id: "hero", label: "Home" },
    { id: "tech", label: "Stack" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
        if (!sections.length) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );
        sections.forEach((s) => io.observe(s));
        return () => io.disconnect();
    }, []);

    return (
        <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
            <a href="#hero" className="nav__logo" aria-label="Home">
                <span className="nav__dot" />
                GS
            </a>

            <nav className="nav__links" aria-label="Primary">
                {LINKS.map((l) => (
                    <a
                        key={l.id}
                        href={`#${l.id}`}
                        className={`nav__link ${active === l.id ? "is-active" : ""}`}
                    >
                        {l.label}
                    </a>
                ))}
            </nav>

            <a className="nav__cta" href="mailto:gurbajsingh098@gmail.com">
                Say hi
            </a>
        </header>
    );
}