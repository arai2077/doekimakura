import type { ReactElement } from "react";

import Union from "@/assets/icons/union.svg?react";
import Linkedin from "@/assets/icons/linkedin.svg?react";
import Whatsapp from "@/assets/icons/whatsapp.svg?react";
import Instagram from "@/assets/icons/instagram.svg?react";
import Mail from "@/assets/icons/mail.svg?react";
import { ICON_SIZE, ICONS } from "./constants";

import "./icon.css";

export interface IconProps {
  name: string;
  size?: number;
}

const IconElements = {
  [ICONS.UNION]: Union,
  [ICONS.LINKEDIN]: Linkedin,
  [ICONS.WHATSAPP]: Whatsapp,
  [ICONS.INSTAGRAM]: Instagram,
  [ICONS.MAIL]: Mail,
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
