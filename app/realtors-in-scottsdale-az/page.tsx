import type { Metadata } from "next";
import StickyNavbar from "@/Components/NavBar";
import Footer from "@/Pages/Footer/Footer";
import ContactForm from "@/Pages/Contact/Contact";
import Hero from "@/Pages/Hero.tsx";

export const metadata: Metadata = {
  title:
    "Best Realtors in Scottsdale AZ | Top & Luxury Real Estate Experts",
  description:
    "Work with the best Realtors in Scottsdale AZ. Connect with top real estate professionals, luxury Realtors, and trusted experts to help you buy or sell with confidence.",
  openGraph: {
    type: "website",
    url: "https://www.davisrealtyteam.com/realtors-in-scottsdale-az",
    title:
      "Best Realtors in Scottsdale AZ | Top & Luxury Real Estate Experts",
    description:
      "Work with the best Realtors in Scottsdale AZ. Connect with top real estate professionals, luxury Realtors, and trusted experts to help you buy or sell with confidence.",
  },
};

export default function RealtorsInScottsdaleAzPage() {
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
Best Realtors in Scottsdale, AZ – Trusted Real Estate Professionals
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
