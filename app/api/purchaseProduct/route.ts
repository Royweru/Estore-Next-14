import { lemonSqueezyApiInstance } from "@/lib/lemonAxios";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const reqData = await req.json();
    console.log(reqData)
    const{userId} =auth()

    if (!reqData.productId)
      return NextResponse.json("ProductId is required", { status: 400 });

    const res = await lemonSqueezyApiInstance.post("/checkouts", {
      data: {
        type: "checkouts",
        attributes:{
            checkout_data:{
                custom:{
                    user_id:`${userId}`
                }
            }
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMON_SQUEEZY_STORE_ID.toString(),
            },
          },
          variant: {
            data: {
              type: "variants",
              id: reqData.productId.toString(),
            },
          },
        },
      },
    }
 
);
const checkoutUrl = res.data.data.attributes.url

console.log(res.data)
return NextResponse.json(checkoutUrl)
  } catch (error) {
    console.error(error);
    return NextResponse.json("Failed to complete payment", { status: 500 });
  }
}
