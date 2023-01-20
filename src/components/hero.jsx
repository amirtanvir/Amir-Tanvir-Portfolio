import React from 'react'
import greenwich from '../images/IMG_9414.jpg'

const Hero = () => {

    return (
        <div>
            <section class="bg-white dark:bg-gray-900 flex items-center justify-center">
                <div class="object-fill opacity-30">
                    <img src={greenwich} alt="Amir Tanvir at Greenwich Park" />
                </div>     

                <div class="hero absolute top-50 sm:top-50">
                    <div className=''>
                        <h1 class=" text-black max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">Hi, I'm Amir...</h1>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"> <span className='font-bold'>Web Developer.</span> <span className='font-semibold'>Photographer.</span><br /> <span className='font-medium'>Content Creator.</span> Mechanical Engineer</p>
                        <a href="#" class=" px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Say Hello!
                        </a> 
                    </div>           
                </div>
            </section>
        </div>
    )
}

export default Hero