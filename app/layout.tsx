import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="description"
          content="Explore homes for sale in Phoenix, AZ with top realtors. Browse new, luxury, mobile and multi-family properties and find your perfect home today. "
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.davisrealtyteam.com" />
        <meta property="og:title" content="Davis Realty Team" />
        <meta
          property="og:description"
          content="Explore homes for sale in Phoenix, AZ with top realtors. Browse new, luxury, mobile and multi-family properties and find your perfect home today. "
        />
        <meta property="og:image" content="Your Image URL" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
