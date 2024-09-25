
import React from "react";
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { Items } from "@/data/bento-items";

export function FeatureGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {Items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          className={item.className}
           thumbnail={item.thumbnail}
        />
      ))}
    </BentoGrid>
  );
}
