"use client";

import { ABOUT_DATA } from "./constants";
import "./about.css";

export const About = () => {
  return (
    <section className="about-section py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          {/* Image Column */}
          <div className="about-image-column flex justify-center md:justify-start">
            <div className="about-image-wrapper relative">
              <img
                src={ABOUT_DATA.image}
                alt="Profile"
                className="about-image rounded-lg w-full max-w-md h-auto object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content-column">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {ABOUT_DATA.title}
            </h2>
            
            <div className="space-y-4">
              {ABOUT_DATA.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg text-foreground/80 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
