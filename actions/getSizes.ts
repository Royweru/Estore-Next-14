import db from '@/lib/db'

export const GetSizes = async () => {
    try {
        const res = await db.size.findMany({})
        return res
    } catch (error) {
        console.error("Error fetching sizes" + error)
        return null
    }
}