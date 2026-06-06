import Advantages from "@/components/Advantages";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";
import Reviews from "@/components/Reviews";

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
