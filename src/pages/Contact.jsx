import React from "react";

import { IoIosSend } from "react-icons/io";
function Contact() {
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

        <form action="" className="reletive w-full flex flex-col items-center h-4/5">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-2/3 input validator border-2 border-black border-solid my-5 text-xl"
            required
          />

          <textarea name="" id="" className="textarea border-2 border-black w-2/3 h-1/4 my-4 text-xl" placeholder="Say Someting" required></textarea>


          <button className="btn btn-primary text-xl">
            <IoIosSend />
            <p>Send</p>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
