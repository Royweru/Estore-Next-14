import db from "@/lib/db";
export const GetProducts = async () => {
  try {
    const res = await db.product.findMany({
      include: {
        size: true,
        category: true,
      },
    });
    return res;
  } catch (error) {
    console.log("Error fetching products" + error);
    return null;
  }
};
