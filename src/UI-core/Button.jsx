import { forwardRef } from "react";
import { LoaderCircle } from "lucide-react";

const sizeScope = {
  "icon-sm": "h-7 w-7 items-center justify-center overflow-hidden ",
  icon: "h-8 w-8 items-center justify-center overflow-hidden ",
  "icon-lg": "h-10 w-10 items-center justify-center overflow-hidden ",
  xs: "px-1.5 py-1 text-xs leading-5 ",
  sm: "px-3 py-1.5 text-sm leading-5 ",
  md: "px-4 py-2 text-[16px] leading-5 ",
  lg: "px-4.5 py-3.5 text-xl ",
  xl: "px-5 py-4 text-2xl ",
};

const typeScope = {
  primary:
    "inline-flex items-center gap-x-1.5 cursor-pointer rounded-lg text-white dark:text-black bg-[#202020] shadow-sm hover:bg-[#333333] dark:bg-white dark:hover:bg-[#d5d5d5] " +
    ` disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-200 dark:disabled:bg-gray-300 dark:disabled:text-gray-600 disabled:opacity-80 `,
  outline:
    "inline-flex items-center gap-x-1.5 cursor-pointer rounded-lg border border-gray-300 bg-transparent shadow-sm hover:bg-black/10 dark:border-[#787878] dark:hover:bg-white/10 " +
    ` disabled:cursor-not-allowed disabled:border disabled:bg-gray-300/10 disabled:text-gray-400 disabled:dark:border-[#6f6f6f] disabled:dark:bg-gray-300/20 disabled:dark:text-[#888888] `,
  ghost:
    "inline-flex items-center gap-x-1.5 cursor-pointer rounded-lg border-0! bg-transparent hover:bg-black/5 dark:hover:bg-white/10 " +
    ` disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-[#444444] `,
  glass:
    ` inline-flex items-center gap-x-1.5 cursor-pointer rounded-lg bg-gray-50/20 inset-shadow-sm/30 inset-ring-1 inset-ring-gray-50 backdrop-blur-2xl transition duration-500 hover:bg-gray-200 hover:inset-ring-gray-200 outline-none` +
    ` dark:bg-neutral-500/50 dark:text-white dark:inset-ring-[0.8px] dark:inset-ring-neutral-400/50 dark:hover:bg-neutral-400/80 dark:hover:inset-ring-neutral-400 ` +
    ` disabled:cursor-not-allowed disabled:bg-[#c1c1c1]/30 disabled:text-gray-400 disabled:dark:bg-neutral-500/80 disabled:dark:text-gray-200`,
  link:
    " inline-flex items-center gap-x-1 cursor-pointer hover:underline " +
    ` disabled:cursor-not-allowed disabled:text-[#5e5e5e] disabled:dark:text-[#444444] `,
};

const disabledStyle = "disabled:cursor-not-allowed disabled:opacity-60 ";

const Button = (props, ref) => {
  const { onClick, children, isLoading } = { ...props }; //Native Html Button

  const className = sizeScope["md"] + typeScope["glass"];
  return (
    <button
      onClick={() => {
        console.log("dsa");
        onClick();
      }}
      disabled={false}
      className={className}
      children={
        <>
          {isLoading && (
            <LoaderCircle strokeWidth={1.5} className="animate-spin" />
          )}
          <span>{children}</span>
        </>
      }
    />
  );
};

export default forwardRef(Button);
