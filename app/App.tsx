import Head from "next/head";

import CallToAction from "@/Pages/CallToAction.tsx";
import ContactForm from "@/Pages/Contact/Contact";
import Footer from "@/Pages/Footer/Footer";
import Gallery from "@/Pages/Gallery.tsx";
import Hero from "@/Pages/Hero.tsx";
import StickyNavbar from "@/Components/NavBar";

const App = () => {
  return (
    <>
      <Head>
        <title>Davis Realty Team</title>
        <meta
          name="description"
          content="The Davis Realty Team, a dynamic couple from Phoenix, AZ, dedicated to helping clients find their dream homes. With a passion for real estate and personalized service, they make buying and selling seamless and stress-free."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.davisrealtyteam.com" />
        <meta property="og:title" content="Davis Realty Team" />
        <meta
          property="og:description"
          content="The Davis Realty Team, a dynamic couple from Phoenix, AZ, dedicated to helping clients find their dream homes. With a passion for real estate and personalized service, they make buying and selling seamless and stress-free."
        />
        <meta property="og:image" content="Your Image URL" />

        <link rel="icon" href="/images/realty-logo.png" />
      </Head>

      <main>
        <StickyNavbar />

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <CallToAction />
        </section>

        {/* Add home page content here */}
        <section id="home-content">
          <div className="home-content-wrapper">
            <h2>Welcome to Davis Realty Team</h2>
              <p>
              We are a husband-and-wife real estate team based in Phoenix, AZ,
              helping buyers and sellers across Phoenix, Scottsdale, Peoria and
              surrounding areas.
              </p>

            <h3>Why work with us?</h3>
            <ul>
            <li>Local experts who know every neighborhood in detail</li>
            <li>Personalized guidance for first-time home buyers</li>
            <li>Strong marketing strategy to sell your home faster</li>
            </ul>
            </div>
          </section>

        {/* Content Section End */}

        <section id="gallery">
          <Gallery />
        </section>

        <section id="contact">
          <ContactForm />
        </section>

        {/* Footer ka id alag rakhna better hai */}
        <section id="footer">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
