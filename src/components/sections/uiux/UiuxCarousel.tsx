import { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CAROUSEL_ITEMS, TWEEN_FACTOR, TWEEN_MIN_OPACITY } from "./constants";
import "./uiux.css";

export const UiuxCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

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
    <div className="p-16 h-[600px] w-full flex flex-col justify-center rounded-3xl absolute inset-0 translate-y-200 opacity-0 transition ease-in-out duration-300 bg-white">
      <div className="font-semibold">{item.title}</div>
      <div>{item.description}</div>
      <Button variant="default" className="ml-auto">
        Learn More
      </Button>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </div>
  );

  return (
    <div className="flex justify-center items-center">
      <Carousel
        opts={{
          loop: true,
        }}
        setApi={setApi}
        className="w-full px-8"
      >
        <CarouselContent>
          {CAROUSEL_ITEMS.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2"
              style={{ opacity: TWEEN_MIN_OPACITY }}
            >
              <div className="relative p-1 h-[600px]">
                <Card className="h-[600px] panel-trigger transition ease-in-out hover:-translate-y-3 hover:-translate-x-0 hover:shadow-[14px_16px_0px_var(--color-magenta)]/100">
                  <CardContent className="h-[600px] flex flex-col justify-center aspect-square items-start justify-center hover:[&>*]:-translate-y-0 hover:[&>*]:opacity-100">
                    <img
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
    </div>
  );
};
