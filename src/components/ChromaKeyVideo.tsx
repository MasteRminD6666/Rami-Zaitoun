import { useEffect, useRef, useState } from "react";

type ChromaKeyVideoProps = {
  src: string;
  className?: string;
  backgroundHex?: string;
};

const hexToRgb = (hex: string) => {
  const value = hex.replace("#", "");
  const normalized =
    value.length === 3
      ? value
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : value;

  const int = Number.parseInt(normalized, 16);

  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  };
};

export const ChromaKeyVideo = ({
  src,
  className,
  backgroundHex = "#010103",
}: ChromaKeyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const [useFallbackVideo, setUseFallbackVideo] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const bg = hexToRgb(backgroundHex);

    const drawFrame = () => {
      if (video.readyState >= 2 && video.videoWidth > 0 && video.videoHeight > 0) {
        if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
        }

        try {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const pixels = frame.data;

          for (let i = 0; i < pixels.length; i += 4) {
            const r = pixels[i];
            const g = pixels[i + 1];
            const b = pixels[i + 2];

            // Remove near-white pixels and blend soft edges.
            if (r > 220 && g > 220 && b > 220) {
              pixels[i + 3] = 0;
              continue;
            }

            // Soften light edge halo to match the dark background.
            if (r > 175 && g > 175 && b > 175) {
              const edge = (r + g + b) / 3;
              const t = Math.min(1, Math.max(0, (edge - 175) / 45));
              pixels[i] = Math.round(r * (1 - t) + bg.r * t);
              pixels[i + 1] = Math.round(g * (1 - t) + bg.g * t);
              pixels[i + 2] = Math.round(b * (1 - t) + bg.b * t);
            }
          }

          ctx.putImageData(frame, 0, 0);
        } catch {
          // Cross-origin videos can block canvas pixel reads.
          setUseFallbackVideo(true);
          return;
        }
      }

      rafRef.current = window.requestAnimationFrame(drawFrame);
    };

    const start = async () => {
      try {
        await video.play();
      } catch {
        // Ignore autoplay rejection; browser may require user interaction.
      }
      drawFrame();
    };

    void start();

    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [backgroundHex, src]);

  if (useFallbackVideo) {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        className={className}
        src={src}
      />
    );
  }

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="hidden"
        src={src}
        crossOrigin="anonymous"
      />
      <canvas ref={canvasRef} className={className} />
    </>
  );
};
