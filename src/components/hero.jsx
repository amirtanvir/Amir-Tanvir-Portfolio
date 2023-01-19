import React from 'react'
import construction from '../assets/construction_02.mp4'

const Hero = () => {
  return (
            <section class="bg-white dark:bg-gray-900">

                <div className='bg-deepblue'>
                <video class='object-cover opacity-20 w-auto min-w-full min-h-full max-w-none' src={construction} autoPlay muted loop ></video>
                </div>

                <div className="hero absolute top-40 flex flex-col justify-center items-center">
                <div class="mt-10 py-8 px-4 mx-auto max-w-screen-xl text-center mr-8 lg:py-16 lg:px-12">
                    <a href="#" class="inline-flex justify-between items-center py-2 px-1 pr-2 mb-7 text-sm text-gray-700 bg-paperyellow rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                        <span class="text-xs bg-lightpurple rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-xs font-medium">We have just finished a development!</span> 
                        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-offwhite md:text-5xl lg:text-6xl dark:text-white">Transforming spaces, enhancing lives</h1>
                        <p class="mb-8 text-lg font-normal text-offwhite lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        At Bellegrove Developments, we are dedicated to delivering top-quality construction and development services to our clients. From residential and commercial buildings to infrastructure and conversions. We pride ourselves on our attention to detail, innovative design solutions, and customer satisfaction. 
                        </p>
                    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

                    </div>
                    </div>
                </div>
            </section>
  )
}

export default Hero