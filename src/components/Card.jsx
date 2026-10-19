// src/components/Card.jsx
import { memo } from "react";
import Reveal from "./Reveal.jsx";
import LazyImage from "./LazyImage.jsx";

// Deterministic accent per card — no more colors flickering on every render.
const ACCENTS = [
    "#FFC300", "#FF9800", "#E91E63", "#FF5733", "#F06292", "#FF5252",
    "#00BCD4", "#33B5FF", "#9C27B0", "#3F51B5", "#7C4DFF", "#009688",
    "#4CAF50", "#8BC34A",
];

function Card({ project, index = 0 }) {
    const accent = ACCENTS[index % ACCENTS.length];

    return (
        <Reveal
            as="article"
            className="card"
            delay={Math.min(index, 3) * 80}
            aria-labelledby={`project-${project.id}`}
        >
            <div className="card__image">
                <LazyImage
                    src={project.image}
                    alt={`${project.heading} preview`}
                    width={project.width}
                    height={project.height}
                    sizes="(max-width: 480px) 240px, 300px"
                />
            </div>

            <h3 className="card__title" id={`project-${project.id}`}>
                {project.heading}
            </h3>

            <p className="card__info">{project.text}</p>

            <div className="cardbuttons">
                <a
                    className="cardbutton"
                    style={{ backgroundColor: accent }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Live
                </a>
                <a
                    className="cardbutton"
                    style={{ backgroundColor: accent }}
                    href={`https://www.github.com/GurbajSinghCodes/${project.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Git Repo
                </a>
            </div>
        </Reveal>
    );
}

export default memo(Card);