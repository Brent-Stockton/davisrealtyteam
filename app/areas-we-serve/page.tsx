import type { Metadata } from "next";
import StickyNavbar from "@/Components/NavBar";
import Footer from "@/Pages/Footer/Footer";
import ContactForm from "@/Pages/Contact/Contact";
import Hero from "@/Pages/Hero.tsx";

export const metadata: Metadata = {
  title:
    "Areas We Serve | Phoenix, Peoria, Surprise, Scottsdale, Gilbert & Anthem",
  description:
    "Explore the areas we serve, including Phoenix, Peoria, Surprise, Scottsdale, Gilbert, and Anthem. Find Realtors, properties for sale, and homes to buy in each city.",
  openGraph: {
    type: "website",
    url: "https://www.davisrealtyteam.com/areas-we-serve",
    title:
      "Areas We Serve | Phoenix, Peoria, Surprise, Scottsdale, Gilbert & Anthem",
    description:
      "Explore the areas we serve, including Phoenix, Peoria, Surprise, Scottsdale, Gilbert, and Anthem. Find Realtors, properties for sale, and homes to buy in each city.",
  },
};

export default function AreasWeServePage() {
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
Areas We Serve – Find Homes & Realtors Across the Greater Phoenix Area
              </h1>
<p><a href="https://www.davisrealtyteam.com/homes-for-sale-phoenix-az"><strong>Phoenix, AZ:</strong> Explore Homes &amp; Realtors in Phoenix, AZ</a></p>
<p><a href="https://www.davisrealtyteam.com/realtors-in-peoria-az"><strong>Peoria, AZ:</strong> Explore Homes &amp; Realtors in Peoria, AZ</a></p>
<p><a href="https://www.davisrealtyteam.com/homes-for-sale-surprise-az"><strong>Surprise, AZ:</strong> Explore Homes &amp; Realtors in Surprise, AZ</a></p>
<p><a href="https://www.davisrealtyteam.com/homes-for-sale-scottsdale-az"><strong>Scottsdale, AZ:</strong> Explore Homes &amp; Realtors in Scottsdale, AZ</a></p>
<p><a href="https://www.davisrealtyteam.com/homes-for-sale-gilbert-az"><strong>Gilbert, AZ:</strong> Explore Homes &amp; Realtors in Gilbert, AZ</a></p>
<p><a href="https://www.davisrealtyteam.com/homes-for-sale-anthem-az"><strong>Anthem, AZ</strong>: Explore Homes &amp; Realtors in Anthem, AZ</a></p>

<p>The Greater Phoenix area is one of the most dynamic and diverse real estate markets in the country. From bustling city neighborhoods to serene suburban communities, buyers and sellers have countless options to choose from. Whether you’re looking to purchase your first home, invest in properties, or sell your current residence, our team of experienced real estate professionals is here to help. Explore the areas we serve, find the right homes, and connect with trusted Realtors who understand the local market.</p>         
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
