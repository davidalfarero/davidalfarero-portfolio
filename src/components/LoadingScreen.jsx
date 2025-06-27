import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<HelloWorld />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-base-100 text-font flex flex-col items-center justify-center z-100">
      <div className="mb-4 text-4xl sm:text-5xl text-base-content font-mono font-bold">
        {text} <span className="animate-blink ml-1 text-base-content"> | </span>
      </div>

      <div className="w-[400px] h-[5px] bg-base-300 relative overflow-hidden">
        <div className="w-[30%] h-full bg-primary shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
