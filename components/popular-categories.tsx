import React from "react";
import { CategoriesGrid } from "./categories-grid";
import { Category } from "@prisma/client";
import { Product } from "@/types";
import { SectionHeader } from "./section-header";

export const PopularCategories = ({
  categories,
}: {
  categories: (Category & {
    products: Product[];
  })[];
}) => {
  return (
    <>
      <SectionHeader
        title="Our popular categories"
        subtitle="This are the most popular categories in our store"
      />
      <div className=" w-full px-6 lg:px-7 py-8 md:px-10">
        <CategoriesGrid categories={categories} />
      </div>
    </>
  );
};
