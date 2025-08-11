import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage,
} from "@/components/common/ui/card"
import { Button } from "@/components/common/ui/button"
import { CARD_CONTENTS_3D } from "./constants";
import React from "react";

export const Portofolio3D: React.FC = () => {
  return (
    <div className="p-15 grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
        {CARD_CONTENTS_3D.map((item, index) => (
          <section className="flex" key={index}>
              <Card className="group w-full max-w-4xl pt-2 pb-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:-translate-x-0 hover:shadow-[14px_16px_0px_var(--color-magenta)]/100">
                <CardHeader className="px-2">
                  <div className="container overflow-hidden rounded-xl">
                  <CardImage src={item.imageSrc} className="group-hover:scale-110 transition delay-150 duration-300 ease-in-out"/>
                  </div>
                  <CardTitle className="mb-0 text-2xl tracking-tight font-bold text-magenta dark:text-white pt-3">
                    {item.title}
                  </CardTitle>
                  <CardContent className="mr-10">
                    {item.content}
                  </CardContent>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="ml-auto px-4 pt-0 pb-0 mt-0 mb-0 border border-mediumpurple rounded-full text-mediumpurple text-base hover:bg-accent hover:text-mediumpurple">{item.buttonTitle}</Button>
                </CardFooter>
              </Card>
          </section>
        ))}
  </div>
  );
};