import { Featured } from "@/components/featured";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/nav";


export default function Home() {
  return (
   <>
    <Navbar />
   <Hero />
   <Featured />
   </>
       
  );
}
