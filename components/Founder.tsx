import Image from "next/image";
import profileImage from "../public/profile-image.png";
import Navbar from "./navigation";

export const Founder = () => {
  console.log("Founder component rendered" , profileImage);
  return (
    <>
    <Navbar />
    <section className="px-4 sm:px-8 lg:px-20 py-12 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

        <div>
          <Image
            loading="eager"
            src={profileImage}
            alt="Founder"
            className="rounded-lg sm:rounded-2xl shadow-2xl border border-yellow-500 max-w-full h-auto"
          />
        </div>

        <div>
          <p className="text-yellow-400 uppercase tracking-widest text-xs sm:text-sm">
            Founder Message
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4">
            Building Research That Creates Impact
          </h2>

          <p className="mt-4 sm:mt-8 text-gray-400 leading-relaxed text-sm sm:text-base">
            I founded Research Startup with a vision to make
            high-quality research, analytics and strategic consulting
            accessible to businesses, startups and students.
          </p>

          <p className="mt-3 sm:mt-5 text-gray-400 leading-relaxed text-sm sm:text-base">
            Every project is approached with precision,
            transparency and a commitment to delivering
            actionable insights.
          </p>

          <div className="mt-6 sm:mt-10">
            <h3 className="text-lg sm:text-2xl font-bold text-yellow-400">
              Adhiraj Pratap Singh
            </h3>

            <p className="text-gray-500 text-sm sm:text-base">Founder & CEO</p>
          </div>
        </div>

      </div>

      </section>
    </>
    
  );
};

