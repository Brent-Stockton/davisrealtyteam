import type { Metadata } from "next";
import StickyNavbar from "@/Components/NavBar";
import Footer from "@/Pages/Footer/Footer";
import ContactForm from "@/Pages/Contact/Contact";
import Hero from "@/Pages/Hero.tsx";

export const metadata: Metadata = {
  title:
    "Homes for Sale in Anthem AZ | Top Realtors & FSBO Listings",
  description:
    "Browse homes for sale in Anthem AZ, including Realtor-listed properties and for sale by owner homes. Connect with trusted Realtors in Anthem for expert guidance.",
  openGraph: {
    type: "website",
    url: "https://www.davisrealtyteam.com/homes-for-sale-anthem-az",
    title:
      "Homes for Sale in Anthem AZ | Top Realtors & FSBO Listings",
    description:
      "Browse homes for sale in Anthem AZ, including Realtor-listed properties and for sale by owner homes. Connect with trusted Realtors in Anthem for expert guidance.",
  },
};

export default function HomesForSaleAnthemAzPage() {
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
      width: "90%",
      maxWidth: "1280px",
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
Find Homes in Anthem, AZ – Realtors and for Sale by Owner Listings
              </h1>
            </header>


          </article>
        </div>
      </section>

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
