import Image from "next/image";
import { Founder } from "../components/Founder";
import navigation from "../components/navigation";
import Navbar from "../components/navigation";

export default function Home() {
  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         To get started, edit the page.tsx file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
 
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      
        <Navbar />
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300 mb-6">
              Research • Analytics • Consulting
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transforming Data Into
              <span className="text-cyan-400"> Strategic Decisions</span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              We are a modern research and consulting startup helping businesses,
              students, creators, and organizations unlock the true value of data
              through in-depth research, analytics, and insight-driven solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-cyan-500 hover:bg-cyan-400 transition-all px-6 py-3 rounded-2xl font-semibold text-slate-900 shadow-lg shadow-cyan-500/30">
                Work With Us
              </button>

              <button className="border border-slate-700 hover:border-cyan-400 px-6 py-3 rounded-2xl transition-all text-slate-200">
                <a href="/services" className="text-slate-200">
                  Explore Services
                </a>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm shadow-xl">
              <h3 className="text-4xl font-bold text-cyan-400">100+</h3>
              <p className="mt-2 text-slate-300">Research Reports & Projects</p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 mt-10 backdrop-blur-sm shadow-xl">
              <h3 className="text-4xl font-bold text-cyan-400">24/7</h3>
              <p className="mt-2 text-slate-300">Client Support & Assistance</p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm shadow-xl">
              <h3 className="text-4xl font-bold text-cyan-400">Data</h3>
              <p className="mt-2 text-slate-300">Focused Market Intelligence</p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 mt-10 backdrop-blur-sm shadow-xl">
              <h3 className="text-4xl font-bold text-cyan-400">Growth</h3>
              <p className="mt-2 text-slate-300">Strategies Built on Research</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 md:px-16 lg:px-24 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-5">
              Our startup was founded with one mission — to make high-quality
              research and strategic insights accessible, actionable, and impactful.
              We combine research expertise, data analytics, market intelligence,
              and consulting strategies to help our clients make smarter decisions.
            </p>

            <p className="text-slate-300 leading-relaxed text-lg">
              Whether it’s market research, business analysis, report writing,
              academic assistance, or data-driven consulting, our team works with
              precision, creativity, and innovation to deliver real-world value.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-[32px] p-8 shadow-2xl">
            <div className="space-y-6">
              <div>
                <h4 className="text-cyan-400 font-semibold text-xl">Our Mission</h4>
                <p className="text-slate-300 mt-2 leading-relaxed">
                  To help individuals and organizations leverage research and data
                  for smarter planning, innovation, and sustainable growth.
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold text-xl">Our Vision</h4>
                <p className="text-slate-300 mt-2 leading-relaxed">
                  To become a trusted global research and consulting brand known
                  for insight-driven solutions and impactful decision-making.
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold text-xl">Our Core Values</h4>
                <ul className="mt-3 space-y-2 text-slate-300">
                  <li>• Accuracy & Reliability</li>
                  <li>• Innovation & Creativity</li>
                  <li>• Transparency & Trust</li>
                  <li>• Client-Centric Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      {/* <section className="border-t border-slate-800">
        <Founder />
      </section> */}

      {/* Services Section */}
      <section className="px-6 py-20 md:px-16 lg:px-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold">What We Do</h2>
            <p className="mt-4 text-slate-300 text-lg">
              We provide research-powered solutions designed to help businesses
              and individuals solve challenges, identify opportunities, and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              {
                title: 'Market Research',
                desc: 'Industry trends, competitor analysis, customer insights, and niche validation.',
              },
              {
                title: 'Data Analytics',
                desc: 'Transforming raw data into visual insights and business intelligence.',
              },
              {
                title: 'Business Consulting',
                desc: 'Growth strategies, planning frameworks, and startup consulting solutions.',
              },
              {
                title: 'Research Writing',
                desc: 'Professional reports, documentation, case studies, and analytical content.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 transition-all shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xl">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-semibold mt-6">{service.title}</h3>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 md:px-16 lg:px-24 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Why Clients Choose Us</h2>
          <p className="mt-5 text-slate-300 max-w-3xl mx-auto text-lg">
            We blend research accuracy, business strategy, and modern analytics
            to deliver solutions that are practical, actionable, and results-driven.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              'Tailored solutions for every client',
              'Affordable and scalable services',
              'Data-backed recommendations',
              'Fast turnaround time',
              'Professional and transparent process',
              'Continuous support and collaboration',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-left"
              >
                <div className="text-cyan-400 text-2xl font-bold mb-4">0{index + 1}</div>
                <p className="text-slate-300 text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 rounded-[36px] p-10 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s Build Smarter Decisions Together
          </h2>

          <p className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            From research to strategy, we help transform ideas and data into
            opportunities for growth and innovation.
          </p>

          <button className="mt-8 bg-cyan-500 hover:bg-cyan-400 transition-all px-8 py-4 rounded-2xl font-semibold text-slate-900 text-lg shadow-lg shadow-cyan-500/30">
            Contact Us Today
          </button>
        </div>
      </section>

      
    
    </div>

   
  
          
  

  );
  
}
