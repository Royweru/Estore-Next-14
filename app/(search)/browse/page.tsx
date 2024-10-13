
import React from "react";
import { GetProducts } from "@/actions/getProducts";
import { GridDisplay } from "./_components/grid-display";
import { ShowFilter } from "./_components/show-fillter";
import { GetCategories } from "@/actions/getCategories";
import { GetSizes } from "@/actions/getSizes";
const BrowsePage = async ({
  searchParams,
}: {
  searchParams: {
    categoryId?: string;
    sizeId?: string;
  };
}) => {
  const products = await GetProducts({
    categoryId: searchParams.categoryId,
    sizeId: searchParams.sizeId,
  });
  const categrories = await GetCategories();
  const sizes = await GetSizes();
  return (
    <div className=" p-5 flex flex-col gap-y-2 h-full w-full">
      <ShowFilter
        categoryId={searchParams.categoryId}
        sizeId={searchParams.sizeId}
        categories={categrories}
        sizes={sizes}
      />
      <GridDisplay products={products} />
    </div>
  );
};

export default BrowsePage;
