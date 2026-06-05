// export default function AboutUs() {
//     return (
//         <div className="min-h-screen flex items-center justify-center">
//             <h1 className="text-4xl font-bold">Contact Us Page</h1>
//         </div>
//     )

//     }

import React from "react";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  //   LinkedinIcon,
  MessageCircle,
} from "lucide-react";
import profileImage from "../../public/profileimage.png";
import Navbar from "@/components/navigation";
import InquiryForm from "@/components/InquiryForm";

const Contact = () => {
  // console.log( " profile Image = ", profileImage);
  return (
    <div className="bg-[#020817] min-h-screen text-white overflow-hidden">
      <Navbar />
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 lg:px-20 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <div>
            <span className="border border-yellow-500/40 px-4 py-2 rounded-full text-yellow-400 text-sm">
              CONTACT ADHIRAJ PRATAP SINGH
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
              Let's Build
              <span className="block text-yellow-400">
                Meaningful Solutions
              </span>
            </h1>

            <p className="text-slate-400 text-lg mt-6 leading-relaxed">
              Get expert support in research, consulting, business intelligence,
              data analytics, and software development.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="mailto:connect@adhirajpratapsingh.in"
                className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Schedule Consultation
              </a>

              <a
                href="https://wa.me/919696678829"
                target="_blank"
                rel="noreferrer"
                className="border border-yellow-500 px-8 py-4 rounded-xl hover:bg-yellow-500 hover:text-black transition"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

          {/* Founder Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500 blur-3xl opacity-20 rounded-full"></div>

              <Image
                src={profileImage}
                alt="Adhiraj Pratap Singh"
                width={380}
                height={380}
                className="relative rounded-full border-4 border-yellow-500 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="container mx-auto px-6 lg:px-20 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
            <Mail className="text-yellow-400 mb-4" size={30} />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-slate-400 text-sm">
              connect
              <br />
              @adhirajpratapsingh.in
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
            <Phone className="text-yellow-400 mb-4" size={30} />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-slate-400">+91 9696678829</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
            <MessageCircle className="text-yellow-400 mb-4" size={30} />
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-slate-400">Available Mon - Sat</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
            <MapPin className="text-yellow-400 mb-4" size={30} />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-slate-400 text-sm">
              Sector 23, Noida
              <br />
              Uttar Pradesh - 201301
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="container mx-auto px-6 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-4">Send an Inquiry</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Fill in the details below and we&apos;ll get back to you as soon as possible.
            </p>
            <InquiryForm />
          </div>

          {/* Founder Card */}
          <div className="bg-gradient-to-br from-[#0F172A] to-[#111827] border border-yellow-500/20 rounded-3xl p-10">
            <img
              loading="eager"
              src={profileImage.src}
              alt="Founder"
              className="w-36 h-36 object-cover rounded-full border-4 border-yellow-500 mx-auto"
            />

            <h3 className="text-center text-3xl font-bold mt-6">
              Adhiraj Pratap Singh
            </h3>

            {/* <p className="text-center text-yellow-400 mt-2">
              Founder • Research Consultant
            </p> */}

            <p className="text-slate-400 mt-6 text-center leading-relaxed">
              Helping businesses make informed decisions through research-driven
              strategies, data intelligence, consulting, and software solutions.
            </p>

            <div className="space-y-4 mt-8">
              <a
                href="mailto:connect@adhirajpratapsingh.in"
                className="flex items-center gap-3 justify-center w-full"
              >
                <Mail size={18} className="text-yellow-400 items-center" />
                connect@adhirajpratapsingh.in
              </a>

              <a
                href="tel:+919696678829"
                className="flex items-center gap-3 justify-center w-full"
              >
                <Phone size={18} className="text-yellow-400" />
                +91 9696678829
              </a>

              <a
                href="https://www.linkedin.com/in/adhiraj-p-a05925171/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 justify-center w-full"
              >
                {/* <Linkedin size={18} className="text-yellow-400" /> */}
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 lg:px-20 pb-24">
        <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-300/10 border border-yellow-500/30 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold">Ready to Discuss Your Project?</h2>

          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Let's explore how research, analytics, and technology can help your
            organization grow.
          </p>

          <a
            href="mailto:connect@adhirajpratapsingh.in"
            className="inline-block mt-8 bg-yellow-500 text-black px-10 py-4 rounded-xl font-semibold"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
