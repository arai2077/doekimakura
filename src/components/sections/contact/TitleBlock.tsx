import { Sparkle } from "lucide-react";
import { IMAGE, TITLE } from "./constants";
import bubble from "@/assets/images/magenta-bubble.svg";
import bubble2 from "@/assets/images/magenta-bubble-2.svg";

export const TitleBlock = () => {
  const renderTitleText = (
    line: { text: string; bold: boolean },
    index: number
  ) => (
    <span
      key={index}
      style={{ fontWeight: line.bold ? "bold" : "normal", textWrap: "wrap" }}
    >
      {/* Apparently needed to prevent collapsing spaces */}
      {line.bold ? `${"\u00A0"}${line.text}${"\u00A0"}` : line.text}
    </span>
  );

  return (
    <div className="relative bg-white h-48 border-b-16 border-b-[var(--magenta)]">
      <img
        className="absolute left-0 bottom-0 ml-8"
        src={IMAGE.src}
        alt={IMAGE.alt}
      />
      <div className="absolute right-12 -top-12 mr-8">
        <img className="relative" src={bubble} alt="bubble" />
        <Sparkle
          className="absolute left-32 top-12 text-white"
          size={32}
          fill="white"
        />
        <Sparkle
          className="absolute right-12 bottom-8 text-white z-1"
          size={32}
          fill="white"
        />
        <div className="absolute -right-20 top-16 text-white text-xl flex flex-wrap justify-center items-center mx-32">
          {TITLE.block1.map((line, index) => renderTitleText(line, index))}
        </div>
      </div>
      <div className="absolute right-4 -bottom-20 mr-8">
        <img className="relative" src={bubble2} alt="bubble2" />
        <div className="absolute top-16 left-12 text-white text-xl z-10 flex flex-wrap">
          {TITLE.block2.map((line, index) => renderTitleText(line, index))}
        </div>
      </div>
    </div>
  );
};
