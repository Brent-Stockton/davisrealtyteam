import type { Metadata } from "next";
import StickyNavbar from "@/Components/NavBar";
import Footer from "@/Pages/Footer/Footer";
import ContactForm from "@/Pages/Contact/Contact";
import Hero from "@/Pages/Hero.tsx";

export const metadata: Metadata = {
  title:
    "Homes for Sale in Gilbert AZ | New, Luxury & Waterfront Homes",
  description:
    "Explore homes for sale in Gilbert AZ, including new construction, luxury properties, and waterfront homes. Find the best Gilbert homes and top neighborhoods today.",
  openGraph: {
    type: "website",
    url: "https://www.davisrealtyteam.com/homes-for-sale-gilbert-az",
    title:
      "Homes for Sale in Gilbert AZ | New, Luxury & Waterfront Homes",
    description:
      "Explore homes for sale in Gilbert AZ, including new construction, luxury properties, and waterfront homes. Find the best Gilbert homes and top neighborhoods today.",
  },
};

export default function HomesForSaleGilbertAzPage() {
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
Homes for Sale in Gilbert, AZ – New, Luxury & Waterfront Properties
              </h1>
              <p>Gilbert, Arizona has become one of the most desirable communities in the East Valley, attracting homebuyers seeking a combination of suburban comfort, modern amenities, and a family-friendly environment. Known for its excellent schools, safe neighborhoods, vibrant dining and entertainment options, and scenic desert landscapes, Gilbert offers a high quality of life for residents of all ages. Whether you are searching for brand-new construction, luxurious estates, or waterfront properties, the wide variety of <strong>Homes for Sale in Gilbert AZ</strong> ensures every buyer can find a home that meets their lifestyle needs.</p>
<p>Over the past two decades, Gilbert has evolved from a quiet agricultural town into a thriving, modern city. Today, it balances growth with a strong sense of community, offering everything from active-adult neighborhoods and planned communities to family-friendly subdivisions and scenic waterfront developments. With this diversity, buyers can explore a mix of <strong>New Homes for Sale in Gilbert AZ</strong>, contemporary luxury residences, and homes that provide both comfort and long-term investment value.</p>
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
