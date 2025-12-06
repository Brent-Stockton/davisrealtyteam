import type { Metadata } from "next";
import StickyNavbar from "@/Components/NavBar";
import Footer from "@/Pages/Footer/Footer";
import ContactForm from "@/Pages/Contact/Contact";
import Hero from "@/Pages/Hero.tsx";

export const metadata: Metadata = {
  title:
    "Realtors in Phoenix AZ | Residential, Commercial & Investment Real Estate",
  description:
    "Work with a trusted Realtor in Phoenix AZ for buying, selling and investing in residential and commercial properties across the Valley.",
  openGraph: {
    type: "website",
    url: "https://www.davisrealtyteam.com/realtors-in-phoenix-az",
    title:
      "Realtors in Phoenix AZ | Residential, Commercial & Investment Real Estate",
    description:
      "Local Phoenix Realtor offering expert guidance for home buyers, sellers, investors and commercial real estate clients across the Valley.",
  },
};

export default function RealtorsInPhoenixAzPage() {
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
                Top Realtors in Phoenix, AZ – Residential & Commercial Experts
              </h1>
            </header>
<section>
<div className="section-1">
<h2><strong>Your Trusted Real Estate Resource for Buying, Selling, and Investing in Phoenix</strong></h2>
  <p>Navigating the real estate market in a city as dynamic as Phoenix requires a knowledgeable and dedicated partner. Whether you’re buying your first home, investing in commercial property, or preparing to sell a long-held residence, you deserve guidance that’s rooted in expertise, integrity, and a deep understanding of the local market. As one of the committed <strong>Phoenix Realtors</strong> serving the Valley, my mission is to provide every client with a seamless, transparent, and highly informed experience tailored to their needs.</p>
<p>Phoenix continues to rank as one of the most desirable and fastest-growing metropolitan areas in the country. Its booming job market, warm climate, diverse neighborhoods, and steady property values create an environment where both new and seasoned buyers can thrive. Because the market changes quickly, it’s more important than ever to work with professionals who understand local trends and how to leverage them for your success. Among all the <strong>Realtors in Phoenix</strong>, I take pride in offering strategic market insights, exceptional communication, and client-first service that goes far beyond the transaction.</p>

</div>
</section>
            <hr />

            <section>
              <div className="section-2">
             <h2><strong>Why Phoenix Remains a Top Market for Real Estate</strong></h2>
<p>Phoenix real estate is known for its strong resale values, new construction opportunities, and diverse range of homes. From starter homes to luxury estates, the Valley accommodates buyers across every price point. Working with experienced <strong>Realtors in Phoenix Arizona</strong> gives you access to accurate neighborhood comparisons, property data, and negotiation advantages—key elements that help you make confident decisions whether you’re buying or selling.</p>
<p>The city is also full of thriving communities with access to top-rated schools, shopping centers, entertainment districts, parks, and major freeway systems. With ongoing development and growing corporate presence, Phoenix continues to be a long-term, stable market for homeowners and investors alike. As one of the many dedicated <strong>Realtors in Phoenix AZ</strong>, I ensure my clients stay ahead of these trends so they can capitalize on the best opportunities available.</p>
            </div>
              </section>
<hr />
          <section>
            <div className="section-3">
            <h2><strong>Comprehensive Residential Buying Services</strong></h2>
              <p>Searching for a home is one of the most personal and significant decisions you can make. With the right guidance, the process becomes both exciting and empowering. I work closely with buyers to identify their goals, preferred neighborhoods, budget, and long-term plans. Whether you’re looking for urban living, a family-friendly suburb, or a quiet desert retreat, I streamline the search process to deliver handpicked listings that match your priorities.</p>
           <p>I provide support with:</p>
<ul>
<li>Understanding the current market</li>
<li>Touring homes and evaluating property features</li>
<li>Writing competitive offers</li>
<li>Navigating inspections and appraisals</li>
<li>Managing deadlines and documentation</li>
<li>Coordinating with lenders and title companies</li>
</ul>
<p>My job is to advocate for your best interests and guide you confidently through every step of the journey.</p>
            </div>
          </section>

            <hr />

          <section>
            <div className="section-4">
<h2><strong>Expert Assistance for Home Sellers</strong></h2>
<p>Selling a home in Phoenix requires a thoughtful strategy to attract qualified buyers and secure the highest possible value. Pricing, presentation, marketing, and timing all make a significant impact. As one of the <strong>Best Realtors in Phoenix</strong>, I offer a full suite of listing services designed to make your property stand out.</p>
<p>These include:</p>
<ul>
<li>Detailed market evaluations</li>
<li>Custom pricing strategies</li>
<li>Professional home photography and video</li>
<li>Staging guidance</li>
<li>Targeted digital marketing</li>
<li>Exposure across MLS, real estate platforms, and social media</li>
<li>Skilled negotiation and contract management</li>
</ul>
<p>Your home deserves expert representation from start to finish, and I take pride in making the selling process smooth, predictable, and rewarding.</p>
            </div>
          </section>

            
<section>
<div className="section-5">
       <h2><strong>Commercial Real Estate Expertise</strong></h2>
<p>In addition to residential services, I also assist clients searching for or selling commercial properties. From office buildings and retail centers to industrial spaces and land opportunities, Phoenix continues to be a prime market for investors and business owners. Working with a reliable <strong>Commercial Realtor Phoenix</strong> ensures you have a professional who understands zoning, valuation, traffic counts, tenant occupancy, and long-term investment potential.</p>
<p>Whether you’re purchasing your first commercial asset, expanding your portfolio, or looking to sell a property, I offer strategic guidance backed by detailed market assessments and proven negotiation skills.</p>     
</div>
</section>

            
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
