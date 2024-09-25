import { lemonSqueezyApiInstance } from "@/lib/lemonAxios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const body = await req.json();
    
    if (!body.variantId) return new NextResponse("Variant Id is needed");
    const res = await lemonSqueezyApiInstance.get(
      `/variants/${body.variantId}`
    );
    console.log(res.data);

    return NextResponse.json(res.data.id);
  } catch (error) {
    console.log(error);
    return new NextResponse("Error fetching variant Id", { status: 500 });
  }
}
