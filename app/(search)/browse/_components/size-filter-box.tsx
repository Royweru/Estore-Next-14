"use client";

import { Size } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
export const SizeFilterBox = ({ sizes }: { sizes: Size[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const onClick = async (id: string) => {
    let query = {};
    if (searchParams) {
      query = qs.parse(searchParams.toString());
    }
    const updatedQuery = {
      ...query,
      sizeId: id,
    };

    if(searchParams.get("sizeId")===id) delete updatedQuery.sizeId

    const pushUrl = qs.stringifyUrl(
      {
        url: `${window.location.href}`,
        query: updatedQuery,
      },
      {
        
        skipNull: true,
      }
    );

    router.push(pushUrl);
  };
  return (
    <div
      className=" p-1 m-1 grid md:grid-cols-2 lg:grid-cols-3 md:max-w-[200px] mr-auto lg:max-w-[250px]
     max-h-min border-pallete-orange bg-transparent border-4 gap-2"
    >
      {sizes.map((size) => (
        <div
          key={size.id}
          className=" p-4 flex items-center justify-center md:col-span-1 lg:col-span-1 
          text-lg font-bold  font-mono bg-neutral-black  cursor-pointer
           hover:opacity-85"
          onClick={() => onClick(size.id)}
        >
          <p className=" text-white">{size.value}</p>
        </div>
      ))}
    </div>
  );
};
