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
            <h2>Your Trusted Residential & Commercial Properties Realtor in Phoenix, AZ</h2>
             <p>When it comes to buying or selling property in one of the fastest-growing real estate markets in the country, having the right guidance makes all the difference. As a dedicated <strong>Residential &amp; Commercial Properties Realtor in Phoenix, AZ</strong>, my mission is to make your real estate journey smooth, informed, and successful—whether you’re stepping into the market for the first time, moving up to your dream home, investing, or preparing to sell. Phoenix and the surrounding Valley offer incredible opportunities, and I’m here to help you make the most of them.</p>

            <h3><strong>Finding the Perfect Home in Phoenix</strong></h3>
<p>Phoenix is known for its warm climate, diverse neighborhoods, and a booming job market. With so many options available, finding the right home can feel overwhelming—but that’s exactly where I step in. From tailored home searches to market expertise and full-service support, I take pride in helping clients discover the ideal fit for their lifestyle and budget.</p>
<p>If you're searching for <strong>New Homes for Sale in Phoenix</strong>, you’ll find a wide range of beautiful communities featuring modern designs, energy-efficient features, and flexible floor plans. I work directly with builders to make sure you understand your choices, upgrades, warranties, and the full buying process—protecting your interests every step of the way.</p>
<p>For those looking for high-end living, the city also boasts an impressive selection of <strong>Luxury Homes for Sale in Phoenix</strong>. Whether you're after breathtaking mountain views, stunning architecture, or upscale amenities like resort-style pools, smart home technology, or private outdoor living spaces, I can help you navigate these exclusive neighborhoods and negotiate the best value for your investment.</p>
          <h3><strong>Options for Every Buyer</strong></h3>
<p>Phoenix isn’t just about single-family homes—buyers today have more options than ever. If you’re exploring affordable living or seasonal housing, there are plenty of <strong>Mobile Homes for Sale in Phoenix</strong> that offer comfort, flexibility, and community features without stretching your budget.</p>
<p>Investors and growing families also love the many <strong>Multi-Family Homes for Sale in Phoenix</strong>, ideal for generating rental income or accommodating multi-generational living. These properties often sell quickly, and having a knowledgeable realtor who understands cap rates, rental demand, and ROI is essential in making a smart decision.</p>
            
            <h3><strong>Supporting First-Time Buyers</strong></h3>
<p>Stepping into homeownership for the first time is a major milestone, and Phoenix offers several excellent resources to help. Through the <strong>First Time Homebuyer Program Phoenix AZ</strong>, many buyers qualify for down payment assistance, lower interest rates, reduced mortgage insurance, and special grant programs. Navigating these programs can be confusing, but I’ll walk you through the qualifications, benefits, and application process so you don’t miss out on financial opportunities that could save you thousands.</p>
<p>I believe in empowering first-time homebuyers with knowledge—explaining inspections, appraisals, contracts, closing costs, and everything in between. My goal is to make your first purchase a positive, stress-free experience.</p>

<h3><strong>Expert Guidance for Sellers</strong></h3>
<p>If you're thinking about selling your property, the Phoenix market continues to experience strong demand. As your local <strong>Residential &amp; Commercial Properties Realtor in Phoenix, AZ</strong>, I ensure your home is positioned to attract serious buyers quickly and competitively.</p>
<p>I offer:</p>
            <div className="seo-inner-page">
<ul>
<li>Detailed market analyses</li>
<li>Strategic pricing guidance</li>
<li>Professional staging advice</li>
<li>High-quality photography &amp; video</li>
<li>Aggressive online &amp; social media marketing</li>
<li>Smooth transaction management from listing to close</li>
</ul>
            </div>
<p>Whether you’re selling a single-family residence, luxury estate, investment property, or commercial space, I have the experience and resources to help you secure the highest return.</p>

   <h3><strong>Why Work with Me?</strong></h3>
<p>Phoenix is more than a market—it’s a community I’m proud to serve. When you work with me, you get a realtor who listens, communicates, negotiates fiercely, and cares about your goals. I’m committed to making every step of your buying or selling journey clear, comfortable, and tailored to your needs.</p>
<p>Whether you're exploring <strong>New Homes for Sale Phoenix</strong>, seeking <strong>Luxury Homes for Sale Phoenix</strong>, considering <strong>Mobile Homes for Sale Phoenix</strong>, browsing <strong>Multi Family Homes for Sale Phoenix</strong>, or taking advantage of the <strong>First Time Homebuyer Program Phoenix AZ</strong>, you deserve someone who knows the Valley inside and out.</p>
<p>Let’s turn your real estate goals into reality—right here in Phoenix.</p>         
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
