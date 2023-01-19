import { collection, addDoc } from "firebase/firestore"; 
import React, { useState, useRef } from 'react';
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

export const ContactUs = () => {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setEmail(`${e.target.value}`)
  }

  const handleName = (e) => {
    setName(`${e.target.value}`)
  }

  const handleMessage = (e) => {
    setMessage(`${e.target.value}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRef = doc(collection(db, "mail"))

    setDoc(emailRef, 
      {to: "amirtanvir96@gmail.com",
       message:{subject: `${name}: Bellegrove Developments Website`,
                text: `You have been sent an email from ${email}`,
                html: message
                },
      })


    setName("")
    setMessage("")
    setEmail("")


  }

  return (
		<div id='contactus' className="contactus pl-5 pr-5 ">
            <h2 class="mt-10 mb-4 text-4xl lg:text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
				<form>
                    <p class="mb-2 mt-5 lg:mb-5 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Interested in seeing our newly built flats? Enter your email below for a sneak peek!</p>
                    <label for="email" class="block mb-2 text-md font-bold text-gray-900 dark:text-gray-300">Fill out the form below! We will be in touch as soon as we can!</label>
                    
                    <input onChange={handleName} name="name" value={name} type="text" class=" mt-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required/>
                    <input onChange={handleChange} name="email" value={email} type="text" class="shadow-sm mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email Address" required/>
                    <input onChange={handleMessage} name="message" value={message} type="text" class="shadow-sm mt-3 py-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Message" required/>
                    <button onClick={handleSubmit} type="submit" class='mt-5 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-deepblue sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus'>Send message</button>
				</form>
		</div>
  )}
;

export default ContactUs