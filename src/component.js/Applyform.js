import React, { useState } from "react";
import Footer from "./Footer";
import pic1 from "./career/PIC2.png"
const Applyform = () => {
  const [formData,setFormData]=useState({
    name:"",
    id:"",
    number:"",
    addres:"",
    education:"",
    email:""
  })
const to ="jounabbasreact.js@gmail.com"
  const handleform=((e)=>{
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value,
    })
   
  })

  const submit=((e)=>{ 
    e.preventDefault();
    const mailtoLink = `mailto:${to}?subject=Form Submission&body=
    Name: ${formData.name}%0D%0A
    User_Id: ${formData.id}%0D%0A
    Number:  ${formData.number}%0D%0A
    addres:  ${formData.addres}%0D%0A
    education:  ${formData.education}%0D%0A
    email: ${formData.email}`;

  // Open the mail client with the mailto link
  window.location.href = mailtoLink;
    setFormData(" ")
  })
  return (
    <>
      <div className="row my-4 mx-3" >
        <div className="col-md-6 imagess" >
          <img data-aos="flip-right"
            id="pic"
            src={pic1}
            alt=""
          />
        </div>
        <div className="col-md-6" data-aos="slide-left">
          <h2>Application Form</h2>
          <input
            className="my-3"
            onChange={handleform}
            style={{ width:"100%" }}
            type="text"
            name="name"
            placeholder="Enetr Full Name"
          />
          <input
            className="my-3"
            onChange={handleform}
            style={{ width: "100%" }}
            type="password"
            name="id"
            placeholder="enter ID"
          />
        <input
            className="my-3"
            onChange={handleform}
            style={{ width: "100%" }}
            type="text"
            name="number"
            placeholder="Enetr Contact  Num "
          />
          <input
            className="my-3"
            onChange={handleform}
            style={{ width: "100%" }}
            type="text"
            name="addres"
            placeholder="Enetr Home Addres "
          />
          <input
            className="my-3"
            onChange={handleform}
            style={{ width: "100%" }}
            type="text"
            name="education"
            placeholder="EDUCAtion"
          />
          <input
            className="my-3"
            onChange={handleform}
            style={{ width: "100%" }}
            type="email"
            name="email"
            placeholder="Enetr Email ID "
          />
          <button id="submit" onClick={submit} type="submit">SUBMIT</button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Applyform;
