"use client"
import { Button } from "@/components/ui/button";
import { Category, Size } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";

export const ShowFilter = ({
  categoryId,
  sizeId,
  categories,
  sizes,
}: {
  categoryId?: string;
  sizeId?: string;
  categories: Category[];
  sizes: Size[];
}) => {
  const router = useRouter()
  if(!sizeId &&!categoryId) return null
  const size = sizes.find((size) => size.id === sizeId);
  const category = categories.find((category) => category.id === categoryId);
  const reset=()=>{
   router.push("/browse")
  }
  return (
    <div className=" w-full flex items-center justify-start gap-x-4">
      <div className="text-md font-bold text-black tracking-tight font-mono">
        Filters :
      </div>
      {sizeId && (
        <div className=" py-1.5 px-4 font-semibold bg-white  shadow-medium text-sm">
          {size?.value}
        </div>
      )}
      {categoryId && (
        <div className=" py-1.5 px-4 font-semibold bg-white shadow-medium text-sm">
          {category?.name}
        </div>
      )}
      <Button variant="secondary" 
      className=" text-pallete-red font-semibold"
       size="lg"
       onClick={reset}
       >
        Reset filters
      </Button>
    </div>
  );
};
