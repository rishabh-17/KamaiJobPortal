import React from 'react'
import Breadcrumb from '../../Breadcrumb/Breadcrumb'
import BrowseJobsList from '../BrowseJobsList'


const JobListMain = () => {
  return (
    <main>
        <Breadcrumb topic={"Jobs"} topicSpan={"Jobs List"}/>
        <BrowseJobsList/>
    </main>
  )
}

export default JobListMain