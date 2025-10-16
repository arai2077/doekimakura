import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
import { CAROUSEL_ITEMS, CAROUSEL_OPTIONS } from "./constants";

export const TestimonyCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    api || undefined
  );

  const renderCarouselItem = (item: (typeof CAROUSEL_ITEMS)[number]) => (
    <div className="relative p-1 h-[550px]">
      <Card className="h-[550px] bg-[var(--magenta)]">
        <CardContent className="h-[70%] flex flex-col justify-center items-start mx-4">
          <div className="relative h-full w-full rounded-xl bg-white px-6 py-8 text-black">
            {/* Top left big quotation mark */}
            <span className="absolute top-4 left-4 text-8xl text-[var(--magenta)] leading-none select-none pointer-events-none">
              &ldquo;
            </span>
            <div className="flex items-center justify-center h-full relative z-10 mx-8 italic">
              {item.quote}
            </div>
            {/* Bottom right big quotation mark */}
            <span className="absolute -bottom-12 right-4 text-8xl text-[var(--magenta)] leading-none select-none pointer-events-none">
              &rdquo;
            </span>
            {/* Speech bubble notch */}
            <span
              className="absolute left-10 bottom-[-16px] w-0 h-0"
              style={{
                borderLeft: "16px solid transparent",
                borderRight: "16px solid transparent",
                borderTop: "16px solid white",
              }}
            />
          </div>
        </CardContent>
        <CardFooter className="min-h-[30%] flex justify-start items-center gap-4">
          <img
            src={item.imageSrc}
            alt={`${item.name} profile picture`}
            className="w-24 h-24 rounded-lg"
          />
          <div>
            <p className="text-lg text-white">{item.name}</p>
            <p className="text-sm text-white">{item.title}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );

  return (
    <div className="flex flex-col px-8 pt-8 pb-4 bg-white border-b-16 border-b-[var(--magenta)]">
      <Carousel
        opts={CAROUSEL_OPTIONS}
        setApi={setApi}
        className="w-[80%] flex justify-center mx-auto relative"
      >
        <CarouselPrevious className="cursor-pointer border-none text-[var(--muted-foreground)] hover:text-[var(--teal)] hover:bg-0" />
        <CarouselContent>
          {CAROUSEL_ITEMS.map((item, index) => (
            <CarouselItem key={index} className="basis-1/3">
              {renderCarouselItem(item)}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="cursor-pointer border-none text-[var(--muted-foreground)] hover:text-[var(--teal)] hover:bg-0" />
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
