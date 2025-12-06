import type { Metadata } from "next";
import StickyNavbar from "@/Components/NavBar";
import Footer from "@/Pages/Footer/Footer";
import ContactForm from "@/Pages/Contact/Contact";
import Hero from "@/Pages/Hero.tsx";

export const metadata: Metadata = {
  title:
    "Best Realtors in Gilbert AZ | Top Local Real Estate Experts",
  description:
    "Looking for the best Realtors in Gilbert AZ? Work with top-rated real estate experts specializing in luxury and residential homes to buy or sell with confidence.",
  openGraph: {
    type: "website",
    url: "https://www.davisrealtyteam.com/realtors-in-gilbert-az",
    title:
      "Best Realtors in Gilbert AZ | Top Local Real Estate Experts",
    description:
      "Looking for the best Realtors in Gilbert AZ? Work with top-rated real estate experts specializing in luxury and residential homes to buy or sell with confidence.",
  },
};

export default function RealtorsInGilbertAzPage() {
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
Best Realtors in Gilbert, AZ – Trusted Luxury & Residential Experts
              </h1>
              <p>Gilbert, Arizona has emerged as one of the most desirable communities in the East Valley, offering a perfect combination of suburban comfort, modern amenities, and a family-friendly environment. With top-rated schools, safe neighborhoods, vibrant dining, and scenic desert landscapes, Gilbert attracts homebuyers, investors, and luxury buyers from across the region. Navigating this competitive real estate market requires professional guidance, which is why partnering with experienced <strong>Realtors in Gilbert AZ</strong> is essential to achieving successful results.</p>
<p>Whether you are buying your first home, selling a long-time residence, or investing in high-end properties, having a skilled real estate expert ensures a smooth transaction and maximizes value. Gilbert’s market is diverse, ranging from new construction and luxury estates to waterfront homes and move-in-ready residences. Working with the <strong>Best Realtor in Gilbert AZ</strong> allows clients to leverage local expertise, strong negotiation skills, and strategic guidance for every step of the buying or selling process.</p>
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
