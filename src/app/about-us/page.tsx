import { Lightbulb } from "lucide-react";

const pillars = [
  {
    title: "Vision",
    description:
      "Our strategic approach focuses on community building, education, and mentorship to create sustainable impact in the open source ecosystem.",
  },
  {
    title: "Mission",
    description:
      "Our strategic approach focuses on community building, education, and mentorship to create sustainable impact in the open source ecosystem.",
  },
  {
    title: "Strategy",
    description:
      "Our strategic approach focuses on community building, education, and mentorship to create sustainable impact in the open source ecosystem.",
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

        <div className="space-y-20">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="relative pl-0 sm:pl-[220px]"
            >
              <span className="absolute left-[40px] top-1/2 hidden h-[4px] w-[190px] -translate-y-1/2 rounded-full bg-[#914FA8] sm:block" />

              <div className="relative rounded-[40px] bg-gradient-to-br from-white via-[#FEF5FB] to-[#FDEFFC] px-20 py-14 shadow-[-14px_9px_76px_0px_#5F5D60]">

                <div className="flex flex-col gap-10 text-left sm:flex-row sm:items-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#914FA8] text-white">
                    <Lightbulb className="h-7 w-7" />
                  </span>

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
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
