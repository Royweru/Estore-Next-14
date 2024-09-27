import { NextResponse } from "next/server";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
export async function GET(
  req: Request,
  {
    params,
  }: {
    params: {
      productId: string;
    };
  }
) {
  try {
    const { userId } = await auth();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    const res = await db.product.findUnique({
      where: {
        id: params.productId,
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server Error", { status: 500 });
  }
}

export async function PUT(
  req: Request,
  {
    params,
  }: {
    params: {
      productId: string;
    };
  }
) {
  try {
    const { userId } = await auth();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const body = await req.json();

    const {
      categoryId,
      sizeId,
      isFeatured,
      images,
      color,
      description,
      price,
      name,
    } = body;

    if (!categoryId) return new NextResponse("CategoryId is missing");
    if (!sizeId) return new NextResponse("sizeId is missing");
    if (!images || images.length === 0)
      return new NextResponse("Images are missing");
    if (!description) return new NextResponse("Description is missing");
    if (!price) return new NextResponse("Price is missing");
    await db.product.update({
      where: {
        id: params.productId,
      },
      data: {
        categoryId,
        sizeId,
        color,
        price,
        name,
        isFeatured,
        images: {
          deleteMany: {},
        },
      },
    });
    
    const res = await db.product.update({
        where:{
            id:params.productId
        },
        data:{
            images:{
                createMany:{
                    data:[...images.map((image:{url:string})=>image)]
                }
            }
        }
    })

    return NextResponse.json(res)
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal server Error", { status: 500 });
  }
}
