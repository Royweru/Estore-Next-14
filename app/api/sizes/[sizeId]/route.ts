import db from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"


export async function GET(
    req:Request,
    {params}:{
        params:{sizeId:string}
    }
) {
    const {userId} =  auth()

    if(!userId) return new NextResponse("Unauthorized")
  

    try {
        const res = await db.size.findUnique({
            where:{
                id:params.sizeId
            }
        })
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal server error",{status:500})
    }
}
export async function PUT(
    req:Request,
    {params}:{
        params:{sizeId:string}
    }
) {
    const {userId} =  auth()

    if(!userId) return new NextResponse("Unauthorized")
    const body =await req.json()
    console.log(body)
    try {
        const res = await db.size.update({
            where:{
                id:params.sizeId
            },
            data:{
                ...body
            }
        })
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
        return new NextResponse("Internal server error",{status:500})
    }
}
export async function DELETE(
    req: Request,
    {
      params,
    }: {
      params: { sizeId: string };
    }
  ) {
    try {
      const { userId } = auth();
      if (!userId) return new NextResponse("Unauthorized", { status: 401 });
      const res = await db.size.delete({
        where: {
          id: params.sizeId,
        },
      });
      return NextResponse.json(res);
    } catch (error) {
      console.log(error);
      return new NextResponse("Internal server Error", { status: 500 });
    }
  }
  