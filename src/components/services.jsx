import React from 'react'
import { services } from '../constants'

const Services = () => {
  return (
    <div>
        <section class="bg-white dark:bg-gray-900 pl-10 pr-10">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="max-w-screen-md mb-8 lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white ">Services</h2>
                    <p class="text-gray-500 sm:text-xl dark:text-gray-400 ">I am proud to offer a wide range of professional skills to help your business succeed. 
                                I am dedicated to providing you with the highest level of service.</p>
                </div>
                <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 ">

                        {services.map((service,index) =>
                    (
                        <div className='dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                        <div class=" flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">{service.title}</h3>
                        <p class="text-gray-500 dark:text-gray-400">{service.description}</p>
                    </div>
                    )
                    
                    )}

            </div>
            </div>
        </section>
    </div>
  )
}

export default Services