import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { lab_test_interpretation } from "../../constants/images";
import { HiPlus } from "react-icons/hi";

const TestResults = () => {
  const username = localStorage.getItem("username");
  return (
    <div className="flex justify-center pt-[80px] bg-[#f8f9f9] w-full h-screen px-3">
      <div className="lg:w-3/4 w-full relative">
        <div className="flex items-center gap-3 pb-10">
          <button onClick={() => window.history.back()}>
            <FaArrowLeftLong className="hover:text-darkBlue" />
          </button>
          <h1 className="text-[28px] font-[600]">{`${username} Lab Tests`}</h1>
        </div>

        <div className="w-full flex flex-col items-center justify-items-center pt-20">
          <div className="flex flex-col items-center justify-items-center text-center gap-5 lg:w-1/2 w-full">
            <img
              src={lab_test_interpretation}
              alt="image"
              style={{ width: "100px" }}
            />
            <p className="text-[25px] font-[600]">
              You haven’t added any tests yet
            </p>
            <p className="text-[18px]">
              Add a new test to start gaining valuable insights into your
              health.
            </p>
            <Link
              to="/dashboard/test-results/new"
              className="flex items-center gap-3 bg-darkBlue py-3 px-5 text-white font-[600] text-[18px] rounded-md hover:bg-slate-800 transition-all"
            >
              <HiPlus /> Add New Test Result
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResults;