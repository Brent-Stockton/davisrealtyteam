import type { Metadata } from "next";
import StickyNavbar from "@/Components/NavBar";
import Footer from "@/Pages/Footer/Footer";
import ContactForm from "@/Pages/Contact/Contact";
import Hero from "@/Pages/Hero.tsx";

export const metadata: Metadata = {
  title:
    "Phoenix First-Time Homebuyer Program | Down Payment & First Responder Assistance",
  description:
    "Explore Phoenix first-time homebuyer programs including down payment assistance and first responder home loan benefits. Find the best options to help you buy your first home.",
  openGraph: {
    type: "website",
    url: "https://www.davisrealtyteam.com/first-time-homebuyer-phoenix-az",
    title:
      "Phoenix First-Time Homebuyer Program | Down Payment & First Responder Assistance",
    description:
      "Explore Phoenix first-time homebuyer programs including down payment assistance and first responder home loan benefits. Find the best options to help you buy your first home.",
  },
};

export default function FirstTimeHomebuyerPhoenixAzPage() {
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
First-Time Homebuyer Programs in Phoenix, AZ – Down Payment & First Responder Assistance
              </h1>
            </header>
          <section>
            <div className="section-">
            <h2><strong>Down Payment Assistance &amp; First-Time Homebuyer Programs in Phoenix, AZ</strong></h2>
<p>Buying a home for the first time is one of life’s most meaningful milestones, but it often comes with challenges—especially when it comes to saving for upfront costs, qualifying for loan programs, or navigating a competitive housing market. For many new buyers in Phoenix, finding resources that reduce financial barriers is the key to turning homeownership from a long-term goal into an achievable reality. Fortunately, there are several programs, incentives, and local initiatives designed specifically to support first-time purchasers, first responders, and community heroes.</p>
<p>Phoenix continues to be one of the fastest-growing cities in the country, with strong job opportunities, diverse neighborhoods, and competitive property values. As demand increases, the importance of education, financial support, and accessible housing programs becomes even more significant. Whether you are purchasing your first home, seeking financial assistance, or looking for specialized benefits because of your profession, understanding your available options can help you make the best possible decisions.</p>
<p>In particular, qualified buyers may benefit from programs that offer grants, reduced interest rates, closing cost support, or down payment relief. One of the most widely sought-after resources for new homeowners is <strong>Down Payment Assistance for First Time Home Buyers</strong>, which helps soften the financial burden associated with purchasing a home. These programs often remove one of the biggest obstacles to buying property—accumulating enough money upfront—and make it possible for more families to transition from renting to owning.</p>
<p>Below is a detailed breakdown of the major support options available in Phoenix, along with guidance on eligibility, benefits, and how these initiatives can help first-time buyers secure their dream home with confidence.</p>
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
