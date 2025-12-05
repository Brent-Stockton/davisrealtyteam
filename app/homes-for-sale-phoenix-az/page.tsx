import type { Metadata } from "next";
import StickyNavbar from "@/Components/NavBar";
import Footer from "@/Pages/Footer/Footer";
import ContactForm from "@/Pages/Contact/Contact";
import Hero from "@/Pages/Hero.tsx";

export const metadata: Metadata = {
  title:
    "Homes for Sale in Phoenix, AZ | Residential, Commercial & Investment Real Estate",
  description:
    "Work with a trusted Realtor in Phoenix AZ for buying, selling and investing in residential and commercial properties across the Valley.",
  openGraph: {
    type: "website",
    url: "https://www.davisrealtyteam.com/homes-for-sale-phoenix-az",
    title:
      "Homes for Sale in Phoenix, AZ  | Residential, Commercial & Investment Real Estate",
    description:
      "Local Phoenix Realtor offering expert guidance for home buyers, sellers, investors and commercial real estate clients across the Valley.",
  },
};

export default function HomesForSaleInPhoenixAZPage() {
  return (
    <main>
      {/* Header / Navbar */}
      <StickyNavbar />

      {/* 👇 Same banner / hero as home page */}
      <section id="hero">
        <Hero />
      </section>

      {/* Inner SEO content section  */}
      <section
        style={{
          padding: "40px 16px 60px",
          background: "#f7f7f7",
        }}
      >
     <div
  className="seo-inner-page"
  style={{
    maxWidth: "960px",
    margin: "0 auto",
    background: "#ffffff",
    padding: "32px 24px",
  }}
>
          <article>
            <header>
              <h1
                style={{
                  fontSize: "2.2rem",
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}
              >
               Homes for Sale in Phoenix, AZ – New, Luxury, Single-Family, Multi-Family &amp; By Owner </h1>
              <p>
              Phoenix continues to be one of the strongest and fastest-growing housing markets in the country, offering a wide range of residential opportunities for buyers, investors,
and families. Whether you&#39;re searching for modern construction, upscale living, family-friendly communities, or income-producing properties, the Valley has
something for every lifestyle and budget. With warm weather, thriving job growth, and desirable neighborhoods throughout the metro area, it&#39;s no surprise that so
many people search for Homes for Sale in Phoenix Arizona when planning their next move. 
              </p>
              <p>From new developments and luxury estates to multi-family buildings and mobile home communities, understanding the variety of housing options available can help
you make a confident and informed decision. Below is a comprehensive guide to the most popular home types across Phoenix, along with expert insight on what each
option offers and what buyers should consider.</p>
            </header>

            <hr />

            <section>
             
            </section>

            <hr />

            <section>
             
            </section>

            <hr />

            <section>
              
            </section>

            <hr />

           

      {/* Contact + Footer same as home */}
      <section id="contact">
        <ContactForm />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
