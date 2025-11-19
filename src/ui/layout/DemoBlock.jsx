import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import { useEffect, useRef, useState } from "react";
import CopyButton from "../base/Button/CopyButton";

export default function DemoBlock({ title, children, code }) {
  const [isCopied, setIsCopied] = useState(false);
  const ref = useRef(null);
  function handleCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      if (ref.current) {
        clearTimeout(ref.current);
      }
      ref.current = setTimeout(() => setIsCopied(false), 2000);
    });
  }
  useEffect(() => {
    Prism.highlightAll();
    return () => {
      if (ref.current) {
        clearTimeout(ref.current);
      }
    };
  }, []);
  return (
    <>
      {title && <h3 className="mb-4 text-lg font-semibold">{title}</h3>}
      {(children || code) && (
        <div className="mr-8 mb-6 overflow-hidden rounded-xl border border-gray-200 transition-colors duration-600 dark:border-gray-200/20">
          {children && (
            <div
              className={
                "flex min-h-50 items-center justify-center bg-white p-6 transition-colors duration-600 dark:bg-black"
              }
            >
              {children}
            </div>
          )}
          {code && (
            <pre
              className={
                "line-numbers relative mt-0 mb-0 overflow-x-auto rounded-t-none bg-gray-100 text-sm text-black transition-colors duration-600 dark:bg-neutral-900 dark:text-white"
              }
            >
              <code className="language-jsx">{code}</code>
              <CopyButton
                onClick={handleCopy}
                isCopied={isCopied}
                className="absolute top-2 right-2 tracking-wide text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              />
            </pre>
          )}
        </div>
      )}
    </>
  );
}
