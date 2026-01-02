export type PlayerProps = {
    src: string;
    mimeType?: string;
    muted?: boolean;
    controls?: boolean;
    onEnded?: () => void;
} 