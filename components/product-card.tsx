"use client";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";
import { Category, Image as ImageType, Size } from "@prisma/client";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import React, { ButtonHTMLAttributes } from "react";
import { FaStar } from "react-icons/fa"; // For the star rating

export const ProductCard = ({
  data,
  rating,
  categoryName
}: {
  data: Product & {
    images: ImageType[];
    category?: Category; 
    size:Size// Assuming you have a rating field in your product model
  };
  rating: number;
  categoryName?:string
}) => {
  const {addItem,removeItem,removeAll} = useCart()
  // Function to render stars based on product rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          } h-4 w-4`}
        />
      );
    }
    return stars;
  };

  const onAddCart = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    addItem(data)

  };
  const handleClick = () => {
   
  };

  return (
    <div
      className="col-span-1 cursor-pointer bg-transparent  rounded-lg overflow-hidden transition-transform "
      onClick={handleClick}
    >
      <div className="flex flex-col gap-y-3 relative w-full p-4">
        {/* Image container */}
        <div className="w-full md:h-[200px] h-[200px] rounded-lg relative group">
          <Image
            fill
            src={data.images[0]?.url}
            className="bg-cover bg-center group-hover:hidden rounded-lg"
            alt={data.name}
          />
          <Image
            fill
            src={data?.images[1]?.url}
            className="bg-cover bg-center group-hover:block hidden rounded-lg"
            alt={data.name}
          />
        </div>

        {/* Content container */}
        <div className="w-full flex flex-col space-y-2 items-start">
          {/* Category */}
          <div className="font-light text-neutral-600 text-sm italic">
            <p>{data.category?.name || categoryName}</p>
          </div>

          {/* Product Name */}
          <h4 className="font-semibold text-md text-pallete-orange truncate">
            {data.name}
          </h4>

          {/* Star Rating */}
          <div className="flex space-x-1">{renderStars(rating)}</div>

          {/* Price and Availability */}
          <div className="flex items-center justify-between w-full relative px-2">
            <p className="font-light text-neutral-black">
              Kes
              <span className="ml-1 font-black text-lg text-black">
                {data.price.toLocaleString()}
              </span>
            </p>

            <p className="text-xs font-mono font-light text-gray-700/85">
              Available
            </p>
          </div>

          {/* Action Button (Optional, can be customized) */}
          <button
            className="bg-pallete-red text-white px-3 py-1 rounded-md mt-2 
          hover:bg-pallete-red/85 transition-all flex items-center gap-x-3"
          onClick={onAddCart}
          >
            <ShoppingCartIcon className=" size-5 text-brand-white" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
