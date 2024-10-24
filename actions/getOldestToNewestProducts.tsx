
import db from '@/lib/db'
export const oldestToNewestProducts =async () => {
 try {
    const res = await db.product.findMany({
        orderBy:{
            createdAt:"asc"
        },
        include:{
            images:true,
            category:true,
            size:true
        }
    })
    const modidfiedRes = res.map((product)=>{
        const modifiedPrice = product.price.toNumber()
        return {
            ...product,
            price:modifiedPrice
        }

    })
   return modidfiedRes
 } catch (error) {
    console.error(error)
    return null
 }
}
