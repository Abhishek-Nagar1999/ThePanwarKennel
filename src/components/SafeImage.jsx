import { useState } from 'react';

const FALLBACK =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
      <rect fill="#f7f3ee" width="400" height="300"/>
      <text x="200" y="155" text-anchor="middle" font-size="48">🐾</text>
      <text x="200" y="190" text-anchor="middle" fill="#8b7355" font-family="sans-serif" font-size="14">Photo unavailable</text>
    </svg>`
  );

export default function SafeImage({ src, alt, className, width, height, loading, fetchPriority }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      onError={() => {
        if (imgSrc !== FALLBACK) setImgSrc(FALLBACK);
      }}
    />
  );
}
