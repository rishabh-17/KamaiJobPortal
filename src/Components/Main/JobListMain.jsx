import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import MyJobsPostingList from '../Browse Jobs/MyJobPostingList'

const JobListMain = () => {
  return (
    <main>
        {/* <Breadcrumb topic={"Jobs"} topicSpan={"Jobs List"}/> */}
        {/* <BrowseJobsList/> */}
        <MyJobsPostingList/>
    </main>
  )
}

export default JobListMain