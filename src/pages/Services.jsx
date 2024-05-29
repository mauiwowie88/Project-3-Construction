import { SectionImg } from "../components/Extra";
import Carousel from "../components/Carousel";

import Characteristics from "../components/Characteristics";
import { yo, work } from "../assets/db";

function Services() {
  return (
    <>
      <SectionImg title="Services" />
      <Characteristics label={yo} />
      <Carousel images={work} />
    </>
  );
}
export default Services;
