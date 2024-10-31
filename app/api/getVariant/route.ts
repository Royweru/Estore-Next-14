import { lemonSqueezyApiInstance } from "@/utils/axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const body = await req.json();
    const {productId } = body
    if(!productId) return new NextResponse("Product id is missing",{status:401})
    if (!body.variantId) return new NextResponse("Variant Id is needed");
    const res = await lemonSqueezyApiInstance.get(
      `/variants?filter[product_id]=${body.productId}`
    );
    console.log(res.data);

    return NextResponse.json(res.data.id);
  } catch (error) {
    console.log(error);
    return new NextResponse("Error fetching variant Id", { status: 500 });
  }
}
