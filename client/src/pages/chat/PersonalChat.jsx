import { FaArrowLeftLong } from "react-icons/fa6";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineAttachFile } from "react-icons/md";
import { MdSend } from "react-icons/md";
import { personal_ai_doctor } from "../../constants/images";
import { useState } from "react";

const PersonalChat = () => {
  const username = localStorage.getItem("username");
  const [isToggle, setIsToggle] = useState(false);
  var chats = "";
  const [input, setInput] = useState("");

  const sendChat = () => {
    chats += input;
    setInput("")
    console.log(chats)
  };
  return (
    <div className="flex justify-center pt-[80px] bg-[#f8f9f9] w-full h-screen px-3">
      <div className="lg:w-3/4 w-full relative">
        <div className="flex items-center gap-3 pb-10">
          <button onClick={() => window.history.back()}>
            <FaArrowLeftLong className="hover:text-darkBlue" />
          </button>
          <h1 className="text-[20px] font-[500]">{`${username} AI Doctor`}</h1>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex items-center justify-center  w-28 h-28 bg-lightBlue rounded-full">
            <img src={personal_ai_doctor} alt="img" className="w-20 h-20" />
          </div>
        </div>

        {/* messagess */}
        <div>
          {/* {chats.map((val, index) => {
            return (<h1 key={index}>{val}</h1>)
          })} */}
        </div>

        <div className="space-y-3 w-full p-5 bg-white border border-slate-200 absolute bottom-5 rounded-lg">
          <input
            type="text"
            placeholder="Type your question here..."
            className="w-full outline-none bg-transparent"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div className="flex items-center justify-between">
            <MdOutlineAttachFile
              className="cursor-pointer text-[20px]"
              onClick={() => setIsToggle(!isToggle)}
            />
            <div className="flex items-center justify-center bg-darkBlue rounded-sm p-1">
              <MdSend className="cursor-pointer text-[20px] bg-darkBlue text-white" onClick={sendChat} />
            </div>
          </div>
        </div>

        {isToggle && (
          <div className="absolute space-y-1 left-5 bottom-16 shadow-lg transition-all bg-white w-[300px] p-3">
            <div className="w-full">
              <button
                className="flex items-center justify-center gap-1 bg-darkBlue py-3 px-5 text-white font-[600] text-[18px] rounded-md hover:bg-slate-800 transition-all w-full"
                onClick={() => document.getElementById("fileInput").click()}
              >
                <MdOutlineAttachFile />
                Attach
              </button>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>

            <p className="opacity-70 text-[14px]">Limitation</p>
            <p className="flex items-center gap-2 text-[14px] opacity-70">
              <CiFileOn className="text-[18px]" /> File format: PDF, PNG, JPG,
              JPEG
            </p>
            <p className="flex items-center gap-2 text-[14px] opacity-70">
              <MdOutlineAttachFile className="text-[18px] rotate-45 opacity-70" />{" "}
              Max file size: 15MB
            </p>
            <p className="flex items-center gap-2 text-[14px] opacity-70">
              <CiFileOn className="text-[18px]" /> Up to 3 pages
            </p>
            <span className="text-[14px] opacity-70 mt-10">
              Note: Text-based records only; no imaging (e.g., X-rays, MRIs).
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalChat;