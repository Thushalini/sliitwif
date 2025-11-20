import Image from "next/image";

export default function HomeIntro() {
  return (
    <section className="w-full">

      {/* HERO SECTION */}
      <div className="w-full bg-[#E0D9FB] 
                      pt-20 md:pt-28 lg:pt-32 
                      px-6 md:px-16 lg:pl-[12rem] lg:pr-[10rem] 
                      min-h-[650px] lg:min-h-[757px] 
                      relative overflow-hidden">

        <div className="max-w-[1400px] mx-auto 
                        grid grid-cols-1 md:grid-cols-2 
                        items-center md:items-start 
                        gap-10 md:gap-0">

          {/* LEFT TEXT */}
          <div className="text-center md:text-left 
                          pt-4 md:pt-[40px] 
                          pb-10 lg:pb-[120px]">

            <h1
              style={{ fontFamily: "Inter, sans-serif", lineHeight: "60px" }}
              className="text-[34px] md:text-[46px] lg:text-[55px] 
                         font-extrabold text-[#914FA8] 
                         leading-[1.2] 
                         mb-4 md:mb-4 lg:mb-6 
                         max-w-full md:max-w-[500px] lg:max-w-[600px] 
                         mx-auto md:mx-0"
            >
              SLIIT Women In FOSS <br /> Community
            </h1>

            <p
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
              className="text-[#5F4D6C] 
                         text-[15px] md:text-[15px] lg:text-[16px] 
                         leading-[24px] 
                         max-w-[330px] md:max-w-[420px] lg:max-w-[560px] 
                         mx-auto md:mx-0 
                         mb-8 md:mb-20 lg:mb-32"
            >
              Empowering Women with Open-Source at SLIIT. A community of
              passionate volunteers promoting, inspiring, and diversifying the
              use of Free Open Source Software among women.
            </p>

            <button
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              className="bg-[#914FA8] text-white 
                         text-[16px] md:text-[18px] lg:text-[20px] 
                         py-3 rounded-lg 
                         w-full max-w-[260px] md:max-w-[260px] lg:w-[300px] 
                         mx-auto md:mx-0 
                         hover:bg-[#7d3c98] transition"
            >
              Become A Member
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/sliitwif/images/hero.png"
              alt="Women in FOSS Illustration"
              width={420}
              height={500}
              className="object-contain 
                         md:w-[480px] md:h-[540px] 
                         lg:w-[568px] lg:h-[639px]"
              priority
            />
          </div>

        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="w-full bg-white py-16 lg:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <h2
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-[28px] md:text-[30px] lg:text-[35px] 
                       font-semibold text-[#914FA8] 
                       text-center md:text-left 
                       mb-6"
          >
            Who We Are?
          </h2>

          <div className="bg-[#E1D9FD] 
                          p-6 md:py-6 md:px-12 lg:py-8 lg:px-20 
                          rounded-[20px] shadow-sm">

            <p
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-[#47034E] 
                         text-[15px] md:text-[16px] lg:text-[18px] 
                         font-light leading-[24px] md:leading-[26px] 
                         text-center md:text-left 
                         max-w-[340px] md:max-w-full 
                         mx-auto md:mx-0"
            >
              Women in FOSS is an all-girls society with its members being female
              students from the Faculty of Computing of SLIIT. The society provides a
              supportive environment to help girls grow as professionals.
            </p>

          </div>
        </div>
      </div>

      {/* MASCOT SECTION */}
      <div className="relative w-full bg-white 
                      px-6 md:px-12 
                      overflow-hidden 
                      pt-16 md:pt-28 lg:pt-40 
                      pb-20">

        {/* Wave only on desktop */}
        <div className="absolute top-0 left-0 w-full z-0 hidden lg:block">
          <Image
            src="/sliitwif/images/nifi-wave.png"
            alt="Wave"
            width={2000}
            height={800}
            className="w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto 
                        grid grid-cols-1 md:grid-cols-2 
                        items-center gap-10 
                        z-10 
                        lg:mt-[-80px]">

          {/* Mascot Image */}
          <div className="flex justify-center md:justify-start 
                          -mt-4 md:-mt-10 lg:-mt-20">
            <Image
              src="/sliitwif/images/mascot-nifi.png"
              alt="Nifi Mascot"
              width={260}
              height={260}
              className="md:w-[300px] md:h-[300px] 
                         lg:w-[360px] lg:h-[360px]"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-center px-2 md:px-4">

            <h2
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
              className="text-[26px] md:text-[30px] lg:text-[35px] 
                         text-[#914FA8] 
                         mb-4 leading-tight"
            >
              Meet Nifi <br /> Our Official Mascot
            </h2>

            <p
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 300 }}
              className="text-[#47034E] 
                         text-[15px] md:text-[16px] lg:text-[18px] 
                         leading-[24px] md:leading-[26px] 
                         max-w-[340px] md:max-w-[500px] lg:max-w-[760px] 
                         mx-auto md:mx-0"
            >
              Nifi is thrilled to be a part of women tech enthusiasts as our cute,
              fluffy official mascot of the SLIIT Women In FOSS Community.
            </p>

          </div>
        </div>
      </div>

    </section>
  );
}
