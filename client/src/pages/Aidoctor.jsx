import React from "react";
import Hero from "../components/Hero";
import HealthJourney from "../components/HealthJourney";
import HealthAssistantCard from "../components/HealthAssistantCard";
import SecureHealth from "../components/SecureHealth";
import Testimonials from "../components/Testimonials";
import QuestionAndAnswer from "../components/QuestionAndAnswer";
import LifeChangingJourney from "../components/LifeChangingJourney";
import CompanyLogoSection from "../components/CompanyLogoSection";
import {
  aiDoctorHero,
  aidoctorHealthjourneyTitle,
  aidoctorHealthJourney,
  hacAidoctorTitle,
  hacAidoctor,
  hacAidoctorButton,
  aidoctorSecureHealth,
  aidoctorTestimonialTitle,
  aidoctorTestimonialDesc,
  aidoctorTestimonials,
  aidoctorFaqs,
} from "../constants/allData";

const Aidoctor = () => {
  return (
    <>
      <Hero hero={aiDoctorHero} />
      <HealthJourney
        title={aidoctorHealthjourneyTitle}
        healthJourney={aidoctorHealthJourney}
      />
      <HealthAssistantCard
        title={hacAidoctorTitle}
        healthAssistantCard={hacAidoctor}
        button={hacAidoctorButton}
      />

      <CompanyLogoSection />

      <SecureHealth secureHealth={aidoctorSecureHealth} />

      <Testimonials
        title={aidoctorTestimonialTitle}
        desc={aidoctorTestimonialDesc}
        testimonial={aidoctorTestimonials}
      />

      <QuestionAndAnswer faq={aidoctorFaqs} />

      <LifeChangingJourney />
    </>
  );
};

export default Aidoctor;