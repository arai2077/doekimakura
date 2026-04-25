import React, { useEffect, useRef } from "react";
import { createScope } from "animejs";
import { Title } from "@/components/common/title/Title";
import { registerAnimations } from "./anime-config";
import { TITLE, UIUX, THREED, ILLUST } from "./constants";
import chibi from "@/assets/images/uiux-kabe-chibi.png";
import icons from "@/assets/images/uiux-icons.png";
import devices from "@/assets/images/uiux-devices.png";
import gradient from "@/assets/images/uiux-gradient.png";
import arm from "@/assets/images/3d-arm.png";
import tablet from "@/assets/images/illust-tablet.png";

export const MySkills: React.FC = () => {
  const root = useRef<HTMLDivElement | null>(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      if (!self) return;
      registerAnimations(self);
    });

    return () => scope.current?.revert();
  }, []);

  const handleSlideIn = () => scope.current?.methods.slideIn();
  const handleSlideOut = () => scope.current?.methods.slideOut();
  const handleSlideInThreed = () => scope.current?.methods.slideInThreed();
  const handleSlideOutThreed = () => scope.current?.methods.slideOutThreed();
  const handleSlideInIllust = () => scope.current?.methods.slideInIllust();
  const handleSlideOutIllust = () => scope.current?.methods.slideOutIllust();

  return (
    <div>
      <Title text={TITLE.text} tooltipText={TITLE.tooltipText} />
      <div ref={root}>
        <div
          onMouseEnter={handleSlideIn}
          onMouseLeave={handleSlideOut}
          className="uiux-container h-64 flex justify-between items-center bg-white shadow-lg cursor-pointer [overflow-x:clip] relative"
        >
          <div className="uiux-bg absolute inset-0 bg-gradient-to-r from-[#C82E5B] to-[#FFC862] opacity-0 pointer-events-none" />
          <div className="relative flex flex-col items-center gap-4">
            <p
              className="uiux-text ml-16 text-9xl bg-gradient-to-r from-[#C82E5B] to-[#FFC862] bg-clip-text"
              style={{ color: "rgba(255, 255, 255, 0)" }}
            >
              {UIUX.text}
            </p>
            <p
              className="uiux-subtext ml-16 text-white text-2xl"
              style={{ opacity: 0, transform: "translatey(60px)" }}
            >
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
        <div className="h-40 my-4 mx-16 flex justify-center items-center gap-4">
          <div
            className="h-full w-full p-8 bg-[#C82E5B] text-white text-8xl flex justify-between items-center gap-4 cursor-pointer relative [overflow-x:clip]"
            onMouseEnter={handleSlideInThreed}
            onMouseLeave={handleSlideOutThreed}
          >
            <img
              src={gradient}
              alt=""
              className="threed-gradient absolute bottom-0 right-0 pointer-events-none"
              style={{ transform: "translateX(800px)" }}
            />
            <div className="relative flex flex-col gap-2 flex-1">
              <p>{THREED.text}</p>
              <p
                className="threed-subtext text-xl"
                style={{ opacity: 0, transform: "translateY(60px)" }}
              >
                {THREED.subText}
              </p>
            </div>
            <img
              src={arm}
              alt="3D"
              className="threed-img absolute bottom-0 right-0 w-[80%]"
              style={{ transform: "translateX(200px)" }}
            />
          </div>
          <div
            className="h-full w-full p-8 bg-[#C82E5B] text-white text-8xl flex justify-between items-center gap-4 cursor-pointer relative [overflow-x:clip]"
            onMouseEnter={handleSlideInIllust}
            onMouseLeave={handleSlideOutIllust}
          >
            <img
              src={gradient}
              alt=""
              className="illust-gradient absolute bottom-0 right-0 pointer-events-none"
              style={{ transform: "translateX(800px)" }}
            />
            <div className="relative flex flex-col gap-2 flex-1">
              <p>{ILLUST.text}</p>
              <p
                className="illust-subtext text-xl"
                style={{ opacity: 0, transform: "translateY(60px)" }}
              >
                {ILLUST.subText}
              </p>
            </div>
            <img
              src={tablet}
              alt="Illustration"
              className="illust-img absolute bottom-0 right-0 w-[80%]"
              style={{ transform: "translateX(300px)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
