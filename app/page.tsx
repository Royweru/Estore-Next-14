import { GetCategories } from "@/actions/getCategories";
import { GetFeaturedProducts } from "@/actions/getFeaturedProducts";

import { Hero } from "@/components/hero";
import { PopularCategories } from "@/components/popular-categories";
import { Services } from "@/components/services";
import { Showcase } from "@/components/showcase";

export default async function Home() {
  const categories = await GetCategories();

  // const HotClassics = categories[0];
  // const newArrrivals = categories[1];
  // const Tshirts = categories[2];
  // //  const Toppers = categories[3]
  // const Hoodies = categories[4];
  return (
    <>
      <Hero />
      <Services />
      <PopularCategories categories={categories}/>
    </>
  );
}
