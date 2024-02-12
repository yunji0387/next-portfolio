type TextBannerProps = {
  textList: string[];
  speed?: number;
};

export function TextBanner({ textList, speed = 15000 }: TextBannerProps) {
  const scrollStyle: Record<string, string> & React.CSSProperties = {
    "--speed": `${speed}ms`,
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="relative overflow-hidden h-7 w-[98%] text-sm">
        <div className="absolute flex whitespace-nowrap items-center justify-center w-full h-full text-black dark:text-white font-bold">
          <section className="scroll-section" style={scrollStyle}>
            {textList.map((text, index) => (
              <p key={index} className="p-1 w-full">
                {text}
              </p>
            ))}
          </section>
          <section className="scroll-section" style={scrollStyle}>
            {textList.map((text, index) => (
              <p key={index} className="p-2 w-full">
                {text}
              </p>
            ))}
          </section>
          <section className="scroll-section" style={scrollStyle}>
            {textList.map((text, index) => (
              <p key={index} className="p-2 w-full">
                {text}
              </p>
            ))}
          </section>
          <section className="scroll-section" style={scrollStyle}>
            {textList.map((text, index) => (
              <p key={index} className="p-2 w-full">
                {text}
              </p>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
