import { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardImage } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { DotButton } from "@/components/common/dotbutton/DotButton";
import { useDotButton } from "@/components/common/dotbutton/useDotButton";
import {
  CAROUSEL_ITEMS,
  CAROUSEL_OPTIONS,
  TWEEN_FACTOR,
  TWEEN_MIN_OPACITY,
} from "./constants";
import { Title } from "@/components/common/title/Title";

export const UiuxCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    api || undefined
  );

  // Clamp helper
  const clamp = useCallback((n: number, min: number, max: number) => {
    return Math.max(min, Math.min(max, n));
  }, []);

  // Apply tweened opacity based on distance to each snap
  const applyTweenEffects = useCallback(() => {
    if (!api) return;

    const slideNodes = api.slideNodes();
    const scrollSnaps = api.scrollSnapList();
    const progress = api.scrollProgress();

    // Calculate opacity for each slide: closer to current snap => higher opacity
    for (let i = 0; i < slideNodes.length; i++) {
      // Distance from current scroll position to the slide's snap point
      const diffToSnap = Math.abs(scrollSnaps[i] - progress);
      const tween = 1 - diffToSnap * TWEEN_FACTOR;
      const opacity = clamp(tween, TWEEN_MIN_OPACITY, 1);
      const slide = slideNodes[i] as HTMLElement;
      slide.style.opacity = String(opacity);
    }
  }, [api, clamp]);

  useEffect(() => {
    if (!api) return;

    // Initialize once mounted
    applyTweenEffects();

    // Recalculate on scroll & reInit
    api.on("scroll", applyTweenEffects);
    api.on("reInit", applyTweenEffects);
    api.on("resize", applyTweenEffects);

    return () => {
      api.off("scroll", applyTweenEffects);
      api.off("reInit", applyTweenEffects);
      api.off("resize", applyTweenEffects);
    };
  }, [api, applyTweenEffects]);

  const renderSlidingPanel = (item: (typeof CAROUSEL_ITEMS)[0]) => (
    <div className="px-16 py-8 h-[600px] w-full flex flex-col justify-between items-center rounded-3xl absolute inset-0 translate-y-200 opacity-0 transition ease-in-out duration-300 bg-white">
      <Title
        text={item.title}
        tooltipText="Placeholder until we can get the correct banner"
      />
      <div className="flex mx-16 mt-4 mb-8">{item.description}</div>
      <Button
        variant="default"
        className="px-8 ml-auto mr-16 rounded-full text-xl bg-[var(--teal)]"
      >
        {"Learn More >>>"}
      </Button>
      <CarouselPrevious className="left-2 cursor-pointer border-none text-[var(--muted-foreground)] hover:text-[var(--teal)] hover:bg-0" />
      <CarouselNext className="right-2 cursor-pointer border-none text-[var(--muted-foreground)] hover:text-[var(--teal)] hover:bg-0" />
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <Carousel opts={CAROUSEL_OPTIONS} setApi={setApi} className="w-full">
        <CarouselContent>
          {CAROUSEL_ITEMS.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 my-4"
              style={{ opacity: TWEEN_MIN_OPACITY }}
            >
              <div className="relative p-1 h-[600px]">
                <Card className="h-[600px] panel-trigger transition ease-in-out hover:-translate-y-3 hover:-translate-x-0 hover:shadow-[14px_16px_0px_var(--color-magenta)]/100">
                  <CardContent className="h-[600px] flex flex-col justify-center aspect-square items-start justify-center hover:[&>*]:-translate-y-0 hover:[&>*]:opacity-100">
                    <CardImage
                      src={item.imageSrc}
                      alt={item.imageTitle}
                      className="rounded-3xl absolute inset-0 w-full h-full object-cover"
                    />
                    {renderSlidingPanel(item)}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="dot-buttons mt-4 flex justify-center items-center">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"dot".concat(
              index === selectedIndex ? " dot--selected" : ""
            )}
          />
        ))}
      </div>
    </div>
  );
};
