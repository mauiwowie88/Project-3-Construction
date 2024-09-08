import Introduction from "../components/Home/Introduction";
import Testimonials from "../components/Home/Testimonials";
import MainItem from "../components/Home/MainItem";
import FeatureSection from "../components/Home/QualityServices";
import GetStarted from "../components/Home/GetStarted";

function Home() {
  return (
    <>
      <section aria-label="Introduction">
        <Introduction />
      </section>
      <section aria-label="Main Item">
        <MainItem />
      </section>
      <section aria-label="Features and Quality Services">
        <FeatureSection />
      </section>
      <section aria-label="Get Started">
        <GetStarted />
      </section>
      <section aria-label="Customer Testimonials">
        <Testimonials />
      </section>
    </>
  );
}

export default Home;
