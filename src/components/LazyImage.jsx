// src/components/LazyImage.jsx
import { useState } from "react";

/**
 * Native lazy-loaded image with a shimmer skeleton and zero layout shift.
 * - Only images near the viewport are downloaded
 * - width/height reserves space (no CLS)
 * - fades in when decoded
 */
export default function LazyImage({
    src,
    alt = "",
    width,
    height,
    className = "",
    eager = false,
    fit = "cover",
    srcSet,
    sizes,
}) {
    const [loaded, setLoaded] = useState(false);

    return (
        <span
            className={`lazy-img ${loaded ? "is-loaded" : ""} ${className}`.trim()}
            style={width && height ? { aspectRatio: `${width} / ${height}` } : undefined}
        >
            <img
                src={src}
                srcSet={srcSet}
                sizes={sizes}
                alt={alt}
                width={width}
                height={height}
                loading={eager ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={eager ? "high" : "low"}
                draggable={false}
                style={{ objectFit: fit }}
                onLoad={() => setLoaded(true)}
                onError={() => setLoaded(true)}
            />
        </span>
    );
}