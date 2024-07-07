import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import { Toaster } from 'react-hot-toast';

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "My new blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} text-[#1d1d1f] min-h-screen`}>
          <Container>
            <Toaster position="top-center" />
            <Header />
            {children}
            {/* <Footer /> */}
          </Container>
      </body>
    </html>
  );
}
