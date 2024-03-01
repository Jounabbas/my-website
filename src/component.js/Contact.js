import React, { useState } from "react";
import Footer from "./Footer";
import Midlecontent from "./Midlecontent";
import { Link } from "react-router-dom";

const Contact = () => {

  //
  const to="ajoun0176@gmail.com"
  const [formData, setFormData] = useState({
      name: '',
      id: '',
      company_name: '',
      budget: '',
    });
  
    const handleform = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const submit = (e) => {
      e.preventDefault();
  
      const { name, id, company_name, budget } = formData;
  
      // Create a mailto link with the form data
      const mailtoLink = `mailto:${to}?subject=Form Submission&body=
        Name: ${name}%0D%0A,
        User_ID: ${id}%0D%0A,
        Company_Name: ${company_name}%0D%0A,
        Address: ${budget}`;
  
      // Open the mail client with the mailto link
      window.location.href = mailtoLink;
    };
  return (
    <>
      <div className="row" >
        <div className="col" id="con_sec1" data-aos="zoom-in-right">
          <p>it's hard not to find your</p>
          <h1>PARTNER</h1>
        </div>
      </div>
      <div className="row mx-3 " id="" data-aos="flip-right">
        <div className="col-md-6" style={{ marginTop: "-40px" }}>
          <Link target="_blank" to="https://www.facebook.com/jabirsons">
            <img
              className="mx-3"
              src="https://www.gamedistrict.co/assets/img/facebook_icon.png"
              alt=""
            />
          </Link>
          <Link target="_blank" to="https://www.instagram.com/jabir3sons/">
            <img
              className="mx-3"
              src="https://www.gamedistrict.co/assets/img/insta_icon.png"
              alt=""
            />
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/company/jabirsons/"
          >
            <img
              className="mx-3 my-3"
              src="https://www.gamedistrict.co/assets/img/inn_icon.png"
              alt=""
            />
          </Link>
          <Link target="_blank" to="https://www.youtube.com/@JabirSons">
            <img
              className="mx-3"
              src="https://www.gamedistrict.co/assets/img/youtube_icon.png"
              alt=""
            />{" "}
          </Link>
        </div>
        <div data-aos="slide-left"
          className="col-md-6"
          id="con_sec3"
          style={{ backgroundColor: "white" }}
        >
          <p>
            Write Something About Your Project So We Can Get Back To You With A
            Proposal In 24hours.
          </p>
          <img id="imm"
            src="https://www.gamedistrict.co/assets/img/mail_icon.png"
            alt=""
          />

          <div className="row my-3  mx-3">
            <div className="col-md-6 my-3 input">
            <input type="text" name="name" value={formData.name} placeholder="Enetr name" onChange={handleform} />
            </div>
            <div className="col-md-6 my-3 input">
              <input type="password"  name="id"onChange={handleform} value={formData.id} placeholder="Enter your ID" />
            </div>
            <div className="col-md-6 my-3 input">
              <input type="text" name="company_name"onChange={handleform}value={formData.company_name} placeholder=" COMPANY NAEM" />
            </div>
            <div className="col-md-6 my-3 input">
              <input type="text" name="budget"onChange={handleform} value={formData.budget} placeholder="Aprox budget" />
            </div>
            <h3>optional</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="project detail"
            ></textarea>
            <input
              className="my-4"
              type="file"
              id="fileInput"
              name="fileInput"
              accept=".html,.jpg,.js, .doc, .docx"
            ></input>
            <button id="upload" onClick={submit}>UPLOAD YOUR PROJECT</button>
          </div>
        </div>
      </div>

      <Midlecontent />
      <Footer />
    </>
  );
};

export default Contact;
