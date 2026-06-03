import Navbar from "@/components/navigation";
import profileImage from "../../public/profileimage.png";

import { Metadata } from "next";

// dynamic metadata generation based on search params or fetched data
export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { title?: string };
}): Promise<Metadata> {
  const defaultTitle = "About Us - Adhiraj Pratap Singh";
  try {
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = "ABOUT US  PAGE OF ADHIRAJ PRATAP SINGH";
    // if (!response.ok) return { title: searchParams?.title ?? defaultTitle };
    if(!response) return { title: searchParams?.title ?? defaultTitle };
    // const data: { id: number; title: string }[] = await response.json();
    // const title = searchParams?.title ?? data?.[0]?.title ?? defaultTitle;
    return { title : searchParams?.title ?? response ?? defaultTitle };
  } catch (err) {
    return { title: searchParams?.title ?? defaultTitle };
  }
}

// about us page details with dynamic header based on search params or fetched data
// export default async function AboutUs({
//   searchParams,
// }: {
//   searchParams?: { title?: string };
// }) {
//   console.log("AboutUs component rendered");
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!response.ok) throw new Error("Failed to fetch posts");
//   const data: { id: number; title: string }[] = await response.json();
//   // console.log("Fetched data:", data);

//   const header =
//     searchParams?.title ?? data?.[0]?.title ?? "About Us Page";
  
  
  


//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen flex flex-col items-center justify-center px-6">
//         <h1 className="text-4xl font-bold text-center">HEADER  = {header}</h1>
//         <p className="mt-4 text-gray-500 text-center">This is the about us page content.</p>
//         <ul className="mt-4 space-y-2 max-w-3xl w-full">
//           {data.map((item) => (
//             <li key={item.id} className="text-gray-700">
//               {item.title}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Brain,
  Database,
  Globe,
  Lightbulb,
  ShieldCheck,
  Target,
} from "lucide-react";

export default function AboutPage() {
  const services = [
    "Market Research",
    "Business Consulting",
    "Data Analytics",
    "Competitive Intelligence",
    "Startup Advisory",
    "Technology Consulting",
    "Survey Research",
    "Strategic Planning",
  ];

  const stats = [
    { number: "40+", label: "Clients Served" },
    { number: "100+", label: "Projects Delivered" },
    { number: "15+", label: "Industries Covered" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <>
      <Navbar />
    <main className="bg-slate-950 text-white min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-blue-500/10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-yellow-400 uppercase tracking-[4px] text-sm">
                About Research Startup
              </span>

              <h1 className="text-5xl lg:text-7xl font-bold mt-6 leading-tight">
                Transforming
                <span className="text-yellow-400"> Knowledge </span>
                Into Impact
              </h1>

              <p className="mt-8 text-slate-300 text-lg leading-relaxed max-w-xl">
                Empowering businesses, entrepreneurs, researchers,
                and organizations through research, analytics,
                consulting, and innovation-driven solutions.
              </p>

              <button className="mt-10 flex items-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition">
                Explore Services
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full border-2 border-yellow-500 scale-110"></div>

                <Image
                  src={profileImage}
                  alt="Adhiraj Pratap Singh"
                  width={380}
                  height={380}
                  className="rounded-full border-4 border-yellow-500 object-cover text-center"
                />
              </div>

              <h2 className="mt-8 text-3xl font-bold text-yellow-400">
                Adhiraj Pratap Singh
              </h2>

              {/* <p className="text-slate-400 mt-2">
                Founder & Chief Executive Officer
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Who We Are
            </h2>

            <p className="mt-6 text-slate-400 max-w-4xl mx-auto text-lg leading-relaxed">
              Research Startup is a knowledge-driven organization
              dedicated to helping businesses and individuals make
              smarter decisions through data, research, analytics,
              and strategic consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
              <Target className="text-yellow-400 mb-6" size={40} />

              <h3 className="text-3xl font-bold mb-4">
                Our Mission
              </h3>

              <p className="text-slate-400 leading-relaxed">
                To transform information into opportunity by
                delivering research, analytics, consulting,
                technology, and strategic solutions that help
                clients solve challenges and achieve measurable success.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
              <Globe className="text-yellow-400 mb-6" size={40} />

              <h3 className="text-3xl font-bold mb-4">
                Our Vision
              </h3>

              <p className="text-slate-400 leading-relaxed">
                To become a globally trusted knowledge and innovation
                partner empowering organizations through research,
                technology, consulting, and data-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <h2 className="text-center text-5xl font-bold">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-yellow-500 transition"
              >
                <Brain className="text-yellow-400 mb-4" />

                <h3 className="font-semibold text-xl">
                  {service}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <h2 className="text-center text-5xl font-bold">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {[
              {
                icon: <Database />,
                title: "Insight Driven",
              },
              {
                icon: <Briefcase />,
                title: "Business Focused",
              },
              {
                icon: <Lightbulb />,
                title: "Innovation First",
              },
              {
                icon: <BarChart3 />,
                title: "Data Backed",
              },
              {
                icon: <ShieldCheck />,
                title: "Confidential & Secure",
              },
              {
                icon: <Brain />,
                title: "Expert Guidance",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
              >
                <div className="text-yellow-400 mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">

          <div className="grid md:grid-cols-4 gap-8">

            {stats.map((item, index) => (
              <div
                key={index}
                className="text-center bg-slate-900 rounded-3xl p-10"
              >
                <h2 className="text-5xl font-bold text-yellow-400">
                  {item.number}
                </h2>

                <p className="mt-3 text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">

          <h2 className="text-5xl font-bold">
            Founder Message
          </h2>

          <blockquote className="mt-10 text-2xl text-slate-300 italic leading-relaxed">
            “Research and Analytics is not just about finding answers; it is about
            asking the right questions, uncovering opportunities,
            and creating meaningful change.”
          </blockquote>

          <div className="mt-10">
            <h3 className="text-yellow-400 text-2xl font-bold">
              Adhiraj Pratap Singh
            </h3>

            <p className="text-slate-500 mt-2">
              Founder & CEO
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-yellow-500/10 to-blue-500/10 border border-yellow-500/20 rounded-[40px] p-16 text-center">

          <h2 className="text-5xl font-bold">
            Ready to Make Better Decisions?
          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto">
            Partner with Research Startup and gain access to
            research-driven insights, strategic expertise,
            and innovative solutions designed for growth.
          </p>

          <button className="mt-10 bg-yellow-500 text-black px-10 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition">
            <a href="/contactus" className="text-black">
              Contact Us Today
            </a>
          </button>
        </div>
      </section>
    </main>
    </>
  );
}