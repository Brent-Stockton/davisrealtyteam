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
    url: "https://www.davisrealtyteam.com/homes-for-sale-surprise-az",
    title:
      "",
    description:
      "",
  },
};

export default function HomesForSaleSurpriseAzPage() {
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
Homes for Sale in Surprise, AZ - New & Move-In Ready Properties
              </h1>
             <p>Surprise, Arizona has become one of the fastest-growing and most desirable residential areas in the West Valley. Known for its clean neighborhoods, beautiful desert landscapes, and impressive community amenities, Surprise offers a refreshing blend of suburban comfort and modern convenience. With new residential developments, excellent schools, and expanding commercial districts, the area appeals to first-time buyers, families, retirees, and investors alike. Whether you’re looking for established neighborhoods or completely new developments, the increasing number of <strong>Homes for Sale in Surprise AZ</strong> offers something for every type of buyer.</p>
<p>As more people discover the quality of life available in Surprise, demand for move-in ready and newly built homes continues to grow. The city’s thoughtful planning, recreational offerings, and diverse housing options have positioned it as one of the most attractive real estate markets in the Phoenix metropolitan area. Buyers can choose from affordable single-family homes, new construction properties, luxury residences, and communities tailored for active adults, all within a city designed to encourage outdoor living, relaxation, and long-term stability.</p>
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
