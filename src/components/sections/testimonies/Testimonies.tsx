"use client";

import { Title } from "@/components/common/title/Title";
import { TestimonyCarousel } from "./TestimonyCarousel";
import { TITLE } from "./constants";

export const Testimonies = () => {
  return (
    <div>
      <Title text={TITLE.text} tooltipText={TITLE.tooltipText} />
      <TestimonyCarousel />
    </div>
  );
};
