import HeroSection from "@/Components/heroSection";
import About from "@/Components/About";
import Work from "@/Components/Work";
import ContactMe from "@/Components/ContactMe";
import NavBar from "@/Components/NavBar";

export default function Home() {
  return (
      <div className=''>
          <NavBar/>
        <HeroSection />
        <About/>
        <Work/>
          <ContactMe/>
      </div>
  );
}
