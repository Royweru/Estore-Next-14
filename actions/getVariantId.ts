import { lemonSqueezyApiInstance } from '@/utils/axios';


export const GetVariantId = async(productId:number|string) => {
    
  try {
    const res = await lemonSqueezyApiInstance.get(
        `/variants?filter[product_id]=${productId}`
      );
      console.log(res)
    
    return res
  } catch (error) {

     console.error(error)
     return {error:"Could not fetch the variant"}
  }
}
