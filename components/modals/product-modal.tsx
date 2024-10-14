"use client";
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
import { ScrollArea } from "../ui/scroll-area";


export const ProductModal = () => {
  const { isOpen, onClose, data } = useProductModal();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" text-xl font-semibold text-black/75">
            {data?.name}
          </DialogTitle>
          <DialogDescription className=" text-sm leading-relaxed tracking-tight font-semibold">
            {data?.description}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className=" h-80">
          <div className=" md:p-3 lg:p-4 flex flex-col gap-y-2 py-1.5">

            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-1 lg:gap-0.5">
              {data?.images?.map((img) => (
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
            <div className=" w-full flex items-center justify-center gap-x-2  mt-2">

             <div className=" px-4 py-1.5 rounded-md flex items-center justify-center
              bg-neutral-200/75 shadow-medium">
               Size : <span className=" font-bold  ml-2 text-black"> 
                     {data?.size?.value}
               </span>
             </div>

             <div className=" px-4 py-1.5 rounded-md flex items-center justify-center
              bg-neutral-200/75 shadow-medium">
                Category : <span className=" font-bold  ml-2 text-black"> 
                     {data?.category?.name} 
               </span>
             </div>
            
            
            </div>
            <div className=" w-full px-4 font-semibold text-text-primary
             flex items-center justify-center py-1.5 bg-white shadow-small rounded-md">
                <span className=" font-light text-sm mr-3">
                    Kes
                </span>
                  <h4 className=" font-bold text-xl tracking-tight">
                      {data?.price.toLocaleString('en')}
                  </h4>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
