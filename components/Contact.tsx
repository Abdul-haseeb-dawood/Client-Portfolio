import { SpotlightCard } from "@/components/ui/contact";
import { ShieldCheck, Zap } from "lucide-react";
import { SocialIcons } from "./SocialIcon";

export default function Contact() {
  return (
    <section id="contact">
      <div className="flex flex-col items-center justify-center bg-linear-to-b to-black via-gray-950/90 from-black ">
        <h1 className="text-3xl mx-auto md:text-4xl font-bold bg-linear-to-t to-[#B3E5F5] via-[#D4F1FC]/60 from-[#B3E5F5] bg-clip-text text-transparent">
            🛠Contact
            <p className='text-lg my-1 flex justify-center text-white tracking-tight ml-8 font-normal'>Connect Me</p>
            <div className="w-20 h-1 rounded-2xl bg-linear-to-b to-white via-gray-100/30 from-white mx-auto mr-8"></div>
          </h1>
        <div className="min-h-75 w-full flex items-center justify-center p-4 sm:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-3xl w-full">

            {/* Card 1: Sky Blue Spotlight */}
            <SpotlightCard className="p-6 h-full flex flex-col border-2 border-whote hover:border-[#01f7ff] justify-center items-center gap-4" spotlightColor="rgba(14, 165, 233, 0.25)">
              <div className="h-10 w-10 flex mx-auto items-center justify-center rounded-lg bg-sky-900/20 border border-sky-800/50 mb-2">
                <ShieldCheck className=" text-sky-400 h-5 w-5" />
              </div>
              <div>
                <div className="flex gap-2 justify-items-center justify-center ">
                <h3 className="mt-0.5">DE:</h3>
                <h3 className="text-lg font-semibold text-white mb-1 ">Germany</h3>
                </div>
                <div className="flex mb-1 gap-2 justify-items-center justify-center">
                <p>Email:</p>
                <p className="text-sm text-neutral-400">syed.yarooq1701@gmail.com</p>
                </div>
                <div className="flex gap-2 justify-items-center justify-center">
                <p>Phone:</p>
                <p className="text-sm text-neutral-400 mt-[2.5px]">+49 152 1107 8765</p>
                </div>
              </div>
            </SpotlightCard>

            {/* Card 2: Purple Spotlight */}
            <SpotlightCard className="p-6 h-full flex flex-col justify-center items-center gap-4 border-2 border-whote hover:border-[#640097]" spotlightColor="rgba(168, 85, 247, 0.25)">
              <div className="h-10 w-10 flex mx-auto items-center justify-center rounded-lg bg-purple-900/20 border border-purple-800/50 mb-2">
                <Zap className="text-purple-400 h-5 w-5" />
              </div>
              <div>
                <div className="flex gap-2 justify-items-center justify-center ">
                <h3 className="mt-0.5">PK:</h3>
                <h3 className="text-lg font-semibold text-white mb-1">Pakistan</h3>
                </div>
                <div className="flex mb-1 gap-2 justify-items-center justify-center ">
                <p>Email:</p>
                <p className="text-sm text-neutral-400">syed.yarooq@gmail.com</p>
                </div>
                <div className="flex gap-2 justify-items-center justify-center ">
                <p>Phone:</p>
                <p className="text-sm text-neutral-400  mt-[2.5px]">+92 346 3575378</p>
                </div>
              </div>
            </SpotlightCard>

          </div>
          
        </div>
        <SocialIcons/>
      </div>
    </section> 
  );
}