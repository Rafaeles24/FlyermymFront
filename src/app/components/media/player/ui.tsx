"use client";

import { PlayerProps } from "@/app/types/player";
import { detectMediaKind } from "@/lib/media";
import { useMemo, useState } from "react";

export default function MediaPlayer({
    src,
    mimeType,
    muted = true,
    controls = true,
    onEnded
}: PlayerProps ) {
    const kind = useMemo(() => detectMediaKind(src, mimeType), [src, mimeType]);
    const [ error, setError ] = useState<string | null>(null);

    if (error) {
        return (
            <div>
                <strong>Error al cargar media HTTP 400</strong>
            </div>
        );
    }

    if (kind === "video") {
        return (
            <video
                src={src}
                autoPlay
                playsInline
                muted={muted}
                loop={true}
                controls={controls}
                onEnded={onEnded}
            />
        );
    }

    return (
        <img 
            src={src}
            alt=""
        />
    );
}