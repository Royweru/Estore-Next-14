import React from 'react';
import { CategoriesGrid } from './categories-grid';
import { Category } from '@prisma/client';
import { Product } from '@/types';

export const PopularCategories = ({
  categories
}:{
  categories:(
    Category
&{
    products:Product[]
}
)[]
}) => {
  return (
    <div className=" w-full px-6 lg:px-7 py-8 md:px-10">
           <CategoriesGrid categories={categories} />
    </div>
  );
};


