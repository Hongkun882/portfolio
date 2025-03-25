import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import emailjs from '@emailjs/browser'
import { toast } from "react-toastify";
function Contact() {

  const [formdata, setFormData] = useState({

    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData(pre => ({
      ...pre,

      [e.target.name]: e.target.value
    }))

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(serviceId)
      await emailjs.send(serviceId,templateId,formdata,publicKey);
      toast.success("Email Sent Successfully")
      setLoading(false)
      setFormData({

        email: "",
        message: ""
      })
    } catch (error) {
      console.error(error)
      toast.error("Email Was Not Sent");
      setLoading(false)
    }
    
  }

  return (
    <section
      className="w-full min-h-screen flex justify-center pt-12 h-auto"
      id="Contact"
    >
      <div className=" flex flex-col w-1/2 min-w-[700px] items-center">
        <h1 className="text-4xl text-center">Contact Me</h1>

        <h3>
          Please Contact me directly at <u>hongkunguan@gmail.com</u>
        </h3>

        <form action="" className="reletive w-full flex flex-col items-center h-4/5" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-2/3 input validator border-2 border-black border-solid my-5 text-xl"
            value={formdata.email}
            name="email"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            value={formdata.message}
            className="textarea border-2 border-black w-2/3 h-1/4 my-4 text-xl"
            placeholder="Say Someting"
            onChange={handleChange}
            required>

          </textarea>


          <button className={`btn btn-primary text-xl ${loading ? "disabled": ""}`}>
            <IoIosSend />
            <p>Send</p>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
