import Image from "next/image";
import Link from "next/link";
import { ImageType } from "@/app/[locale]/types/Image";

type SliderProps = {
  images: ImageType[];
};

export const Slider = ({ images }: SliderProps) => {
  return (
    <div className="w-9/10 mx-auto h-full mt-6 relative overflow-hidden">
      <div className="w-full h-full py-2 flex justify-between items-center animation-slider pause-animation-on-hover">
        {images.map((image, index) => (
          <Link
            key={index}
            href={image.url}
            target="_blank"
            rel="noopener noreferrer"
            className="drop-shadow-on-hover"
          >
            <Image
              src={image.src}
              height={60}
              width={60}
              alt={image.alt}
              className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] group-hover:opacity-75 transition-opacity duration-300"
              loading="lazy"
            />
          </Link>
        ))}
      </div>

      <div
        className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-white to-transparent"
        style={{ pointerEvents: "none" }}
      ></div>
      <div
        className="absolute top-0 right-0 h-full w-1/4 bg-gradient-to-l from-white to-transparent"
        style={{ pointerEvents: "none" }}
      ></div>
    </div>
  );
};
