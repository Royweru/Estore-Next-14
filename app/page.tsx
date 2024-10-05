

import { GetCategories } from "@/actions/getCategries";
import { GetFeaturedProducts } from "@/actions/getFeaturedProducts";

import { Hero } from "@/components/hero";
import { Navbar } from "@/components/nav";
import { Showcase } from "@/components/showcase";


export default async function Home() {
   const categories = await GetCategories()
   const featuredProducts = await GetFeaturedProducts()
   console.log(featuredProducts)

   const HotClassics = categories[0]
   const newArrrivals = categories[1]
   const Tshirts = categories[2]
  //  const Toppers = categories[3]
   const Hoodies = categories[4]
  return (
   <>
   <Hero />  
   <Showcase data={HotClassics.products} header={HotClassics.name}/>
   <Showcase data={newArrrivals.products} header={newArrrivals.name}/>
   <Showcase data={Tshirts.products} header={Tshirts.name}/>
   <Showcase data={Hoodies.products} header={Hoodies.name}/>

   </>
       
  );
}
