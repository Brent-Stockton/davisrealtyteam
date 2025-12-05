import type { Metadata } from "next";
import StickyNavbar from "@/Components/NavBar";
import Footer from "@/Pages/Footer/Footer";
import ContactForm from "@/Pages/Contact/Contact";
import Hero from "@/Pages/Hero.tsx";

export const metadata: Metadata = {
title:
"Phoenix First Time Homebuyer Program | First Responder Home Loan & Down Payment Assistance",
description:
"Qualify for Phoenix first time homebuyer programs including down payment assistance and first responder home loan benefits. Find the best options to make your first home purchase easier.",
openGraph: {
type: "website",
url: "https://www.davisrealtyteam.com/first-time-homebuyer-phoenix-az",
title:
"Phoenix First Time Homebuyer Program | First Responder Home Loan & Down Payment Assistance",
description:
"Qualify for Phoenix first time homebuyer programs including down payment assistance and first responder home loan benefits. Find the best options to make your first home purchase easier.",
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

    {/* Inner SEO content section */}
    <section style={{
  width: "90%",
  maxWidth: "1280px",
  margin: "0 auto",
  background: "#ffffff",
  padding: "32px 24px"
}}
>
        <div className="seo-inner-page" style={{ width: "90%"; maxWidth: "1280px" , margin: "0 auto" ,
            background: "#ffffff" , padding: "32px 24px" , }}>
            <article>
                <header>
                    <h1 style={{ fontSize: "2.2rem" , lineHeight: 1.2, marginBottom: "16px" , }}>
                        First-Time Homebuyer Programs in Phoenix, AZ – Down Payment & First Responder Assistance </h1>
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
