import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Vince Yubal",
  description: "An interactive guide to Vince's life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Background />
        {children}
      </body>
    </html>
  );
}