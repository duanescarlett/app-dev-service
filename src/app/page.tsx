import Bento from "@/components/Bento";
import Clients from "@/components/Clients";
import DevProcess from "@/components/DevProcess";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 
    flex justify-center items-center 
    flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Bento />
        {/* <Grid /> */}
        <RecentProjects />
        <Clients />
        <Services />
        <DevProcess />
        <Footer />
      </div>
    </main>
  );
}
