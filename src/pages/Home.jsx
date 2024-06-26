import Introduction from "../components/Home/Introduction";
import Testimonials from "../components/Home/Testimonials";
import MainItem from "../components/Home/MainItem";
import FeatureSection from "../components/Home/QualityServices";
import GetStarted from "../components/Home/GetStarted";

function Home() {
  return (
    <>
      <Introduction />
      <MainItem />
      <FeatureSection />
      <GetStarted />
      <Testimonials />
    </>
  );
}
export default Home;
