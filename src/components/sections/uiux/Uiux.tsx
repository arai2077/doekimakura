"use client";

import { Title } from "@/components/common/title/Title";
import { UiuxCarousel } from "./UiuxCarousel";
import { TITLE } from "./constants";

export const Uiux = () => {
  return (
    <div>
      <Title text={TITLE.text} tooltipText={TITLE.tooltipText} />
      <UiuxCarousel />
    </div>
  );
};
