import React, { useEffect, useRef } from "react";
import { animate, createScope } from "animejs";
import { Title } from "@/components/common/title/Title";
import { TITLE, UIUX } from "./constants";
import chibi from "@/assets/images/uiux-kabe-chibi.png";
import "./myskills.css";

export const MySkills: React.FC = () => {
  const root = useRef<HTMLDivElement | null>(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      if (!self) return;
      self.add("slideIn", () => {
        animate(".uiux-chibi", {
          translateX: [-500, 0],
          ease: "out(4)",
          duration: 1500,
        });
      });
    });

    return () => scope.current?.revert();
  }, []);

  const handleSlideIn = () => {
    if (!scope.current) return;

    scope.current.methods.slideIn();
  };

  return (
    <div>
      <Title text={TITLE.text} tooltipText={TITLE.tooltipText} />
      <div ref={root}>
        <div
          onMouseOver={handleSlideIn}
          className="uiux-container h-96 flex justify-between items-center bg-white hover:bg-gradient-to-r hover:from-[#C82E5B] hover:to-[#FFC862] transition-colors duration-500 ease-in-out shadow-lg cursor-pointer"
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
            <img src={chibi} alt="UI/UX Icon" className="uiux-chibi" />
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
