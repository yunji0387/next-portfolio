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
//   const scrollStyle: Record<string, string> & React.CSSProperties = {
//     "--speed": `${speed}ms`,
//   };

// const scrollStyle: Record<string, string> & React.CSSProperties = {
//     "--speed": `${speed}ms`,
//   };

const scrollStyle: Record<string, string> & React.CSSProperties = {
    "--time": "25s",
  };

  return (
    <div className="img-banner-scroll imgBox" style={scrollStyle}>
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

  //   return (
  //     <div className="flex flex-row items-center justify-center w-full">
  //       <div className="relative overflow-hidden h-24 md:h-24 w-full text-sm md:text-base lg:text-lg">
  //         <div className="absolute flex items-center justify-center w-full">
  //           <div className="scroll-section w-fit" style={scrollStyle}>
  //             {imageList.map((image, index) => (
  //               <Image
  //                 key={index}
  //                 src={image.icon}
  //                 alt={image.title}
  //                 width={50}
  //                 height={50}
  //                 className="select-none p-2 bg-pink-500"
  //               />
  //             ))}
  //           </div>
  //           <div className="scroll-section w-fit" style={scrollStyle}>
  //             {imageList.map((image, index) => (
  //               <Image
  //                 key={index}
  //                 src={image.icon}
  //                 alt={image.title}
  //                 width={50}
  //                 height={50}
  //                 className="select-none p-2 bg-cyan-500"
  //               />
  //             ))}
  //           </div>
  //           <div className="scroll-section w-fit" style={scrollStyle}>
  //             {imageList.map((image, index) => (
  //               <Image
  //                 key={index}
  //                 src={image.icon}
  //                 alt={image.title}
  //                 width={50}
  //                 height={50}
  //                 className="select-none p-2 bg-yellow-500"
  //               />
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
}
