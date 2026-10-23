// src/components/Contact.jsx
import {
    Mail,
    Github,
    Linkedin,
    Instagram,
    ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal.jsx";

const CONTACTS = [
    { label: "Mail", href: "mailto:gurbajsingh098@gmail.com", Icon: Mail },
    { label: "GitHub", href: "https://github.com/gurbajsinghcodes", Icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/in/gurbaj-singh-5a09482a6", Icon: Linkedin },
    { label: "Instagram", href: "https://instagram.com/gurbaj_khaira", Icon: Instagram },
];

export default function Contact() {
    return (
        <section id="contact" className="section contact">
            <div className="section__inner">
                <Reveal as="span" className="eyebrow">/ 03 — Contact</Reveal>
                <Reveal as="h2" className="contact__title" delay={80}>
                    Let's build something
                    <br />
                    worth shipping.
                </Reveal>
                <Reveal as="p" className="contact__sub" delay={140}>
                    Got a project, an idea, or just want to talk shop? My inbox is open.
                </Reveal>

                <Reveal
                    as="a"
                    className="btn btn--primary btn--lg"
                    href="mailto:gurbajsingh098@gmail.com"
                    delay={200}
                >
                    gurbajsingh098@gmail.com
                    <ArrowUpRight size={18} aria-hidden="true" />
                </Reveal>

                <Reveal as="div" className="contact__links" delay={280}>
                    {CONTACTS.map(({ label, href, Icon }) => {
                        const ext = href.startsWith("http");
                        return (
                            <a
                                key={label}
                                className="contact__link"
                                href={href}
                                {...(ext
                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                    : {})}
                            >
                                <Icon size={18} aria-hidden="true" />
                                {label}
                            </a>
                        );
                    })}
                </Reveal>


            </div>
        </section>
    );
}