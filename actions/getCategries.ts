
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
    return res
    } catch (error) {
        console.error("There was an errior fetching categories" + error)
    }
}
