import React from "react";
import { doctor_1, personal_ai_doctor } from "../constants/images";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/Buttons";
import SecondOpenionHowItWork from "../components/SecondOpenionHowItWork";
import HealthAssistantCard from "../components/HealthAssistantCard";
import CompanyLogoSection from "../components/CompanyLogoSection";
import SecureHealth from "../components/SecureHealth";
import Testimonials from "../components/Testimonials";
import QuestionAndAnswer from "../components/QuestionAndAnswer";
import LifeChangingJourney from "../components/LifeChangingJourney";
import {
  secondOpenionHowItWork,
  hacSecondOpenion,
  hacSecondOpenionButton,
  hacSecondOpenionTitle,
  secondOpenionSecureHealth,
  homeTestimonialTitle,
  homeTestimonialDesc,
  homeTestimonials,
  secondOpenionFaqs,
} from "../constants/allData";

const SecondOpenion = () => {
  const doctors = [
    {
      image: doctor_1,
      title: "Sajjad Ali",
      detail: "pakistan, top specialist 22 years old",
    },
    {
      image: doctor_1,
      title: "Sajjad Ali",
      detail: "pakistan, top specialist 22 years old",
    },
    {
      image: doctor_1,
      title: "Sajjad Ali",
      detail: "pakistan, top specialist 22 years old",
    },
    {
      image: doctor_1,
      title: "Sajjad Ali",
      detail: "pakistan, top specialist 22 years old",
    },
  ];
  return (
    <>
      <div className="lg:px-28 md:px-10 px-3 lg:pt-[212px] md:pt-[190px] pt-[150px]">
        <div className="lg:text-center md:text-center text-left space-y-5">
          <h1 className="lg:text-[50px] md:text-[36px] text-[28px]">
            Get an online second opinion from Top Doctors
          </h1>
          <p>
            Verify your diagnosis and treatment strategy with top doctors from
            the Pakistani before making crucial health decisions.
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 pt-10">
            {doctors.map((items, index) => {
              return (
                <div
                  key={index}
                  className=" border border-slate-300 rounded-md cursor-pointer"
                >
                  {items.image && <img src={items.image} alt="image" />}
                  <div className="space-y-2 p-5">
                    <h1 className="text-[20px]">{items.title}</h1>
                    <p className="text-[15px]">{items.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center pt-16">
            <PrimaryButton text="Choose Top Doctor" path="/doctors" />
          </div>
        </div>
      </div>

      <SecondOpenionHowItWork secondOpenionHowItWork={secondOpenionHowItWork} />
      <CompanyLogoSection />
      <HealthAssistantCard
        title={hacSecondOpenionTitle}
        button={hacSecondOpenionButton}
        healthAssistantCard={hacSecondOpenion}
      />
      <SecureHealth secureHealth={secondOpenionSecureHealth} />
      <Testimonials
        title={homeTestimonialTitle}
        desc={homeTestimonialDesc}
        testimonial={homeTestimonials}
      />

      <div className="flex flex-col items-center justify-center mt-36 px-3 bg-[#272a3d] text-white py-16">
        <img src={personal_ai_doctor} alt="image" className="w-[100px] pb-3" />
        <h1 className="text-[30px] pb-5">DocAI Doctor</h1>
        <p>
          Our AI-based virtual health assistant has answers to any question
          related to your health.
        </p>
        <div className="pt-10">
          <Link
            to="/welcome"
            className="text-center bg-darkBlue font-[600] text-[18px] px-7 py-3 rounded-md hover:bg-slate-400 transition-all text-white"
          >
            Chat with AI Doctor
          </Link>
        </div>
      </div>

      <QuestionAndAnswer faq={secondOpenionFaqs} />

      <LifeChangingJourney />
    </>
  );
};

export default SecondOpenion;