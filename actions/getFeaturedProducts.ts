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
                size:true
            }
        })

        return res
    } catch (error) {
        console.log("Error fetching featured products"+ error)
        return null
    }
}