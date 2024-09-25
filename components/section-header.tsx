import React from "react";

export const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className=" w-full relative flex flex-col justify-center items-start lg:px-2 lg:my-3 md:my-3 my-2">
      <div className=" relative  w-full flex justify-start mb-2 pl-2">
        <h2 className=" lg:text-7xl font-bold md:text-5xl text-4xl text-pallete-orange leading-snug italic">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className=" text-normal pl-4  font-light text-text-primary tracking-wide leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
