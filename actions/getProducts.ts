import db from "@/lib/db";
interface Iparams {
  categoryId?: string;
  sizeId?: string;
}
export const GetProducts = async (Query: Iparams) => {
  try {
    const res = await db.product.findMany({
      where: Query,
      include: {
        size: true,
        images: true,
        category: true,
      },
    });
    const modidfiedRes = res.map((product) => {
      const modifiedPrice = product.price.toNumber();
      return {
        ...product,
        price: modifiedPrice,
      };
    });
    return modidfiedRes;
  } catch (error) {
    console.log("Error fetching products" + error);
    return null;
  }
};
