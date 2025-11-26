"use client";

import { Eye, Target, Compass } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Vision",
    icon: Eye,
    description:
      "Women In FOSS is an all girls society with its members being female students from the Faculty of Computing of SLIIT. The society provides a supportive environment to help girls grow as professionals in the field of IT with attention to Free/Open-Source Software.",
  },
  {
    title: "Mission",
    icon: Target,
    description:
      "The purpose of the SLIIT Women In FOSS Community is to empower the potential and the contribution of women towards Free/Open-Source Software by providing opportunities and encouraging women to actively engage in Free/Open-Source Software development.",
  },
  {
    title: "Strategy",
    icon: Compass,
    description:
      "Infrastructural and consulting support for FOSS-related initiatives and groups in Sri Lanka. And to help women in the field of tech to develop their personalities.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full bg-[#E0D9FB] py-16 text-center shadow-inner">
        <h1 className="text-5xl font-bold text-[#914FA8]">About Us</h1>
      </div>

      <section className="relative max-w-5xl mx-auto px-4 sm:px-8 md:px-14 py-20">
        <div className="absolute left-[90px] top-10 bottom-10 hidden w-[6px] rounded-full bg-[#914FA8] sm:block" />
        <span className="absolute left-[75px] top-8 hidden h-10 w-10 rounded-full bg-[#914FA8] sm:block" />
        <span className="absolute left-[75px] bottom-8 hidden h-10 w-10 rounded-full bg-[#914FA8] sm:block" />

        <div className="space-y-24">
          {pillars.map((pillar) => (
            <motion.article
              key={pillar.title}
              className="relative pl-0 sm:pl-[220px]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <span className="absolute left-[40px] top-1/2 hidden h-[4px] w-[190px] -translate-y-1/2 rounded-full bg-[#914FA8] sm:block" />

              <div
                className="relative rounded-[40px] border-2 border-transparent bg-gradient-to-br from-white via-[#FEF5FB] to-[#FDEFFC] px-20 py-14 shadow-[-14px_9px_76px_0px_#5F5D60] transition-[border-color,box-shadow] duration-300 ease-out hover:border-[#914FA8] hover:shadow-[0px_32px_90px_rgba(145,79,168,0.45)] focus-within:border-[#914FA8] focus-within:shadow-[0px_32px_90px_rgba(145,79,168,0.5)] active:border-[#914FA8] active:shadow-[0px_32px_90px_rgba(145,79,168,0.55)]"
              >

                <div className="flex flex-col gap-10 text-left sm:flex-row sm:items-center">
                  <div className="shrink-0">
                    <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#914FA8] text-white">
                        <pillar.icon className="h-8 w-8" />
                    </span>
                </div>

                  <div>
                    <h2 className="text-3xl font-semibold text-black">
                      {pillar.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
