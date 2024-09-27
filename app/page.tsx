

import { GetCategories } from "@/actions/getCategries";
import { Featured } from "@/components/featured";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/nav";
import { Showcase } from "@/components/showcase";


export default async function Home() {
   const categories = await GetCategories()
   console.log(categories)
  return (
   <>
    <Navbar />
   <Hero />
   <Featured />
   <Showcase data={categories[0].products} header="New Arrivals"/>
   </>
       
  );
}
