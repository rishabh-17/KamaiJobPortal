import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import BrowseJobListJobseeker from '../Browse Jobs/Jobseeker/BrowseJobListJobseeker'
 
const JobListMainJobseeker = () => {
  return (
    <main>
        {/* <Breadcrumb topic={"Jobs"} topicSpan={"Jobs List"}/> */}
        <BrowseJobListJobseeker/>
    </main>
  )
}
 
export default JobListMainJobseeker