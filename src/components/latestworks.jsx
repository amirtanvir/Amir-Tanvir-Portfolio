import React from 'react'
import { Card, Badge, Button } from 'flowbite-react'
import bdl from '../images/bdl.jpg'
import aa from '../images/theaa.png'

const LatestWorks = () => {
  return (
    <div>
        <h1 className='ml-5 sm:ml-20 mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>Latest Works</h1>
        <div className="max-w-7xl ml-4 mr-4 sm:ml-20 sm:flex gap-5">
                <Card
                    imgAlt="Bellegrove Developments"
                    imgSrc={bdl}
                    className='mt-10'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Real Estate Website</h5>
                    <p className="text-md font-medium text-gray-700 dark:text-gray-400">
                    A landing page for a Real Estate Company. Backend utilises Firebase to send automated emails on submission. 
                    Fully responsive website on all devices, ensuring optimal user experience across all platforms.
                    </p>
                        <Button size="xs" href='https://www.bellegrovedevelopments.co.uk'>
                            Go to website
                        </Button>
                    <div className="flex flex-wrap gap-2">
                        <Badge color="gray">
                            Web Development
                        </Badge>
                        <Badge color="info">
                            React
                        </Badge>
                        <Badge color="indigo">
                            Tailwind CSS
                        </Badge>
                        <Badge color="warning">
                            Firebase
                        </Badge>
                        <Badge color="indigo">
                            Flowbite
                        </Badge> 
                        
                    </div>
                    
                    
                </Card>

                <Card
                    imgAlt="Bellegrove Developments"
                    imgSrc={aa}
                    className='mt-10'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mobile Detailing Service Website</h5>
                    <p className="text-md font-medium text-gray-700 dark:text-gray-400">
                    A user-friendly website featuring a calendar for scheduling appointments 
                    and a contact form for easy communication with our team. 
                    </p>
                    <Button size="xs" href='https://www.theautoalchemists.com/'>
                            Go to website
                        </Button>
                    <div className="flex flex-wrap gap-2">
                        <Badge color="gray">
                            Web Development
                        </Badge>
                        <Badge color="info">
                            WordPress
                        </Badge>
                        <Badge color="indigo">
                            Schedule Plugin
                        </Badge>
                        
                    </div>
                </Card>

                <Card
                    imgAlt="Bellegrove Developments"
                    imgSrc={bdl}
                    className='mt-10'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Real Estate Website</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                    
                </Card>

    </div>
    </div>
  )
}

export default LatestWorks