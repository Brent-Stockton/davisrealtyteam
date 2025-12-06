import type { Metadata } from "next";
import StickyNavbar from "@/Components/NavBar";
import Footer from "@/Pages/Footer/Footer";
import ContactForm from "@/Pages/Contact/Contact";
import Hero from "@/Pages/Hero.tsx";

export const metadata: Metadata = {
  title:
    "Best Realtors in Surprise AZ | Trusted Local Real Estate Experts",
  description:
    "Looking for the best Realtors in Surprise AZ? Work with trusted local real estate experts to buy or sell your home with confidence. Get top-rated guidance today.",
  openGraph: {
    type: "website",
    url: "https://www.davisrealtyteam.com/realtors-in-surprise-az",
    title:
      "Best Realtors in Surprise AZ | Trusted Local Real Estate Experts",
    description:
      "Looking for the best Realtors in Surprise AZ? Work with trusted local real estate experts to buy or sell your home with confidence. Get top-rated guidance today.",
  },
};

export default function RealtorsInSurpriseAzPage() {
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
Best Realtors in Surprise, AZ - Trusted Local Experts
              </h1>
              <p>Surprise, Arizona is one of the fastest-growing and most attractive residential areas in the West Valley. With beautiful master-planned communities, new construction neighborhoods, top-rated schools, and excellent city amenities, Surprise offers a highly desirable lifestyle for families, retirees, professionals, and investors alike. As more people discover the advantages of living in this vibrant community, the demand for knowledgeable real estate professionals continues to rise. Buyers and sellers want guidance from someone who understands the market inside and out—someone who can provide clarity, strategy, and trusted advice from start to finish. That is why partnering with experienced <strong>Realtors in Surprise AZ</strong> is essential when navigating today’s competitive real estate environment.</p>
<p>Choosing the right real estate professional can make a significant difference in your overall experience. Whether you’re buying your first home, selling a long-time residence, relocating to Arizona, or investing in rental properties, a skilled Realtor brings industry experience, local insight, and negotiation strength that protects your financial interests. Surprise is a dynamic, fast-moving market—having the right expertise on your side ensures smoother transactions, stronger offers, and better results.</p>
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
