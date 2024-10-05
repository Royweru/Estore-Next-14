
import React from "react";
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { Product } from "@/types";


interface FeatureGridProps{
  products:Product[]
}

export function FeatureGrid(
  {products}:FeatureGridProps
) {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {products.slice(0,4).map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.name}
          description={item.description}
          className={""}
           thumbnail={item.images[0].url}
        />
      ))}
    </BentoGrid>
  );
}
