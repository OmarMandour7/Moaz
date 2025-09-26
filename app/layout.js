// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
    title: "Moaz Portfolio",
    description: "Moaz Ali",
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
