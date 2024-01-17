import Image from "next/image";

type IconInfo = {
  title: string;
  icon: string;
};

type ImageBannerProps = {
  imageList: IconInfo[];
  speed?: number;
};

export function ImageBanner({ imageList, speed = 5000 }: ImageBannerProps) {
const scrollSpeed: Record<string, string> & React.CSSProperties = {
    "--time": "20s",
  };

  return (
    <div className="img-banner-scroll imgBox" style={scrollSpeed}>
      <div>
        {imageList.map((image, index) => (
          <Image
            key={index}
            src={image.icon}
            alt={image.title}
            width={50}
            height={50}
            className="select-none p-2"
          />
        ))}
      </div>
      <div>
        {imageList.map((image, index) => (
          <Image
            key={index}
            src={image.icon}
            alt={image.title}
            width={50}
            height={50}
            className="select-none p-2"
          />
        ))}
      </div>
    </div>
  );
}
