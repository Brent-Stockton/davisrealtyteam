import type { Metadata } from "next";
import StickyNavbar from "@/Components/NavBar";
import Footer from "@/Pages/Footer/Footer";
import ContactForm from "@/Pages/Contact/Contact";
import Hero from "@/Pages/Hero.tsx";

export const metadata: Metadata = {
  title:
    "Homes for Sale in Phoenix, AZ | Luxury, Single-Family, Multi-Family & By Owner",
  description:
    "",
  openGraph: {
    type: "website",
    url: "https://www.davisrealtyteam.com/realtors-in-peoria-az",
    title:
      "",
    description:
      "",
  },
};

export default function RealtorsInPeoriaAzPage() {
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
Top Realtors in Peoria, AZ – Find the Best Homes and Properties
              </h1>
            </header>
          <section>
            <div className="section-">
            <h2><strong>Find Homes for Sale in Peoria, AZ – New Construction, Luxury, Single &amp; Multi-Family Options</strong></h2>
<p>eoria, Arizona has become one of the most desirable places to live in the northwest Valley, offering a winning combination of beautiful desert landscapes, family-friendly communities, top-rated schools, and access to world-class entertainment. With its rapidly growing neighborhoods, lakeside recreation at Lake Pleasant, and expanding business districts, Peoria continues to attract homebuyers searching for long-term stability, stunning views, and modern living. Whether you're a first-time buyer, an investor, or someone looking for an upgraded lifestyle, the city provides an impressive selection of residential opportunities for every need and budget—including <strong>Homes for Sale in Peoria AZ</strong> that span from new construction to luxury estates.</p>
<p>As Peoria grows, so does its diversity of housing options. Buyers can choose from spacious single-family homes with large backyards, contemporary townhomes near shopping and dining, multi-family investment properties, and upscale custom builds with breathtaking mountain views. The variety of choices makes Peoria an ideal destination for individuals, couples, and families looking to plant roots in a thriving community.</p>
<p>The following guide explores Peoria’s most popular home types, neighborhood features, and what buyers can expect when navigating one of the Valley’s most competitive real estate markets.</p>
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
