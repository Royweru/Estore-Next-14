
import db from "@/lib/db"
export const GetCategories =async () => {
    try {
    const res =  await db.category.findMany({
        include:{
            products:{
                include:{
                    images:true
                }
            }
        }
    })
     const modifiedCategories  =res.map((result)=>{
       const modifiedProducts =  result.products.map((product)=>{
            const numberPrice = product.price.toNumber()
            return{
                ...product,
                 price:numberPrice
            }
        })
        return{
        ...result,
        products:modifiedProducts
        }
    }
     )

     return modifiedCategories
    } catch (error) {
        console.error("There was an errior fetching categories" + error)
    }
}
