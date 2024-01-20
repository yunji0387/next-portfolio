type MinimizeIconProps = {
  isMinimize: boolean;
  handleClick: () => void;
  width: string;
  height: string;
};

export function MinimizeIcon({
  isMinimize,
  handleClick,
  width,
  height,
}: MinimizeIconProps) {
  const sizeStyle = "w-" + width + " h-" + height;

  return (
    <button
      onClick={handleClick}
      className={`flex flex-col justify-center items-center ${sizeStyle} border-2 border-[#4d2800] dark:border-white rounded-md`}
    >
      <span
        className={`absolute bg-[#4d2800] dark:bg-white transition-all duration-300 ease-out
                    h-0.5 w-4 rounded-sm transform origin-top-left ${
                      isMinimize
                        ? "w-[18px] -rotate-[35deg] translate-x-[2px] translate-y-[10px]"
                        : ""
                    }`}
      ></span>
      <span
        className={`absolute bg-[#4d2800] dark:bg-white transition-all duration-300 ease-out
                    h-0.5 w-4 rounded-sm transform origin-bottom-left ${
                      isMinimize
                        ? "w-[18px] rotate-[35deg] translate-x-[2px] -translate-y-[10px]"
                        : "opacity-0"
                    }`}
      ></span>
    </button>
  );
}
