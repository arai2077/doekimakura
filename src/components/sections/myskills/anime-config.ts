import { animate, type Scope } from "animejs";

export function registerAnimations(self: Scope) {
  self.add("slideIn", () => {
    animate(".uiux-bg", {
      opacity: 1,
      duration: 500,
      ease: "easeInQuad",
    });
    animate(".uiux-text", {
      color: "rgb(255, 255, 255)",
      translateX: 30,
      duration: 300,
      ease: "easeOutQuad",
    });
    animate(".uiux-subtext", {
      opacity: 1,
      translateY: 0,
      duration: 400,
      ease: "easeOutQuad",
    });
    animate(".uiux-chibi", {
      translateX: "-50%",
      duration: 2500,
      ease: "outElastic(1, 0.8)",
    });
    animate(".uiux-icons", {
      translateX: "-50%",
      duration: 2000,
      ease: "outElastic(1, 0.8)",
    });
    animate(".uiux-devices", {
      translateX: "-50%",
      duration: 1800,
      ease: "outElastic(1, 0.8)",
    });
    animate(".uiux-gradient", {
      translateX: "-50%",
      duration: 1000,
      ease: "easeOutQuad",
    });
  });

  self.add("slideOut", () => {
    animate(".uiux-bg", {
      opacity: 0,
      duration: 500,
      ease: "easeOutQuad",
    });
    animate(".uiux-text", {
      color: "rgba(255, 255, 255, 0)",
      translateX: 0,
      duration: 300,
      ease: "easeOutQuad",
    });
    animate(".uiux-subtext", {
      opacity: 0,
      translateY: 60,
      duration: 300,
      ease: "easeOutQuad",
    });
    animate(".uiux-chibi", {
      translateX: "50%",
      duration: 1000,
      ease: "easeOutQuad",
    });
    animate(".uiux-icons", {
      translateX: "50%",
      duration: 1000,
      ease: "easeOutQuad",
    });
    animate(".uiux-devices", {
      translateX: "50%",
      duration: 1000,
      ease: "easeOutQuad",
    });
    animate(".uiux-gradient", {
      translateX: "50%",
      duration: 1000,
      ease: "easeOutQuad",
    });
  });

  self.add("slideInThreed", () => {
    animate(".threed-subtext", {
      opacity: 1,
      translateY: 0,
      duration: 400,
      ease: "easeOutQuad",
    });
    animate(".threed-img", {
      translateX: 100,
      duration: 800,
      ease: "outElastic(1, 0.8)",
    });
    animate(".threed-gradient", {
      translateX: 0,
      duration: 600,
      delay: 120,
      ease: "easeOutQuad",
    });
  });

  self.add("slideOutThreed", () => {
    animate(".threed-subtext", {
      opacity: 0,
      translateY: 60,
      duration: 300,
      ease: "easeOutQuad",
    });
    animate(".threed-img", {
      translateX: 200,
      duration: 300,
      ease: "easeInQuad",
    });
    animate(".threed-gradient", {
      translateX: 800,
      duration: 400,
      ease: "easeInQuad",
    });
  });

  self.add("slideInIllust", () => {
    animate(".illust-subtext", {
      opacity: 1,
      translateY: 0,
      duration: 400,
      ease: "easeOutQuad",
    });
    animate(".illust-img", {
      translateX: 200,
      duration: 800,
      ease: "outElastic(1, 0.8)",
    });
    animate(".illust-gradient", {
      translateX: 0,
      duration: 600,
      delay: 120,
      ease: "easeOutQuad",
    });
  });

  self.add("slideOutIllust", () => {
    animate(".illust-subtext", {
      opacity: 0,
      translateY: 60,
      duration: 300,
      ease: "easeOutQuad",
    });
    animate(".illust-img", {
      translateX: 300,
      duration: 300,
      ease: "easeInQuad",
    });
    animate(".illust-gradient", {
      translateX: 800,
      duration: 400,
      ease: "easeInQuad",
    });
  });
}
