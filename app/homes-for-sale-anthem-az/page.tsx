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
          <section>
            <div className="section-1">
            <h2><strong>Top Realtors in Peoria, AZ – Find the Best Homes and Properties</strong></h2>
<p>Peoria, Arizona has quickly become one of the most desirable destinations in the northwest Valley, attracting families, professionals, retirees, and investors from all over the country. With its scenic desert views, top-performing schools, vibrant entertainment districts, and fast-growing housing market, Peoria offers unmatched lifestyle advantages for nearly every type of homeowner. As the city continues to expand with new neighborhoods, master-planned communities, and luxury developments, the demand for knowledgeable real estate professionals has never been higher. Buyers and sellers want someone who understands the local market, navigates complex transactions with ease, and advocates for their best interests at every turn. That’s why working with trusted <strong>Realtors in Peoria AZ</strong> is essential to achieving the best results in today’s competitive environment.</p>
<p>Peoria’s real estate market is rich in diversity, offering everything from affordable starter homes to custom luxury estates, golf course properties, lakeside homes, new-construction communities, and investment opportunities. Whether a family is searching for proximity to great schools, retirees are looking for an active-adult neighborhood, or investors want dependable rental income, Peoria provides options that fit every lifestyle and long-term objective. To make the most of these opportunities, buyers and sellers benefit from partnering with a local expert who understands the nuances of the market and offers guidance tailored to their specific goals.</p>
            </div>
          </section>
            <hr />













            
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
