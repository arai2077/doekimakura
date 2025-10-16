import { Icon } from "@/components/common/icons/Icon";
import { CONTENT } from "./constants";
import { ICON_SIZE } from "@/components/common/icons/constants";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <div>
      <div className="flex justify-end items-center gap-4 p-4">
        <div>{CONTENT.devvedBy}</div>
        <a href={CONTENT.arai.href} target="_blank" rel="noopener noreferrer">
          <img
            className="w-16 h-16 bg-white rounded-xl flex justify-center items-center p-2 cursor-pointer"
            src={CONTENT.arai.imgSrc}
            alt={CONTENT.arai.alt}
          />
        </a>
        <a href={CONTENT.homi.href} target="_blank" rel="noopener noreferrer">
          <img
            className="w-16 h-16 bg-white rounded-xl flex justify-center items-center p-2 cursor-pointer"
            src={CONTENT.homi.imgSrc}
            alt={CONTENT.homi.alt}
          />
        </a>
      </div>
      <div className="bg-white flex justify-between px-16 py-8">
        <div>
          <Icon name="union" size={ICON_SIZE.XXXLARGE} />
          <div className="flex gap-6 mt-8 mb-4">
            <a
              href={CONTENT.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" size={ICON_SIZE.LARGE} />
            </a>
            <a
              href={CONTENT.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={ICON_SIZE.LARGE} />
            </a>
            <a
              href={CONTENT.social.mail}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="mail" size={ICON_SIZE.LARGE} />
            </a>
            <a
              href={CONTENT.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="instagram" size={ICON_SIZE.LARGE} />
            </a>
          </div>
          <div className="mb-2" style={{ fontFamily: "KirangHaerang" }}>
            {CONTENT.copyright}
          </div>
          <div className="text-xs">
            {CONTENT.designBy.map((item, index) => (
              <span
                key={index}
                style={{
                  fontWeight: item.bold ? "bold" : "normal",
                  textWrap: "wrap",
                }}
              >
                {/* Apparently needed to prevent collapsing spaces */}
                {item.bold ? `${"\u00A0"}${item.text}${"\u00A0"}` : item.text}
              </span>
            ))}
          </div>
          <div className="text-xs">
            {CONTENT.developedBy.map((item, index) => (
              <span
                key={index}
                style={{
                  fontWeight: item.bold ? "bold" : "normal",
                  textWrap: "wrap",
                }}
              >
                {/* Apparently needed to prevent collapsing spaces */}
                {item.bold ? `${"\u00A0"}${item.text}${"\u00A0"}` : item.text}
              </span>
            ))}
          </div>
        </div>
        <div className="max-w-32 flex flex-col justify-between items-end">
          <Button className="bg-[var(--teal)] rounded-full">
            <ArrowUp />
            {CONTENT.toTopButtonText}
          </Button>
          <div>
            <div className="text-xs">{CONTENT.thankYou}</div>
            <div className="text-xs">{CONTENT.thankYou2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
