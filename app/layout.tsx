import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Davis Realty Team",
  description:
    "The Davis Realty Team, a dynamic couple from Phoenix, AZ, dedicated to helping clients find their dream homes. With a passion for real estate and personalized service, they make buying and selling seamless and stress-free.",
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
          content="The Davis Realty Team, a dynamic couple from Phoenix, AZ, dedicated to helping clients find their dream homes. With a passion for real estate and personalized service, they make buying and selling seamless and stress-free."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.davisrealtyteam.com" />
        <meta property="og:title" content="Davis Realty Team" />
        <meta
          property="og:description"
          content="The Davis Realty Team, a dynamic couple from Phoenix, AZ, dedicated to helping clients find their dream homes. With a passion for real estate and personalized service, they make buying and selling seamless and stress-free."
        />
        <meta property="og:image" content="Your Image URL" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
