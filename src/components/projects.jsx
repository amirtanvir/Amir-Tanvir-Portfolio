import React from 'react'
import { Card, Badge } from 'flowbite-react'
import { projectInfo } from '../constants'


const Projects = () => (
    <div id='projects' className='bg-deepblue '>
      
      <div className=' text-white pt-5 mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-white'>
        Projects
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-5 p-5">
        {projectInfo.map((project,index) =>
          (
            <Card key={index} href='#' imgSrc={`images/${project.id}.png`}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge color={`${project.status === "Completed" ? 'success' : 'failure' }`}>
                  {project.status}
                </Badge>
              </div>
            </Card>
        )
        
        )}
      </div>
    </div>


    
  )


export default Projects