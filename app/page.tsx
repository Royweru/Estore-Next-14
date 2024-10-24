import { GetCategories } from "@/actions/getCategories";
import { GetFeaturedProducts } from "@/actions/getFeaturedProducts";
import { FeaturedProducts } from "@/components/featured-products";
import { Footer } from "@/components/footer";

import { Hero } from "@/components/hero";
import { PopularCategories } from "@/components/popular-categories";
import { Services } from "@/components/services";
import { Showcase } from "@/components/showcase";


export default async function Home() {
  const categories = await GetCategories();
 const featuredProducts = await GetFeaturedProducts()
  // const HotClassics = categories[0];
  // const newArrrivals = categories[1];
  // const Tshirts = categories[2];
  // //  const Toppers = categories[3]
  const Hoodies = categories[4];
  
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
    console.log(`Round ${i} : Number ${sum}`)
}

console.log("The sum of the first 10 natural numbers is: " + sum);
  return (
    <>
      <Hero />
      <Services />
      <PopularCategories categories={categories}/>
      <FeaturedProducts products={featuredProducts} />
      <Showcase
       data={Hoodies.products} 
      header="Out of this world Hoodies" 
      sub="Purchase a T-shirt right now at offer and 50% discount"
      categoryName={Hoodies.name}
      />
     <Footer />
    </>
  );
}
