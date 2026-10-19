// src/components/Carousel.jsx
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Horizontal scroller with working prev/next buttons that:
 * - measure the real card width + gap (no global querySelector)
 * - disable themselves at the ends
 * - react to resize / content changes
 */
export default function Carousel({
    title,
    children,
    className = "",
    trackClassName = "",
}) {
    const trackRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const update = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        setAtStart(el.scrollLeft <= 4);
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    }, []);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        update();
        el.addEventListener("scroll", update, { passive: true });

        const ro = new ResizeObserver(update);
        ro.observe(el);

        return () => {
            el.removeEventListener("scroll", update);
            ro.disconnect();
        };
    }, [update]);

    const scrollBy = (direction) => {
        const el = trackRef.current;
        if (!el) return;

        const first = el.firstElementChild;
        const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
        const amount = first
            ? first.getBoundingClientRect().width + gap
            : el.clientWidth * 0.85;

        el.scrollBy({ left: direction * amount, behavior: "smooth" });
    };

    return (
        <section className={`section ${className}`.trim()}>
            <div className="header">
                <h2 className="division">{title}</h2>
                <div className="buttons">
                    <button
                        type="button"
                        className="scroll-btn"
                        onClick={() => scrollBy(-1)}
                        disabled={atStart}
                        aria-label={`Scroll ${title} left`}
                    >
                        ◀
                    </button>
                    <button
                        type="button"
                        className="scroll-btn"
                        onClick={() => scrollBy(1)}
                        disabled={atEnd}
                        aria-label={`Scroll ${title} right`}
                    >
                        ▶
                    </button>
                </div>
            </div>

            <div className={`track ${trackClassName}`.trim()} ref={trackRef}>
                {children}
            </div>
        </section>
    );
}