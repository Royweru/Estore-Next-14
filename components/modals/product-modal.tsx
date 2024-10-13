"use client"
import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { useProductModal } from "@/hooks/use-product-modal";
import Image from "next/image";

export const ProductModal = () => {
    const {isOpen,onClose,data} = useProductModal()
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" text-xl font-semibold text-black/75">
           {data?.name}
          </DialogTitle>
          <DialogDescription className=" text-sm leading-relaxed tracking-tight font-semibold">
            {data.description}
          </DialogDescription>
        </DialogHeader>
        <div className=" md:p-3 lg:p-4 flex flex-col gap-y-1">
         <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-1 lg:gap-0.5">
          {data.images?.map((img)=>(
            <div
            key={img.id}
            className=" col-span-1 relative h-[190px] lg:h-[200px]"
            >
             <Image
              fill
              src={img.url}
              className=" bg-center bg-cover"
               alt={img.url}
              />
            </div>
          ))}
         </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
