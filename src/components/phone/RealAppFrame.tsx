"use client";

import Image from "next/image";

const SOURCE_W = 760;
const SOURCE_H = 1652;

interface Props {
  src: string;
  alt: string;
  width?: number;
  className?: string;
}

export default function RealAppFrame({
  src,
  alt,
  width = 320,
  className = "",
}: Props) {
  const height = Math.round((width * SOURCE_H) / SOURCE_W);
  return (
    <div
      className={`relative overflow-hidden rounded-[2.5rem] bg-black p-1.5 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.55)] ring-1 ring-black/10 ${className}`}
      style={{ width: width + 12 }}
    >
      <div
        className="overflow-hidden rounded-[2rem] bg-white"
        style={{ width, height }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover"
          priority={false}
        />
      </div>
    </div>
  );
}
