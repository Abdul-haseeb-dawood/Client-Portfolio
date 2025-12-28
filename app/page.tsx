"use client"
import Header from "@/components/Header";
import Aboute from "@/components/Aboute";
import Skills from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contribution } from "@/components/ProjectContribution";
import PeopleSay from "@/components/PeopleSay";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <Aboute/>
    <Skills/>
    <Experience />
    <Contribution/>
    <PeopleSay/>
    <Contact/>
   </div>
  );
}
