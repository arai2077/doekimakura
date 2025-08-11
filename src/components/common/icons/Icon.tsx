import type { ReactElement } from "react";

import Union from "@/assets/icons/union.svg?react";
import { ICON_SIZE, ICONS } from "./constants";

export interface IconProps {
  name: string;
  size?: number;
}

const IconElements = {
  [ICONS.UNION]: Union,
};

export const Icon = ({
  name,
  size = ICON_SIZE.SMALL,
}: IconProps): ReactElement => {
  if (name in IconElements) {
    const IconComponent = IconElements[name];
    return <IconComponent width={size} height={size} />;
  } else {
    console.warn(`Icon with name "${name}" does not exist.`);
    return <div />;
  }
};
