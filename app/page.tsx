import Advantages from "@/components/home/Advantages";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import PopularCourses from "@/components/home/PopularCourses";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <PopularCourses />
      <Reviews />
      <Faq />
    </>
  );
}
