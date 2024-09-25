"use client";
import { cn } from "@/lib/utils";
import axios from "axios";
import React, { useState } from "react";
interface ProductTestCardProps {
  prod: any;
  item: any;
  variantId :string
}
export const ProductTestCard = ({ prod }: ProductTestCardProps) => {
    const [isLoding ,setIsLoading] = useState(false)
    const paymentHandler =async ()=>{
        
      try {
        setIsLoading(true)
        const result = await axios.post('/api/purchaseProduct',{
            productId:'523293'
            
        })
        console.log(result.data)
        window.open(`${result.data}`,'_blank')
      } catch (error) {
         console.log(error)
      }finally{
        setIsLoading(false)
      }
    }
  return (
    <div
      className={cn(" col-span-1 bg-white  shadow-medium  cursor-pointer hover:scale-105",
       isLoding && 'opacity-55'
      )}
      onClick={paymentHandler}
    >
      <div className=" flex flex-col space-y-2">
        <div className=" relative">
          <img
            src={prod.large_thumb_url}
            alt={prod.name}
            className=" bg-cover bg-center"
          />
        </div>
        <div className=" flex flex-col gap-y-2 pl-3">
          <div className=" font-semibold text-lg text-text-primary">
            <h4>{prod.name}</h4>
          </div>
          <p className=" font-normal pl-2 text-pallete-orange tracking-wide ">
            {prod.price_formatted}
          </p>
          <h2 className=" text-xl font-bold text-pallete-red tracking-wide"> 
             BUY now!!
          </h2>  
        </div>
      </div>
    </div>
  );
};
