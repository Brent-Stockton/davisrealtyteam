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
    width:90%;
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
               Homes for Sale in Phoenix, AZ – New, Luxury, Single-Family, Multi-Family &amp; By Owner </h1>
              <p>Phoenix remains one of the nation’s fastest-growing housing markets, offering diverse opportunities for buyers, investors, and families alike. From modern homes and luxury estates to family-friendly communities and income-producing properties, the Valley caters to every lifestyle and budget. With warm weather, strong job growth, and desirable neighborhoods, demand for homes in Phoenix continues to rise. The market includes new developments, multi-family buildings, and mobile home communities, providing wide-ranging choices for different needs. Understanding these housing options helps buyers make confident, informed decisions when navigating the competitive Phoenix real estate landscape and selecting the property type that best matches their goals and investment priorities.</p>
            </header>

            <hr />

            <section>
             <h3>1. New Construction Homes in Phoenix</h3>
              <p>For buyers seeking modern features, energy-efficient designs, and the latest architectural styles, Phoenix is home to a booming construction market. The city’s rapid expansion has led to dozens of new communities offering flexible floor plans, smart-home upgrades, and resort-style amenities. Many of these neighborhoods are located near top-rated schools, shopping centers, and outdoor recreation, making them ideal for individuals and families alike.</p>
              <p>Those exploring <strong>New Homes for Sale in Phoenix AZ</strong> will find everything from contemporary single-story layouts to spacious two-story designs with open living areas, large kitchens, and covered outdoor spaces perfect for Arizona’s year-round sunshine. Builders often offer incentives toward closing costs, upgrades, or interest rate buy-downs, making new construction an attractive option for buyers looking for value as well as convenience.</p>
              <p>Additionally, the market for <strong>Phoenix New Construction Homes for Sale</strong> continues to remain strong due to high demand, builder reputation, and long-term resale potential. New construction can be especially appealing for buyers who want to customize finishes, avoid major repairs, and move into a home that meets modern energy standards.</p>
            
            </section>

            <hr />

            <section>
             
            </section>

            <hr />

            <section>
              
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
