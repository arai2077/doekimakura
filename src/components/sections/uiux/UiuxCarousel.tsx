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
  const applyTweenOpacity = useCallback(() => {
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
      (slideNodes[i] as HTMLElement).style.opacity = String(opacity);
    }
  }, [api, clamp]);

  useEffect(() => {
    if (!api) return;

    // Initialize once mounted
    applyTweenOpacity();

    // Recalculate on scroll & reInit
    api.on("scroll", applyTweenOpacity);
    api.on("reInit", applyTweenOpacity);

    return () => {
      api.off("scroll", applyTweenOpacity);
      api.off("reInit", applyTweenOpacity);
    };
  }, [api, applyTweenOpacity]);

  return (
    <div className="flex justify-center items-center">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
        className="w-full px-8"
      >
        <CarouselContent>
          {CAROUSEL_ITEMS.map((item, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
              style={{ opacity: TWEEN_MIN_OPACITY }}
            >
              <div className="panel-container p-1">
                <Card className="panel-trigger min-w-[500px] transition ease-in-out hover:-translate-y-3 hover:-translate-x-0 hover:shadow-[14px_16px_0px_var(--color-magenta)]/100">
                  <CardContent className="flex flex-col justify-center aspect-square items-start justify-center p-6">
                    <img
                      src={item.imageSrc}
                      alt={item.imageTitle}
                      className="panel-image"
                    />
                    <div className="sliding-panel p-8 h-full w-full flex flex-col gap-4 justify-center">
                      <div className="font-semibold">{item.title}</div>
                      <div>{item.description}</div>
                      <Button variant="default" className="ml-auto">
                        Learn More
                      </Button>
                      <CarouselPrevious />
                      <CarouselNext />
                    </div>
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
