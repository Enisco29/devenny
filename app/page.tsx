import Client from "@/components/Client";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import MyApproach from "@/components/MyApproach";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavber";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects
        magicBtnUrl="/projects"
        magicBtntitle="View all"
        maxProjects={4}
          heading={
            <h1 className="text-3xl font-bold lg:text-4xl text-white text-center">
              A small selection of{" "}
              <span className="text-purple-300">recent projects</span>
            </h1>
          }
        />
        <Client />
        <Experiences />
        <MyApproach />
        <Footer />
      </div>
    </main>
  );
}
