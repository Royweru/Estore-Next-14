import React from "react";

import { SectionHeader } from "./section-header";
import { CardProduct } from "./card-product";
import { ProductCard } from "./product-card";
import { Product } from "@/types";
import { Category, Image as ImageType, Size } from "@prisma/client";

interface ShowcaseProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: (Product & {
   
    images: ImageType[];
    size: Size;
  })[];
  header: string;
  sub?: string;
  categoryName?:string
}

export const Showcase = ({ data, header, sub,categoryName }: ShowcaseProps) => {
  return (
    <>
      <SectionHeader title={header} subtitle={sub} />
      <div className=" w-full relative py-4 bg-transparent">
        <div
          className=" w-full grid px-4 sm:px-6 md:px-8 lg:px-10 
    grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-2 lg:gap-1.5"
        >
          {data?.slice(0, 4).map((product) => (
            <ProductCard key={product.id} data={product} categoryName={categoryName} rating={3} />
          ))}
        </div>
      </div>
    </>
  );
};
