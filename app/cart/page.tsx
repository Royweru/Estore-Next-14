"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Check, XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const CartPage = () => {
  const { items, removeItem } = useCart();

  const totalPrice = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  const sum =   totalPrice + 1400 +0
  return (
    <div className="min-h-screen w-full p-4 md:p-12 lg:p-16 grid md:grid-cols-10 grid-cols-4 lg:grid-cols-12 gap-3 md:gap-2 lg:gap-1.5">
      {items.length > 0 ? (
        <>
          <div className=" flex flex-col gap-y-2 h-full col-span-4 md:col-span-6 lg:col-span-8">
            <h1 className="text-3xl font-bold text-pallete-orange">
              Your Cart
            </h1>
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-small rounded-lg p-1.5 h-[150px] lg:h-[200px] relative w-full 
              shadow hover:shadow-xl flex items-center transition-shadow duration-300 cursor-pointer gap-x-4"
              >
                <div className=" w-[250px] h-full relative">
                  <Image
                    fill
                    className=" bg-center bg-contain"
                    alt=""
                    src={item.images[0].url}
                  />
                </div>
                <div
                  className=" relative flex flex-col w-full
                 justify-between h-full py-3"
                >
                  <div>
                    <div className=" text-start text-xl font-semibold flex items-start justify-between">
                      <p>{item.name}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                      >
                        <XIcon className=" size-4 text-black" />
                      </Button>
                    </div>
                    <div className=" font-light text-md flex flex-col gap-y-0.5 ">
                      <p className=" font-mono tracking-wide text-pallete-red/55">
                        {item.size.value}
                      </p>
                      <p className=" text-md font-bold font-mono flex items-center">
                        <span className=" font-light text-sm mr-4">Kes</span>
                        {item.price}
                      </p>
                    </div>
                  </div>

                  <div className=" relative textstart px-2 w-full flex items-center">
                    <Check className=" text-emerald-400 size-4 font-bold  mr-2" />
                    <p className=" text-md font-semibold">In Stock</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className=" col-span-4 bg-neutral-200/75 min-h-[250px]  my-3 rounded  flex flex-col justify-between p-5">
            
            <div className=" flex flex-col gap-y-6">
            <h2 className=" text-xl lg:text-2xl font-bold text-pallete-orange text-center">
              Order Summary
            </h2>

              <div className=" relative w-full px-2 flex items-center justify-between  border-b border-neutral-600/75 py-4">
                <p className=" font-normal text-xl ">Subtotal :</p>
                <span className=" font-mono text-md font-normal text-black">
                  {totalPrice.toLocaleString('en')}
                </span>
              </div>
              <div className=" relative w-full px-2 flex items-center justify-between  border-b border-neutral-600/75 py-4">
                <p className=" font-normal text-xl ">Shipping estimate :</p>
                <span className=" font-mono text-md font-normal text-black">
                1,400
                </span>
              </div>
              <div className=" relative w-full px-2 flex items-center justify-between  border-b border-neutral-600/75 py-4">
                <p className=" font-normal text-xl ">Tax estimate :</p>
                <span className=" font-mono text-md font-normal text-black">
                  0
                </span>
              </div>
              <div className=" flex flex-col gap-y-2">
              <div className=" relative w-full px-2 flex items-center  justify-between">
                <p className=" font-bold text-xl ">Total price :</p>
                <span className=" font-mono text-md  font-black text-zinc-900/85 text-black">
                 {sum.toLocaleString('en')}
                </span>
              </div>
              <Button className=" w-full font-semibold
               text-pallete-red" variant="secondary" 
              >
                  Proceed to checkout
              </Button>
              </div>
            

            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-600 text-center text-xl">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;
