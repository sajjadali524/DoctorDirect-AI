import axios from "axios";
import { useState } from "react";

const DoctorSignup = () => {
 
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    profile_photo: null,
    cv: null,
    email: "",
    phone_number: "",
    country: "",
    document_number: "",
    expiration_date: "",
    document: null,
    experience: "",
    publication: "",
    specialities: "",
    subspeciality: "", 
    procedures_performed: "",
    icd_codes: "",
    biography: ""
  });

  const [fileName, setFileName] = useState({
    profile_photo: "",
    cv: "",
    document: ""
  });

const handleForm = (e) => {
  const {name, value, files} = e.target;
  if(files && files.length > 0) {
    setFormData((prev) => ({
      ...prev, [name]: files[0],
    }));
    setFileName((prev) => ({
      ...prev, [name]: files[0].name,
    }));
  }else {
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  }
}

  const submitForm = async (e) => {
    e.preventDefault();
      
      try {
          const data = new FormData();
    
            // Append form data including file uploads
            for (const key in formData) {
                data.append(key, formData[key]);
            }
            const response = await axios.post('http://localhost:8000/api/doctor/register', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            window.location.href="/"
            console.log("response: ", response.data);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="lg:px-28 md:px-10 px-3 bg-whiteSmoke w-full py-10">
      <h1 className="text-[25px] font-[600]">Fill in your application</h1>
      <h1 className="text-[25px] font-[600]">Please fill out the details below to complete your application.</h1>
      <div className="pt-10">
        <form onSubmit={submitForm} className="space-y-5">
      {/* Basic Information */}
          <h1 className="text-[22px] font-[500]">Basic Information</h1>
          <div className=" bg-white px-7 py-10 rounded-2xl shadow-md mt-5 space-y-7">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 items-center justify-center">
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="first name" className="font-[600] opacity-70 text-[17px]" >First name</label>
              <input type="text" name="first_name" className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-2 px-3" onChange={handleForm}/>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="last name" className="font-[600] opacity-70 text-[17px]">Last name</label>
              <input type="text" name="last_name" className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-2 px-3" onChange={handleForm}/>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="dob" className="font-[600] opacity-70 text-[17px]">Date of birth</label>
              <input type="date" name="dob" className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-2 px-3 opacity-70" onChange={handleForm}/>
            </div>
            </div>
            <div className="lg:flex lg:items-center lg:justify-between lg:space-y-0 space-y-5">
            <div className="flex flex-col space-y-2">
              <label htmlFor="photo" className="font-[600] opacity-70 text-[17px]">Photo</label>
                <span className="bg-whiteSmoke text-[17px] font-[400] text-slate-500 px-3 py-2 rounded-md cursor-pointer" onClick={() => document.getElementById("choose_photo").click()}>{fileName.profile_photo ? fileName.profile_photo : "Choose file"}</span>
                <input type="file" name="profile_photo" id="choose_photo" style={{display: "none"}} className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-1 px-3" onChange={handleForm}/>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="cv" className="font-[600] opacity-70 text-[17px]">CV</label>
              <div className="flex">
                <span className="lg:w-[200px] w-full border border-slate-300 py-2 cursor-pointer" onClick={() => document.getElementById("choose_cv").click()}>{fileName.cv && fileName.cv}</span>
                <span className="bg-whiteSmoke text-[17px] font-[400] text-slate-500 px-3 py-2 rounded-md cursor-pointer" onClick={() => document.getElementById("choose_cv").click()}>Browse</span>
                <input type="file" name="cv" id="choose_cv" style={{display: "none"}} className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-1 px-3" onChange={handleForm}/>
              </div>
            </div>
            </div>
          </div>

      {/* Contact Information */}
          <h1 className="text-[22px] font-[500]">Contact Information</h1>
          <div className=" bg-white px-7 py-10 rounded-2xl shadow-md mt-5 space-y-7">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 items-center justify-center">
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="email" className="font-[600] opacity-70 text-[17px]" >Email</label>
              <input type="email" name="email" className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-2 px-3" onChange={handleForm}/>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="phone number" className="font-[600] opacity-70 text-[17px]">Phone number (with country code)</label>
              <input type="text" name="phone_number" className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-2 px-3" onChange={handleForm}/>
            </div>
            </div>
          </div>

      {/* license/ diploma Information */}
          <h1 className="text-[22px] font-[500]">License/Approbation/Diploma</h1>
          <div className=" bg-white px-7 py-10 rounded-2xl shadow-md mt-5 space-y-7">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 items-center justify-center">
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="country" className="font-[600] opacity-70 text-[17px]" >Country</label>
              <input type="text" name="country" className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-2 px-3" onChange={handleForm}/>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="document number" className="font-[600] opacity-70 text-[17px]">Document number (optional)</label>
              <input type="text" name="document_number" className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-2 px-3" onChange={handleForm}/>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="expiration date" className="font-[600] opacity-70 text-[17px]">Expiration Date (eg.2024)</label>
              <input type="text" name="expiration_date" className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-2 px-3" onChange={handleForm}/>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="document" className="font-[600] opacity-70 text-[17px]">Attach Document</label>
              <div className="flex">
                <span className="lg:w-[200px] w-full border border-slate-300 py-2 cursor-pointer" onClick={() => document.getElementById("choose_document").click()}>{fileName.document && fileName.document}</span>
                <span className="bg-whiteSmoke text-[17px] font-[400] text-slate-500 px-3 py-2 rounded-md cursor-pointer" onClick={() => document.getElementById("choose_cv").click()}>Browse</span>
                <input type="file" name="document" id="choose_document" style={{display: "none"}} className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-1 px-3" onChange={handleForm}/>
              </div>
            </div>

            </div>
          </div>

          {/* experince and publication Information */}
          <h1 className="text-[22px] font-[500]">Experience/Publication</h1>
          <div className=" bg-white px-7 py-10 rounded-2xl shadow-md mt-5 space-y-7">
            <div className="flex gap-5 items-center justify-center">
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="experience" className="font-[600] opacity-70 text-[17px]" >Years of experience</label>
              <input type="number" name="experience" className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-2 px-3" onChange={handleForm}/>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="publication" className="font-[600] opacity-70 text-[17px]">Paper publication</label>
              <input type="number" name="publication" className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-2 px-3" onChange={handleForm}/>
            </div>
            </div>
          </div>

      {/* Speciality Information */}
          <h1 className="text-[22px] font-[500]">Speciality</h1>
          <div className=" bg-white px-7 py-10 rounded-2xl shadow-md mt-5 space-y-7">
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="specialities" className="font-[600] opacity-70 text-[17px]" >Specialities</label>
              <input type="text" name="specialities" placeholder="enter entries" className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-2 px-3" onChange={handleForm}/>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="subspeciality" className="font-[600] opacity-70 text-[17px]" >Subspeciality (Specialization)</label>
              <input type="text" name="subspeciality" placeholder="e.g Medical Oncology, Prediatric Neurology" className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-2 px-3 placeholder-slate-300" onChange={handleForm}/>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="procedures performed" className="font-[600] opacity-70 text-[17px]" >Procedures performed</label>
              <input type="text" name="procedures_performed" placeholder="e.g Chemotherapy, Spinal Neurosurgery" className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-2 px-3 placeholder-slate-300" onChange={handleForm}/>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="icd codes" className="font-[600] opacity-70 text-[17px]" >ICD codes or Diseases</label>
              <input type="text" name="icd_codes" placeholder="e.g C88, Cg11 - Cg17 or Lymphoma Lemphoid Leukemia," className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-2 px-3 placeholder-slate-300" onChange={handleForm}/>
            </div>

            </div>
      {/* Biography Information */}
          <h1 className="text-[22px] font-[500]">Biography</h1>
          <div className=" bg-white px-7 py-10 rounded-2xl shadow-md mt-5 space-y-7">
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="biography" className="font-[600] opacity-70 text-[17px]" >Biography (write atleast 300 word)</label>
              <textarea type="text" name="biography" placeholder="write here..." className="outline-none font-[500] text-[18px] border border-slate-300 rounded-md py-2 px-3 h-40" onChange={handleForm}></textarea>
            </div>

            </div>

            <div className="flex items-center justify-end text-white">
              <button className="bg-darkBlue px-20 py-3 rounded-md hover:bg-slate-500">Submit</button>
            </div>

        </form>
      </div>
    </div>
  )
}

export default DoctorSignup;