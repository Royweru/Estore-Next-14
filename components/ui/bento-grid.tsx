import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
   thumbnail,
   thumbnailAlt
}: {
  className?: string;
  thumbnail?:string;
  thumbnailAlt?:string,
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}) => {
  return (
    <div
    className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  bg-neutral-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className=" relative">
        <div className=" w-full  absolute inset-0">
           <Image
            fill
            src={'/bh2.jpg'}
            alt=""
            className="bg-center bg-contain"
            />
        </div>
      </div>
    </div>
  );
};
