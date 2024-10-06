import React, { useState } from "react";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const QuestionAndAnswer = ({ faq = [] }) => {
  const [toggleAns, setToggleAns] = useState(null);
  const handleAnswer = (index) => {
    setToggleAns((prev) => (prev === index ? null : index));
  };
  return (
    <div className="flex flex-col items-center lg:px-28 md:px-10 px-3 pt-36">
      <div className="lg:w-[800px] md:w-[500px] w-full">
        <div className="">
          <h1 className="text-center lg:text-[36px] md:text-[25px] text-[20px]">
            Have questions? Let’s find answers
          </h1>
        </div>

        <div className="pt-10">
          <hr />
          {faq.map((items, index) => {
            return (
              <div key={index} className="">
                <div
                  className="flex items-center justify-between lg:px-3 md:px-3 px-0 py-5 cursor-pointer"
                  onClick={() => handleAnswer(index)}
                >
                  <h1 className="text-[18px] font-semibold">{items.title}</h1>
                  <MdArrowRight
                    className={`text-[25px] ${
                      toggleAns === index && "rotate-90"
                    }`}
                  />
                </div>
                {toggleAns === index && (
                  <div className="lg:pr-10 pr-0 lg:px-3 md:px-3 px-0 pb-5">
                    <p>{items.detail}</p>
                  </div>
                )}
                <hr />
              </div>
            );
          })}
        </div>
        <h1 className="text-[18px] font-bold pt-10">
          Have more questions?{" "}
          <Link to="/contact" className="text-darkBlue underline text-[20px]">
            {" "}
            Contact us
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;