import CheckIcon from "../Icon/CheckIcon";
import { CopyIcon } from "../Icon/CopyIcon";

export default function CopyButton({ isCopied, onClick, className }) {
  return (
    <button className={`flex cursor-pointer ${className}`} onClick={onClick}>
      {!isCopied ? (
        <>
          <CopyIcon />
          <span className="text-sm">Copy</span>
        </>
      ) : (
        <>
          <CheckIcon />
          <span className="text-sm">Copied</span>
        </>
      )}
    </button>
  );
}
