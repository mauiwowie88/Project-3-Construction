import Intro from "../components/Home/Intro";
import Testimonials from "../components/Home/Testimonials";
import MainItem from "../components/Home/MainItem";
// import { sections } from "../db";

function Home() {
  return (
    <>
      <Intro />
      <MainItem />
      <Testimonials />
    </>
  );
}
export default Home;
