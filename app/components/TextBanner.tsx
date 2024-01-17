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
      {/* <div className="bg-indigo-200 dark:bg-gray-900 rounded-lg border-2 border-indigo-950 dark:border-white h-6 md:h-8 w-2"></div> */}
      <div className="relative overflow-hidden h-7 w-[98%] text-sm">
        <div className="absolute flex whitespace-nowrap items-center justify-center w-full h-full bg-indigo-800 dark:bg-black border-y border-white text-white">
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
      {/* <div className="bg-indigo-200 dark:bg-gray-900 rounded-lg border-2 border-indigo-950 dark:border-white h-6 md:h-8 w-2"></div> */}
    </div>
  );
}
