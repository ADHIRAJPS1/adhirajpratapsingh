"use client";

import Navbar from "@/components/navigation";

// export default function Services() {
//     return(
//         <>
//         <Navbar />
//         <div className="min-h-screen flex items-center justify-center">
//             <h1 className="text-4xl font-bold">Services Page</h1>
//         </div>
//         </>
//     )
// }

import { useState } from "react";
import {
  Search,
  BarChart3,
  Database,
  BookOpen,
  Briefcase,
  Code2,
  Microscope,
  ClipboardList,
  Presentation,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Link,
} from "lucide-react";

type Service = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
};

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const services: Service[] = [
    {
      id: 1,
      title: "Market Research",
      category: "Research",
      description:
        "Comprehensive market intelligence, competitor analysis, and industry insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      icon: <BarChart3 size={24} />,
      features: [
        "Industry Analysis",
        "Consumer Research",
        "Competitor Mapping",
        "Trend Forecasting",
      ],
    },
    {
      id: 2,
      title: "Data Analytics",
      category: "Analytics",
      description:
        "Transform raw data into actionable business insights and dashboards.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      icon: <Database size={24} />,
      features: [
        "Power BI",
        "Excel Dashboards",
        "Data Cleaning",
        "Predictive Analytics",
      ],
    },
    {
      id: 3,
      title: "Research Support",
      category: "Research",
      description: "Academic, business, and technical research services.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
      icon: <BookOpen size={24} />,
      features: [
        "Literature Review",
        "Questionnaire Design",
        "Data Analysis",
        "Research Reports",
      ],
    },
    {
      id: 4,
      title: "Business Consulting",
      category: "Consulting",
      description:
        "Growth strategies, business planning, and process optimization.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      icon: <Briefcase size={24} />,
      features: [
        "Business Plans",
        "Growth Strategy",
        "Startup Consulting",
        "Feasibility Studies",
      ],
    },
    {
      id: 5,
      title: "Software Development",
      category: "Development",
      description:
        "Web applications, dashboards, SaaS platforms and automation.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      icon: <Code2 size={24} />,
      features: ["Web Apps", "CRM Systems", "APIs", "Automation Solutions"],
    },
    {
      id: 6,
      title: "R&D Services",
      category: "Research",
      description: "Innovation, technical research, and product validation.",
      image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e",
      icon: <Microscope size={24} />,
      features: [
        "Product Research",
        "Innovation Studies",
        "POC Development",
        "Technology Evaluation",
      ],
    },
    {
      id: 7,
      title: "Survey & Data Collection",
      category: "Analytics",
      description: "Survey creation, execution, and insight extraction.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      icon: <ClipboardList size={24} />,
      features: [
        "Google Forms",
        "Survey Design",
        "Data Validation",
        "Reporting",
      ],
    },
    {
      id: 8,
      title: "Reports & Presentations",
      category: "Consulting",
      description: "Investor decks, premium reports, and presentations.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      icon: <Presentation size={24} />,
      features: [
        "Pitch Decks",
        "Market Reports",
        "PPT Design",
        "Business Documentation",
      ],
    },
  ];

  const categories = [
    "All",
    "Research",
    "Analytics",
    "Consulting",
    "Development",
  ];

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;

    const matchesSearch =
      service.title.toLowerCase().includes(search.toLowerCase()) ||
      service.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-950 text-white">
        {/* Hero */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-yellow-500/10" />

          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our Services
            </h1>

            <p className="max-w-3xl mx-auto text-slate-300 text-lg">
              Delivering research, analytics, consulting, software development,
              and innovation-driven solutions for businesses worldwide.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto mt-10 relative">
              <Search
                className="absolute left-4 top-3.5 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-yellow-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="container mx-auto px-6 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-yellow-500 text-black"
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Service Cards */}
        <section className="container mx-auto px-6 pb-24">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4 text-yellow-400">
                    {service.icon}
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>

                  <p className="text-slate-300 mb-4">{service.description}</p>

                  <button
                    onClick={() =>
                      setExpandedCard(
                        expandedCard === service.id ? null : service.id,
                      )
                    }
                    className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300"
                  >
                    {expandedCard === service.id ? (
                      <>
                        Hide Details <ChevronUp size={18} />
                      </>
                    ) : (
                      <>
                        Learn More <ChevronDown size={18} />
                      </>
                    )}
                  </button>

                  {expandedCard === service.id && (
                    <div className="mt-5 border-t border-slate-700 pt-5 animate-in fade-in">
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-slate-300 flex items-center gap-2"
                          >
                            <ArrowRight size={15} className="text-yellow-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <a
                        href="/contactus"
                        className="mt-6 inline-flex w-full items-center justify-center bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold py-3 rounded-xl hover:scale-105 transition"
                      >
                        Request Proposal
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>

            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Discuss your project with our experts and receive a tailored
              proposal designed specifically for your business goals.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
                <a href="mailto:connect@adhirajpratapsingh.in" className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
                  Schedule Consultation
                </a>

              <button className="border border-yellow-500 text-yellow-400 px-8 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition">
                <a href="/contactus">Contact Us</a>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
