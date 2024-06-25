import Intro from "../components/Home/Intro";
import Testimonials from "../components/Home/Testimonials";
import MainItem from "../components/Home/MainItem";
import FeatureSection from "../components/Home/FeatureSection";
import GetStarted from "../components/Home/GetStarted";

function Home() {
  return (
    <>
      <Intro />
      <MainItem />
      <FeatureSection />
      <GetStarted />
      <Testimonials />
    </>
  );
}
export default Home;
