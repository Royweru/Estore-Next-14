import { Product } from "@/types";
import { Category } from "@prisma/client";
import React from "react";

export const CatgeoryGrid = ({
  className,
  category,
}: {
  className: string;
  category: Category & {
    products: Product[];
  }|null;
}) => {
  return (
    <div
      className={`relative bg-cover bg-center min-h-[250px] md:min-h-[300px] col-span-1 cursor-pointer
      rounded-lg overflow-hidden shadow-lg   group/bento hover:scale-105   ${className}`}
      style={{ backgroundImage: `url(${category?.products[0].images[0].url})` }}
    >
      <div className="absolute inset-0  bg-black bg-opacity-40 flex flex-col items-start gapy-y-2 justify-end pl-2">
        <h2 className="text-pallete-cream text-3xl md:text-45l font-bold font-mono">
          {category.name}
        </h2>
      </div>
    </div>
  );
};
