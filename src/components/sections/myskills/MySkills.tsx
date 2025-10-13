import React, { useEffect, useRef } from "react";
import { animate, createScope } from "animejs";
import { Title } from "@/components/common/title/Title";
import { TITLE, UIUX } from "./constants";
import chibi from "@/assets/images/uiux-kabe-chibi.png";
import icons from "@/assets/images/uiux-icons.png";
import devices from "@/assets/images/uiux-devices.png";
import gradient from "@/assets/images/uiux-gradient.png";
import "./myskills.css";

export const MySkills: React.FC = () => {
  const root = useRef<HTMLDivElement | null>(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      if (!self) return;
      self.add("slideIn", () => {
        animate(".uiux-chibi", {
          translateX: "-50%",
          ease: "linear",
        });
        animate(".uiux-icons", {
          translateX: "-50%",
          ease: "linear",
        });
        animate(".uiux-devices", {
          translateX: "-50%",
          ease: "linear",
        });
        animate(".uiux-gradient", {
          translateX: "-50%",
          ease: "linear",
        });
      });
      self.add("slideOut", () => {
        animate(".uiux-chibi", {
          translateX: "50%",
          ease: "linear",
        });
        animate(".uiux-icons", {
          translateX: "50%",
          ease: "linear",
        });
        animate(".uiux-devices", {
          translateX: "50%",
          ease: "linear",
        });
        animate(".uiux-gradient", {
          translateX: "50%",
          ease: "linear",
        });
      });
    });

    return () => scope.current?.revert();
  }, []);

  const handleSlideIn = () => {
    if (!scope.current) return;

    scope.current.methods.slideIn();
  };

  const handleSlideOut = () => {
    if (!scope.current) return;

    scope.current.methods.slideOut();
  };

  return (
    <div>
      <Title text={TITLE.text} tooltipText={TITLE.tooltipText} />
      <div ref={root}>
        <div
          onMouseOver={handleSlideIn}
          onMouseLeave={handleSlideOut}
          className="uiux-container h-96 flex justify-between items-center bg-white hover:bg-gradient-to-r hover:from-[#C82E5B] hover:to-[#FFC862] transition-colors duration-500 ease-in-out shadow-lg cursor-pointer overflow-x-hidden relative"
        >
          <div className="flex flex-col items-center gap-4">
            <p className="uiux-text ml-32 text-9xl bg-gradient-to-r from-[#C82E5B] to-[#FFC862] text-transparent bg-clip-text">
              {UIUX.text}
            </p>
            <p className="uiux-subtext opacity-0 translate-x-[60px] text-white text-2xl">
              {UIUX.subText}
            </p>
          </div>
          <div>
            <img
              src={chibi}
              alt="Kabe"
              className="uiux-chibi translate-x-[50%] absolute bottom-0 right-0 z-4"
            />
            <img
              src={icons}
              alt="UI/UX Icons"
              className="uiux-icons translate-x-[50%] absolute bottom-0 right-0 z-2"
            />
            <img
              src={devices}
              alt="UI/UX Devices"
              className="uiux-devices translate-x-[50%] absolute bottom-0 right-0 z-1"
            />
            <img
              src={gradient}
              alt="UI/UX Devices"
              className="uiux-gradient translate-x-[50%] absolute bottom-0 right-0 z-0"
            />
          </div>
        </div>
        <div className="h-48 my-4 mx-16 flex justify-center items-center gap-4">
          <div className="h-full w-full p-8 bg-[#C82E5B] text-white text-8xl flex justify-between items-center gap-4 cursor-pointer">
            <p>3D</p>
            <img src="#" alt="3D Icon" className="w-16 h-16" />
          </div>
          <div className="h-full w-full p-8 bg-[#C82E5B] text-white text-8xl flex justify-between items-center gap-4 cursor-pointer">
            <p>Illust</p>
            <img src="#" alt="3D Icon" className="w-16 h-16" />
          </div>
        </div>
      </div>
    </div>
  );
};
