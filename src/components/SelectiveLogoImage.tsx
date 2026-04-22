import { useEffect, useRef } from "react";

type SelectiveLogoImageProps = {
  src: string;
  className?: string;
  alt: string;
};

export const SelectiveLogoImage = ({
  src,
  className,
  alt,
}: SelectiveLogoImageProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.src = src;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = frame.data;

      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const a = pixels[i + 3];

        if (a === 0) continue;

        // Convert near-black text pixels to white, keep colored parts unchanged.
        if (r < 55 && g < 55 && b < 55) {
          pixels[i] = 255;
          pixels[i + 1] = 255;
          pixels[i + 2] = 255;
        }
      }

      ctx.putImageData(frame, 0, 0);
    };
  }, [src]);

  return <canvas ref={canvasRef} className={className} aria-label={alt} />;
};
