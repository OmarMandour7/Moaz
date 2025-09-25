import Image from "next/image";
import HeroSection from "@/Components/heroSection";
import About from "@/Components/About";
import Work from "@/Components/Work";
import ContactMe from "@/Components/ContactMe";

export default function Home() {
  return (
      <div className=''>
        <HeroSection />
        <About/>
        <Work/>
          <ContactMe/>
      </div>
  );
}
