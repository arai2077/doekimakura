import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CARD_CONTENTS_3D } from "./constants";

export const Portfolio3D: React.FC = () => {
  return (
    <div className="p-15 grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
      {CARD_CONTENTS_3D.map((item, index) => (
        <section className="flex" key={index}>
          <Card className="group w-full max-w-4xl pt-2 pb-3 transition ease-in-out hover:-translate-y-3 hover:-translate-x-0 hover:shadow-[14px_16px_0px_var(--color-magenta)]/100">
            <CardHeader className="px-2">
              <div className="container overflow-hidden rounded-xl">
                <CardImage
                  src={item.imageSrc}
                  className="group-hover:scale-110 transition ease-in-out"
                />
              </div>
              <CardTitle className="mb-0 text-2xl tracking-tight font-bold text-magenta dark:text-white pt-3">
                {item.title}
              </CardTitle>
              <CardContent className="mr-10">{item.content}</CardContent>
            </CardHeader>
            <CardFooter className="mt-auto">
              {item.badges.map((badge, badgeIndex) => (
                <Badge
                  key={badgeIndex}
                  variant="outline"
                  className="ml-auto px-4 pt-0 pb-0 mt-0 mb-0 border border-mediumpurple rounded-full text-mediumpurple text-base"
                >
                  {badge}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        </section>
      ))}
    </div>
  );
};
