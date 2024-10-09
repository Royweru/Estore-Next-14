/* eslint-disable @typescript-eslint/no-unused-vars */
import { Category, Image as ImageType, Size } from "@prisma/client"

export type Product ={
    id:string,
    name:string,
    price:number,
    description:string,
    size:Size,
    color:string,
    images:ImageType[],
    updatedAt:Date,
    createdAt:Date,
    isFeatured:boolean,
    isArchived:boolean
}