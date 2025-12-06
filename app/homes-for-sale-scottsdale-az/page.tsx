import type { Metadata } from "next";
import StickyNavbar from "@/Components/NavBar";
import Footer from "@/Pages/Footer/Footer";
import ContactForm from "@/Pages/Contact/Contact";
import Hero from "@/Pages/Hero.tsx";

export const metadata: Metadata = {
  title:
    "Homes for Sale in Scottsdale AZ | Luxury, New & North Scottsdale Homes",
  description:
    "Explore homes for sale in Scottsdale AZ, including luxury estates, new construction homes, and properties in North Scottsdale. Find the best Scottsdale homes today.",
  openGraph: {
    type: "website",
    url: "https://www.davisrealtyteam.com/homes-for-sale-scottsdale-az",
    title:
      "Homes for Sale in Scottsdale AZ | Luxury, New & North Scottsdale Homes",
    description:
      "Explore homes for sale in Scottsdale AZ, including luxury estates, new construction homes, and properties in North Scottsdale. Find the best Scottsdale homes today.",
  },
};

export default function HomesForSaleScottsdaleAzPage() {
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
Homes for Sale in Scottsdale, AZ - Luxury, New & North Scottsdale Properties
              </h1>
              <p>Scottsdale, Arizona is one of the most sought-after real estate markets in the Southwest, known for its upscale lifestyle, world-class amenities, and breathtaking desert scenery. From award-winning golf communities and high-end dining to vibrant arts districts and peaceful desert preserves, Scottsdale delivers a living experience that blends luxury with natural beauty. Whether you’re looking for an elegant estate, a modern new-construction property, or a home in one of the city’s most prestigious northern neighborhoods, the growing selection of <strong>Homes for Sale in Scottsdale AZ</strong> offers remarkable choices for every type of buyer.</p>
<p>Scottsdale is often recognized as a premier destination for those seeking refined living, outdoor adventure, and a community that values quality, culture, and innovation. Its neighborhoods are diverse—ranging from historic ranch-style homes and renovated single-family residences to brand-new luxury builds and expansive custom estates. Residents enjoy access to top-rated schools, five-star resorts, high-end retail centers, and some of the most scenic hiking and biking trails in the state. These features make Scottsdale one of the strongest and most stable housing markets in the region.</p>
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
