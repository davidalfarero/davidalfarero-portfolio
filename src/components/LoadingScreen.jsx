import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "{ Hello World /}";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-bg text-font flex flex-col items-center justify-center">
      <div className="mb-4 text-5xl text-font font-mono font-bold">
        {text} <span className="animate-blink ml-1 text-font"> | </span>
      </div>

      <div className="w-[400px] h-[5px] bg-alter-bg relative overflow-hidden">
        <div className="w-[30%] h-full bg-primary shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
