import React from "react";
import Hero from "../components/Hero";
import HealthAssistantCard from "../components/HealthAssistantCard";
import QuestionAndAnswer from "../components/QuestionAndAnswer";
import Testimonials from "../components/Testimonials";
import LifeChangingJourney from "../components/LifeChangingJourney";
import HowItWork from "../components/HowItWork";
import LabResultAndSupplimentSection from "../components/LabResultAndSupplimentSection";

import {
  supplementHero,
  hacSupplement,
  hacSupplementTitle,
  hacSupplementUsers,
  hacSupplementDesc,
  hiwSupplement,
  hiwSupplementButton,
  hiwSupplementDesc,
  hiwSupplementTitle,
  lrassSupplemtent,
  supplementTestimonialTitle,
  supplementTestimonialDesc,
  supplementTestimonials,
  supplementFaqs,
} from "../constants/allData";

const Supplements = () => {
  return (
    <>
      <Hero hero={supplementHero} />
      <HealthAssistantCard
        title={hacSupplementTitle}
        desc={hacSupplementDesc}
        users={hacSupplementUsers}
        healthAssistantCard={hacSupplement}
      />

      <HowItWork
        title={hiwSupplementTitle}
        desc={hiwSupplementDesc}
        howitwork={hiwSupplement}
        button={hiwSupplementButton}
      />
      <LabResultAndSupplimentSection labAndSupplement={lrassSupplemtent} />

      <Testimonials
        title={supplementTestimonialTitle}
        desc={supplementTestimonialDesc}
        testimonial={supplementTestimonials}
      />
      <QuestionAndAnswer faq={supplementFaqs} />

      <LifeChangingJourney />
    </>
  );
};

export default Supplements;