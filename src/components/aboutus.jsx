import React from 'react'
import { Accordion } from 'flowbite-react'

const AboutUs = () => {
  return (
    <div id='aboutus' className='pl-5 pr-5'>
        <div className=' pt-8 mb-4 text-4xl font-extrabold tracking-tight leading-none text-deepblue md:text-5xl lg:text-5xl dark:text-white'>
            About Us
        </div>

        <Accordion alwaysOpen={true}>
            <Accordion.Panel>
                        <Accordion.Title>
                        Our History
                        </Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
                            Our development company was established in 2021 by consortium of developers, who bring over 40 years of experience in the industry. Operating in London & Kent regions. Since then, we have grown into a team of skilled professionals who are dedicated to delivering top-quality work for our clients. <br />

                            <br /> Throughout the years, we have completed a wide range of projects, from small renovations to large-scale residential builds. We have built a reputation for being reliable, efficient, and committed to excellence. <br />

                            <br />We strive to turn houses into homes for the broader commmunity - providing the highest level of residential living. This has allowed us to better serve our clients and meet the diverse needs of the community. <br />

                            We are proud of the work we have accomplished over the years and look forward to continuing to serve our clients for many more years to come. <br />
                        </p>
                        </Accordion.Content>
                    </Accordion.Panel>
        <Accordion.Panel>
            <Accordion.Title>
            What services are available?
            </Accordion.Title>
            <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
                We offer many types of services including: <br />
                <br />
                <ul className='list-disc ml-5'>
                    <li>Home Renovations</li>
                    <li>New Build Flats</li>
                    <li>Conversions</li>
                    <li>Consultations</li>
                    <li>Land/Property Acquisition</li>
                </ul>
            </p>
            </Accordion.Content>
        </Accordion.Panel>
        </Accordion>
    </div>
  )
}

export default AboutUs