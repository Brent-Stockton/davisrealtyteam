import Head from "next/head";

import CallToAction from "@/Pages/CallToAction.tsx";
import ContactForm from "@/Pages/Contact/Contact";
import Footer from "@/Pages/Footer/Footer";
import Gallery from "@/Pages/Gallery.tsx";
import Hero from "@/Pages/Hero.tsx";
import StickyNavbar from "@/Components/NavBar";

const App = () => {
  <Head>
    <title>Davis Realty Team</title>
    <meta
      name="description"
      content="The Davis Realty Team, a dynamic couple from Phoenix, AZ, dedicated to helping clients find their dream homes. With a passion for real estate and personalized service, they make buying and selling seamless and stress-free."
    />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="www.davisrealtyteam.com" />
    <meta property="og:title" content="Davis Realty Team" />
    <meta
      property="og:description"
      content="The Davis Realty Team, a dynamic couple from Phoenix, AZ, dedicated to helping clients find their dream homes. With a passion for real estate and personalized service, they make buying and selling seamless and stress-free."
    />
    <meta property="og:image" content="Your Image URL" />

    <link rel="icon" href="/images/realty-logo.png" />
  </Head>;
  return (
    <main>
      <StickyNavbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <CallToAction />
      </section>
      <section>
        <HomeContent />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
};
export default App;
