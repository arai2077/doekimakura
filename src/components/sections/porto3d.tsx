import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CARD_CONTENTS_3D } from "./constants";
import React from "react";

export const Porto3D: React.FC = () => {
  return (
    <div className="p-15 grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
        {CARD_CONTENTS_3D.map((item, index) => (
          <section className="flex" key={index}>
              <Card className="w-full max-w-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:-translate-x-0 hover:shadow-[20px_10px_4px_var(--color-magenta)]/100">
                <CardHeader>
                <CardImage src={item.imagesrc}/>
                <CardTitle className="mb-2 text-2xl tracking-tight font-bold text-magenta dark:text-white">
                  {item.title}
                </CardTitle>
                <CardContent>
                  {item.content}
                </CardContent>
                </CardHeader>
                <CardFooter>
                  <Button className="ml-auto">{item.workbutton}</Button>
                </CardFooter>
              </Card>
          </section>
        ))}
  </div>
  );
};