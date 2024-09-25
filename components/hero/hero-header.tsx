// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";
import { CtaButton } from "./cta-button";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  imagesPartOne: ImageProps[];
  imagesPartTwo: ImageProps[];
};

const imageColumns = [
  { className: "-mt-[20%] animate-loop-vertically-top" },
  { className: "-mt-[50%] animate-loop-vertically-bottom" },
  { className: "animate-loop-vertically-top" },
  { className: "mt-[-30%] animate-loop-vertically-bottom" },
  { className: "mt-[-20%] animate-loop-vertically-top" },
];

export type Header79Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const HeroHeader = (props: Header79Props) => {
  const { heading, description,  imagesPartOne, imagesPartTwo } = {
    ...Header79Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="relative">
      <div className="px-[5%]">
        <div className="flex max-h-[60rem] min-h-svh items-center">
          <div className="container py-8 md:py-14 xl:py-16">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="mb-3 text-4xl font-bold  text-pallete-cream md:mb-5 md:text-6xl lg:text-8xl">
                {heading}
              </h1>
              <p className="text-text-alternative md:text-md text-sm font-light">{description}</p>
              <div className="mt-4 flex items-center justify-center  w-full max-w-lg md:mt-6">
                 <CtaButton label="Learn more" />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 z-10 bg-black/70" />
            <div className="grid w-full grid-cols-2 gap-x-4 px-4 md:grid-cols-3 lg:grid-cols-5">
              {imageColumns.map((column, index) => (
                <AnimatedImageColumn
                  key={index}
                  imagesPartOne={imagesPartOne}
                  imagesPartTwo={imagesPartTwo}
                  className={column.className}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ImageGrid = ({ images }: { images: ImageProps[] }) => (
  <React.Fragment>
    {images.map((image, index) => (
      <div key={index} className="grid size-full grid-cols-1 gap-4">
        <div className="relative w-full pt-[120%]">
          <img
            className="absolute inset-0 size-full object-cover"
            src={image.src}
            alt={image.alt}
          />
        </div>
      </div>
    ))}
  </React.Fragment>
);

const AnimatedImageColumn = ({
  imagesPartOne,
  imagesPartTwo,
  className,
}: {
  imagesPartOne: ImageProps[];
  imagesPartTwo: ImageProps[];
  className: string;
}) => (
  <div className={`grid size-full columns-2 grid-cols-1 gap-4 self-center ${className}`}>
    <ImageGrid images={imagesPartOne} />
    <ImageGrid images={imagesPartTwo} />
  </div>
);

export const Header79Defaults: Header79Props = {
  heading: "Get Crazy T-shirt deals hats, hoodies discounted prices",
  description:
    "Don't miss out on the crazy discounts this summer has to offer",
  buttons: [{ title: "Learn more ..." },],
  imagesPartOne: [
    {
      src: "/bt2.jpg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "/bh1.jpg",
      alt: "Relume placeholder image 2",
    },
    {
      src: "/bto4.jpg",
      alt: "Relume placeholder image 3",
    },
    {
      src: "/bh2.jpg",
      alt: "Relume placeholder image 4",
    },
  ],
  imagesPartTwo: [
    {
      src: "/bt3.jpg",
      alt: "Relume placeholder image 5",
    },
    {
      src: "/bh3.jpg",
      alt: "Relume placeholder image 6",
    },
    {
      src: "/bto2.jpg",
      alt: "Relume placeholder image 7",
    },
    {
      src: "/bt4.jpg",
      alt: "Relume placeholder image 8",
    },
  ],
};
