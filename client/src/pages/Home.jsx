import React from 'react';
import Hero from '../components/Hero';
import SmartHealth from '../components/SmartHealth';
import HealthAssistantCard from '../components/HealthAssistantCard';
import { homeHero, hacHome, hacHomeTitle, hacHomeDesc, hacHomeButton, homeSecureHealth, homeTestimonialTitle, homeTestimonialDesc, homeTestimonials, homeFaqs } from '../constants/allData';
import SecureHealth from '../components/SecureHealth';
import LifeChangingJourney from '../components/LifeChangingJourney';
import Testimonials from '../components/Testimonials';
import QuestionAndAnswer from '../components/QuestionAndAnswer';

const Home = () => {
  return (
    <>
      <Hero hero={homeHero} />

      <SmartHealth />

      <HealthAssistantCard 
        healthAssistantCard={hacHome} 
        title={hacHomeTitle} 
        desc={hacHomeDesc} 
        button={hacHomeButton}
      />
      
      <SecureHealth secureHealth={homeSecureHealth} />

      <Testimonials 
        title={homeTestimonialTitle}
        desc={homeTestimonialDesc}
        testimonial={homeTestimonials}
      />

      <QuestionAndAnswer faq={homeFaqs} />

      <LifeChangingJourney />

    </>
  )
}

export default Home;