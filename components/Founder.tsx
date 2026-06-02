import Image from "next/image";
import profileImage from "../public/profile-image.png";
import Navbar from "./navigation";

export const Founder = () => {
  console.log("Founder component rendered" , profileImage);
  return (
    <>
    <Navbar />
    <section className="px-8 lg:px-20 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <Image
            src={profileImage}
            alt="Founder"
            className="rounded-1xl shadow-2xl border border-yellow-500"
          />
        </div>

        <div>
          <p className="text-yellow-400 uppercase tracking-widest">
            Founder Message
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Building Research That Creates Impact
          </h2>

          <p className="mt-8 text-gray-400 leading-relaxed">
            I founded Research Startup with a vision to make
            high-quality research, analytics and strategic consulting
            accessible to businesses, startups and students.
          </p>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Every project is approached with precision,
            transparency and a commitment to delivering
            actionable insights.
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-yellow-400">
              Adhiraj Pratap Singh
            </h3>

            <p className="text-gray-500">Founder & CEO</p>
          </div>
        </div>

      </div>
    </section>
    </>
    
  );
};

