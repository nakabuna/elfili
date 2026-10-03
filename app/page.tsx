import ProgressBar from "@/components/ProgressBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RosterGrid from "@/components/Roster";
import Timeline from "@/components/Timeline";
import KnowledgeCheck from "@/components/Quiz";
import Reveal from "@/components/Reveal";
import { ChapterGuide, Themes, Compare, Footer } from "@/components/Extras";

export default function Page() {
  return (
    <main className="bg-black">
      <ProgressBar />
      <Navigation />
      <Hero />
      <RosterGrid />
      <Timeline />
      <ChapterGuide />
      <Themes />
      <Compare />
      <Reveal><KnowledgeCheck /></Reveal>
      <Footer />
    </main>
  );
}