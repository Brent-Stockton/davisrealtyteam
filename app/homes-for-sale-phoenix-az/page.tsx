import type { Metadata } from "next";
import StickyNavbar from "@/Components/NavBar";
import Footer from "@/Pages/Footer/Footer";
import ContactForm from "@/Pages/Contact/Contact";
import Hero from "@/Pages/Hero.tsx";

export const metadata: Metadata = {
  title:
    "Realtors in Phoenix AZ | Residential, Commercial & Investment Real Estate",
  description:
    "Work with a trusted Realtor in Phoenix AZ for buying, selling and investing in residential and commercial properties across the Valley.",
  openGraph: {
    type: "website",
    url: "https://www.davisrealtyteam.com/realtors-in-phoenix-az",
    title:
      "Realtors in Phoenix AZ | Residential, Commercial & Investment Real Estate",
    description:
      "Local Phoenix Realtor offering expert guidance for home buyers, sellers, investors and commercial real estate clients across the Valley.",
  },
};

export default function RealtorsInPhoenixAzPage() {
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
                Realtors in Phoenix AZ – Your Trusted Real Estate Resource
              </h1>
              <p>
               
              </p>
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
