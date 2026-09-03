import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Mafaro Mushonga ",
  description: "High-performance Next.js web applications, APIs, and data protection compliant systems.",
  openGraph: {
    title: "Mafaro Mushonga | Software & Systems Engineer",
    description: "View selected enterprise builds, web apps, and data systems.",
    url: "https://your-domain.com",
    images: ["/projects/symposium.webp"], // Uses your top project image as the link preview!
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      {/* Replace G-XYZ1234567 with your actual Measurement ID */}
      <GoogleAnalytics gaId="G-ZRLTGCN8L1" />
    </html>
  );
}
