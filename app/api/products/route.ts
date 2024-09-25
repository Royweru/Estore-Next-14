import db from '@/lib/db'
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(
  req: Request
) {
  try {
    const { userId } = await auth();
    if (!userId) return new NextResponse("Unauthorized");
    const res = await db.product.findMany({
      include: {
        images:true
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) return new NextResponse("Unauthorized");
  const body = await req.json();

  const{
    categoryId,
    sizeId,
    isFeatured,
    images,
    color,
    description,
    price,
    name
  } = body


  if(!categoryId) return new NextResponse("CategoryId is missing")
  if(!sizeId) return new NextResponse("sizeId is missing")
  if(!images|| images.length===0) return new NextResponse("Images are missing")
  if(!description) return new NextResponse("Description is missing")
  if(!price) return new NextResponse("Price is missing")

  try {
    const res = await db.product.create({
      data: { 
        categoryId,
        sizeId,
        images:{
            createMany:{
                data:[...images.map((image:{url:string})=>image)]

            }
        },
        color:color ||"",
        price,
        isFeatured:isFeatured ? true :false,
        name,
        description
       },
    });
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
