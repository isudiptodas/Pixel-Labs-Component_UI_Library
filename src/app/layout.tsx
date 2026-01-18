import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixel Labs",
  description: `An open source ui library for react built with react v.19,
     tailwindcss v.4.1, framer-motion.`,
  creator: 'Sudipto Das',
  keywords: ['ui library','framer motion', 'react', 'nextjs', 'tailwindcss', 'components']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
