// This component could be refined into a general use tooltip,
// but keeping it specific to the title component for now.

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import QuestionMark from "@/assets/icons/tooltip-trigger.svg?react";

export interface TooltipProps {
  text: string;
  side: "top" | "right" | "bottom" | "left";
}

export const TitleTooltip = ({ text, side }: TooltipProps) => (
  <Tooltip>
    <TooltipTrigger>
      <QuestionMark className="w-12 h-12" />
    </TooltipTrigger>
    <TooltipContent side={side}>
      <p className="text-xl">{text}</p>
    </TooltipContent>
  </Tooltip>
);
