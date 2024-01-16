type TextBannerProps = {
  textList: string[];
  speed?: number;
};

export function TextBanner({ textList, speed = 8000 }: TextBannerProps) {
  const scrollStyle: Record<string, string> & React.CSSProperties = {
    "--speed": `${speed}ms`,
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="bg-gray-700 border rounded-l-full h-6 md:h-8 w-[5%]"></div>
      <div className="relative overflow-hidden h-6 md:h-8 w-full md:w-[85%] lg:w-[50rem] text-sm md:text-base lg:text-lg">
        <div className="absolute flex whitespace-nowrap items-center justify-center">
          <section className="scroll-section" style={scrollStyle}>
            {textList.map((text, index) => (
              <p key={index} className="p-1 w-full">
                {text}
              </p>
            ))}
          </section>
          <section className="scroll-section" style={scrollStyle}>
            {textList.map((text, index) => (
              <p key={index} className="p-1 w-full">
                {text}
              </p>
            ))}
          </section>
          <section className="scroll-section" style={scrollStyle}>
            {textList.map((text, index) => (
              <p key={index} className="p-1 w-full">
                {text}
              </p>
            ))}
          </section>
        </div>
      </div>
      <div className="bg-gray-700 border rounded-r-full h-6 md:h-8 w-[5%]"></div>
    </div>
  );
}
