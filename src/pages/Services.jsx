import React from "react";
import FP from "../components/About/FP";
import ServicesGrid from "../components/Services/ServicesGrid";
import LongProcess from "../components/Services/LongProcess";
import Hesitate from "../components/Services/Hesitate";

import ServicesContent from "../components/Services/ServicesContent";
import Header from "../components/Home/Header";
const Services = () => (
  <>
    <Header />
    <FP />
    <ServicesContent />
    <ServicesGrid />
    <LongProcess />
    <Hesitate />
  </>
);

export default Services;
