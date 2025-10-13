import React from "react";
import { Title } from "@/components/common/title/Title";
import { Card, CardContent } from "@/components/ui/card";
import { DotButton } from "../uiux/DotButton";
import { Button } from "@/components/ui/button";

import Bubble from "@/assets/images/black-bubble.svg?react";
import { CARD_CONTENTS, TITLE } from "./constants";

export const WorkExperience = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const item = CARD_CONTENTS[selectedIndex];

  const handleSelectIndex = (index: number) => () => {
    setSelectedIndex(index);
  };

  const renderBulletPoint = (point: string, index: number) => {
    const bolded = point.replace(/\{b\}(.*?)\{\/b\}/g, "<strong>$1</strong>");
    return <li key={index} dangerouslySetInnerHTML={{ __html: bolded }} />;
  };

  return (
    <div>
      <Title text={TITLE.text} tooltipText={TITLE.tooltipText} />
      <div className="mx-8">
        <section>
          <Card>
            <CardContent className="min-h-[700px] flex flex-col items-center justify-between">
              <div className="px-8 py-4 w-full flex flex-col justify-center rounded-3xl">
                <div className="relative group pl-4 w-[700px] mb-8">
                  <Bubble className="w-full h-auto" />
                  <div className="absolute top-0 left-0 w-[700px] h-full">
                    <h1 className="title absolute top-8 left-10 text-2xl text-white">
                      {item.title}
                    </h1>
                    <h2 className="title absolute bottom-3 left-41 text-l text-white">
                      {item.subTitle}
                    </h2>
                  </div>
                </div>
                <ul className="bulletpoint mx-24 list-disc list-inside">
                  {item.bulletPoints.map((point, index) =>
                    renderBulletPoint(point, index)
                  )}
                </ul>
              </div>

              <div className="flex w-full justify-center items-center">
                {CARD_CONTENTS.map((_, index) => (
                  <DotButton
                    key={index}
                    onClick={handleSelectIndex(index)}
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
            <Button className="bg-[var(--teal)] rounded-full px-8 text-xl text-white cursor-pointer">
              {TITLE.footerButtonText}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};
