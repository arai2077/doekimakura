import type { ReactElement } from "react";

import { TitleTooltip } from "./Tooltip";

import Bubble from "@/assets/images/title-bubble.svg?react";
import "./title.css";

export interface TitleProps {
  text: string;
  tooltipText: string;
}

export const Title = ({ text, tooltipText }: TitleProps): ReactElement => {
  const getStaggeredText = () => {
    return text.split(" ").map((word, wordIndex) => (
      <span
        key={wordIndex}
        style={{ marginRight: "0.25em", display: "inline-block" }}
      >
        {word.split("").map((letter, letterIndex) => (
          <span className="letter" key={letterIndex}>
            {letter}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <div className="relative group pl-4 max-w-[600px] w-full">
      <Bubble className="w-full h-auto" />
      <div className="absolute -top-4 left-30 w-[450px] h-full flex items-center justify-between">
        <h1
          className="text-5xl font-bold text-white"
          style={{ fontFamily: "KirangHaerang, sans-serif" }}
        >
          {getStaggeredText()}
        </h1>
        <TitleTooltip text={tooltipText} side="right" />
      </div>
    </div>
  );
};
