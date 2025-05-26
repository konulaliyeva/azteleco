import Image from "next/image";
import "../style.css";

type ImagesType = {
  data: {
    src: string;
  }[];
  onClick: (index: number) => void;
  onOpenFull?: (index: number) => void; 
};

const ImageGallery = ({ data, onClick, onOpenFull }: ImagesType) => {
    
  const handleClickImage = (index: number, isOverlay?: boolean) => {
    if (isOverlay && onOpenFull) {
      onOpenFull(index); 
    } else {
      onClick(index);
    }
  };

  const displayedImages = data.length > 8 ? data.slice(0, 8) : data;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(8.5rem,8.5rem))] gap-x-[1px] mt-2">
      {displayedImages.map((slide, index) => (
        <div
          key={index}
          onClick={() => handleClickImage(index)}
          className="relative overflow-hidden rounded-md gallery-item w-[128px] h-20"
        >
          <Image
            src={slide.src}
            alt="Image Gallery"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
          {index === 7 && data.length > 7 && (
            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-14px500 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(); 
                handleClickImage(index, true);
              }}
            >
              +{data.length - 7} şəkil
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
