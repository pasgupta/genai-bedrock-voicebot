import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import ConfigureAmplifyClientSide from "@/components/ConfigureAmplify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloudevangelist - NextJS app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} data-theme="light">
        <ConfigureAmplifyClientSide />
        {children}
      </body>
    </html>
  );
}

{
  /* <div className="grid h-screen grid-rows-[auto_1fr_auto]">
<ConfigureAmplifyClientSide />
<Header />

<Footer />
</div> */
}