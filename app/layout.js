// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
    title: "Moaz Ali | Creative Graphic Designer",
    description:
        "Portfolio of Moaz Ali — a passionate graphic designer specializing in branding, social media visuals, and creative content design.",
    keywords: "Moaz Ali, Graphic Designer, Branding, Visual Design, Portfolio, Logo, Social Media Design",
    openGraph: {
        title: "Moaz Ali | Creative Graphic Designer",
        description:
            "Explore Moaz Ali’s creative portfolio — logo design, brand identity, and visual art projects.",
        url: "https://moaz-portfolio1.netlify.app/",
        siteName: "Moaz Ali Portfolio",
        images: [
            {
                url: "https://moaz-portfolio1.netlify.app/Logo.png",
                width: 1200,
                height: 630,
                alt: "Moaz Ali Graphic Designer Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },

};


export default function RootLayout({ children }) {

    return (
        <html lang="en">
        <head>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=G-JSFE0F3LMN`}
                strategy="afterInteractive"
            />
            <Script id="ga-config" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JSFE0F3LMN', {
              page_path: window.location.pathname,
            });
          `}
            </Script>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
