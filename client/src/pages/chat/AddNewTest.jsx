import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineAttachFile } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

const AddNewTest = () => {
  return (
    <div className="flex justify-center pt-[80px] bg-[#f8f9f9] w-full">
      <div className="w-3/4 relative">
        <div className="flex items-center gap-3 pb-3">
          <button onClick={() => window.history.back()}>
            <FaArrowLeftLong className="hover:text-darkBlue" />
          </button>
          <h1 className="text-[28px] font-[600]">New Lab Test</h1>
        </div>

        <p className="text-[18px] opacity-80">Note: Only text-based results are accepted. No imaging (e.g., CT, X-ray, MRI).</p>

        <div className=" bg-white w-full flex flex-col items-center justify-items-center mt-5">
          <div className="flex flex-col items-center justify-items-center text-center gap-5 w-1/2 py-10">

          <div className="w-2/3 space-y-5">
            <select className="outline-none p-3 border border-gray-300 cursor-pointer w-full">
                <option>Choose the test result type</option>
                <option>Blood</option>
                <option>Urine</option>
                <option>Pap Smear</option>
                <option>Semen Analysis</option>
                <option>Stool Test</option>
                <option>Swab Test</option>
            </select>

            <div className="outline-none p-3 border border-gray-300 cursor-pointer w-full">
                <div className="flex items-center gap-3" onClick={() => document.getElementById("date").click()}>
                    <CiCalendarDate className="text-[25px]" />
                    <input type="text" placeholder="Select test date" className="outline-none bg-transparent w-full" />
                </div>
                <input type="date" id="date" />
            </div>
            <div className="w-full">
              <button
                className="flex items-center justify-center gap-1 bg-whiteSmoke py-3 px-5 text-black font-[500] text-[18px] rounded-md hover:bg-slate-800 hover:text-white transition-all w-full"
                onClick={() => document.getElementById("fileInput").click()}
              >
                <MdOutlineAttachFile />
                Attach Test Result
              </button>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            <p className="text-[14px] text-left opacity-70">PDF, PNG or JPEG, max 15MB, max 3 pages</p>
            </div>

            <div>
                <p className="text-left">Additional Information (optional)</p>
                <textarea placeholder="Additional test information you think we should know about..." className="w-full border border-gray-300 p-3 outline-none" />
            </div>

          </div>
            
            <button
              to="/dashboard/test-results/new"
              className="flex items-center gap-3 bg-darkBlue py-3 px-5 text-white font-[600] text-[18px] rounded-md hover:bg-slate-800 transition-all"
            > Submit & Start Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewTest;