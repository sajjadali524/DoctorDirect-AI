import React from "react";
import Hero from "../components/Hero";
import HealthAssistantCard from "../components/HealthAssistantCard";
import HealthJourney from "../components/HealthJourney";
import SecureHealth from "../components/SecureHealth";
import SupportedLabTestTypes from "../components/SupportedLabTestTypes";
import Testimonials from "../components/Testimonials";
import LabResultAndSupplimentSection from "../components/LabResultAndSupplimentSection";
import QuestionAndAnswer from "../components/QuestionAndAnswer";
import LifeChangingJourney from "../components/LifeChangingJourney";
import {
  ltiHero,
  hacltiTitle,
  hacltiDesc,
  haclti,
  hacltiUsers,
  ltiHealthJourney,
  ltiHealthjourneyTitle,
  ltiSecureHealth,
  supportedLabTestCard,
  ltiTestimonialTitle,
  ltiTestimonialDesc,
  ltiTestimonials,
  lrassLti,
  ltiFaqs,
} from "../constants/allData";

const LabTestInterpretation = () => {
  return (
    <>
      <Hero hero={ltiHero} />
      <HealthAssistantCard
        title={hacltiTitle}
        desc={hacltiDesc}
        users={hacltiUsers}
        healthAssistantCard={haclti}
      />
      <HealthJourney
        title={ltiHealthjourneyTitle}
        healthJourney={ltiHealthJourney}
      />

      <SecureHealth secureHealth={ltiSecureHealth} />

      <SupportedLabTestTypes supportedLabTestCard={supportedLabTestCard} />

      <Testimonials
        title={ltiTestimonialTitle}
        desc={ltiTestimonialDesc}
        testimonial={ltiTestimonials}
      />

      <LabResultAndSupplimentSection labAndSupplement={lrassLti} />

      <QuestionAndAnswer faq={ltiFaqs} />

      <LifeChangingJourney />
    </>
  );
};

export default LabTestInterpretation;