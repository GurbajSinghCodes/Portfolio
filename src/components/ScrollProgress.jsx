// src/components/ScrollProgress.jsx
import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [p, setP] = useState(0);

    useEffect(() => {
        const update = () => {
            const h = document.documentElement;
            const max = h.scrollHeight - h.clientHeight;
            setP(max > 0 ? h.scrollTop / max : 0);
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <div
            className="progress"
            style={{ transform: `scaleX(${p})` }}
            aria-hidden="true"
        />
    );
}