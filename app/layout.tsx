import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Find Best Realtors & Homes for Sale in Phoenix, AZ",
  description:
    "Explore homes for sale in Phoenix, AZ with top realtors. Browse new, luxury, mobile and multi-family properties and find your perfect home today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
