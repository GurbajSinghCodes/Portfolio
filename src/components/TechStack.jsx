import Reveal from "./Reveal.jsx";

const TECH = [
    // Languages & Frontend
    { name: "HTML", src: "technologies/html.png", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", src: "technologies/css.png", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", src: "technologies/js.png", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React", src: "technologies/react.jpg", href: "https://react.dev/learn" },

    // Backend
    { name: "Node.js", src: "technologies/node.jpg", href: "https://nodejs.org/docs/latest/api/" },
    { name: "Express", src: "technologies/express.jpg", href: "https://expressjs.com/" },

    // Databases
    { name: "MongoDB", src: "technologies/mongodb.jpg", href: "https://www.mongodb.com/docs/" },
    { name: "SQL", src: "technologies/sql.jpg", href: "https://developer.mozilla.org/en-US/docs/Glossary/SQL" },

    // Version Control
    { name: "Git", src: "technologies/git.png", href: "https://git-scm.com/doc" },
    { name: "GitHub", src: "technologies/github.png", href: "https://docs.github.com" },

    // Deploy & Hosting
    { name: "Vercel", src: "technologies/vercel.png", href: "https://vercel.com/docs" },
    { name: "Render", src: "technologies/render.png", href: "https://render.com/docs" },

    // Domain & DNS
    { name: "Domain & DNS", src: "technologies/dns.png", href: "https://www.cloudflare.com/learning/dns/what-is-dns/" },

    // Tooling
    { name: "VS Code", src: "technologies/vscode.png", href: "https://code.visualstudio.com/docs" },
    { name: "Canva", src: "technologies/canva.jpg", href: "https://canva.com/" },
];

export default function TechStack() {
    return (
        <section id="tech" className="section">
            <div className="section__inner">
                <Reveal as="header" className="section__head">
                    <span className="eyebrow">/ 01 — Tech I work with</span>
                    <h2 className="section__title">My toolbox</h2>
                </Reveal>

                <div className="tech__wall">
                    {TECH.map((t, i) => (
                        <Reveal
                            key={t.name}
                            as="a"
                            className="tech__chip"
                            href={t.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t.name}
                            title={t.name}
                            delay={(i % 10) * 35}
                        >
                            <img src={t.src} alt={t.name} loading="lazy" decoding="async" />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}