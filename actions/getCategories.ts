
import db from "@/lib/db"
export const GetCategories =async () => {
    try {
    const res =  await db.category.findMany({
        include:{
            products:{
                include:{
                    images:true,
                    size:true,
                }
            }
        }
    })
     const modifiedCategories  =res.map((category)=>{

       const modifiedProducts =  category.products.map((product)=>{
            const numberPrice = product.price.toNumber()
            return{
                ...product,
                 price:numberPrice
            }  })
     return {
        ...category,
        products:modifiedProducts
     }
    }
     )

     return modifiedCategories
    } catch (error) {
        console.error("There was an errior fetching categories" + error)
    }
}
