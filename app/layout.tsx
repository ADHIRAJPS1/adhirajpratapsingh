import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Script from "next/dist/client/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const [isMobile , setisMobile] = useState(false);

export const metadata: Metadata = {
  title: "ADHIRAJ PRATAP SINGH",
  description: "created by Adhiraj Pratap Singh, a research analyst, consultant and software developer. This website showcases his expertise in research, analytics, strategic consulting and software development. Explore his services, projects and insights to see how he can help businesses and startups make data-driven decisions and achieve their goals.",
};

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-7D51YRTLX2";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>

       <html>
      <body>
        {children}

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

      </body>
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
    </html>
    </html>
  );
}
