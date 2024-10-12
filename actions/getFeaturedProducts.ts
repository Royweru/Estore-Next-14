import db from '@/lib/db'

export const GetFeaturedProducts = async () => {
    try {
        const res = await db.product.findMany({
            where:{
                isFeatured:true
            },
            orderBy:{
                createdAt:"desc"
            },
            include:{
                category:true,
                size:true,
                images:true
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
        console.log("Error fetching featured products"+ error)
        return null
    }
}