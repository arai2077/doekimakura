import React from "react";
import { Title } from "@/components/common/title/Title";
import { CARD_CONTENTS, TITLE } from "./constants";
import { Card, CardContent } from "@/components/ui/card";

import Bubble from "@/assets/images/black-bubble.svg?react";
import { DotButton } from "../uiux/DotButton";
import { Button } from "@/components/ui/button";

export const WorkExperience = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const item = CARD_CONTENTS[selectedIndex]; // Example: Display the first work experience item

  const renderBulletPoint = (point: string) => {
    const parts = point.split(/(\{b\}.*?\{\/b\})/g);
    return (
      <li>
        {parts.map((part, idx) => {
          const isFirstPart = idx === 0 || parts[idx - 1] === "";
          if (part.startsWith("{b}") && part.endsWith("{/b}")) {
            const boldText = part.slice(3, -4);
            return (
              <React.Fragment key={idx}>
                {isFirstPart ? "" : " "}
                <strong>{boldText}</strong>{" "}
              </React.Fragment>
            );
          }
          return <span key={idx}>{part}</span>;
        })}
      </li>
    );
  };

  return (
    <>
      <Title text={TITLE.text} tooltipText={TITLE.tooltipText} />
      <div className="mx-8">
        <section>
          <Card>
            <CardContent className="min-h-[700px] flex flex-col items-center justify-between">
              <div className="px-8 py-4 w-full flex flex-col justify-center rounded-3xl">
                <div className="relative group pl-4 w-[700px] mb-8">
                  <Bubble className="w-full h-auto" />
                  <div className="absolute -top-0 left-0 w-[700px] pt-8 pb-4 pl-10 pr-4 flex flex-col justify-between h-full">
                    <h1 className="text-2xl text-white">{item.title}</h1>
                    <h2 className="absolute bottom-3 left-41 text-l text-white">
                      {item.subTitle}
                    </h2>
                  </div>
                </div>
                <ul className="mx-24 list-disc list-inside">
                  {item.bulletPoints.map((point) => renderBulletPoint(point))}
                </ul>
              </div>

              <div className="flex w-full justify-center items-center">
                {CARD_CONTENTS.map((_, index) => (
                  <DotButton
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={"dot".concat(
                      index === selectedIndex ? " dot--selected" : ""
                    )}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-end items-center gap-8 mt-4">
            <div>{TITLE.footerText}</div>
            <Button className="bg-[var(--teal)] rounded-full px-8 text-xl text-white">
              {TITLE.footerButtonText}
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};
