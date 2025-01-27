import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/footer";
import { Poppins, Geist_Mono } from "next/font/google";

// Import Poppins with specific weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800","900"], 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Furniro",
  description: "Generated by create next app",
};

export default function RootLayout({   children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
