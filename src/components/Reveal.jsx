// src/components/Reveal.jsx
import { useEffect, useState } from "react";
import useInView from "../hooks/useInView.js";

export default function Reveal({
    as: Tag = "div",
    delay = 0,
    className = "",
    children,
    ...rest
}) {
    const [ref, inView] = useInView();
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!inView) return;
        const t = setTimeout(() => setDone(true), 800 + delay);
        return () => clearTimeout(t);
    }, [inView, delay]);

    return (
        <Tag
            ref={ref}
            className={`reveal ${inView ? "is-visible" : ""} ${done ? "is-done" : ""
                } ${className}`.trim()}
            style={{ "--reveal-delay": `${delay}ms` }}
            {...rest}
        >
            {children}
        </Tag>
    );
}