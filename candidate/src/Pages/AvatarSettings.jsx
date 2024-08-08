import React from 'react'
// import AvatarSelection from '../Components/Avatar/AvatarSelection/AvatarSelection'
import AvatarSelection from '../Components/Avatar/AvatarSelection/AvatarSelection'
import AvatarLibrary from '../Components/Avatar/AvatarLibrary/AvatarLibrary'
import PreviewJD from '../Components/Avatar/PreviewJD/PreviewJD'
// import './style.css'

function AvatarSettings() {
  return (
      <div className="app">
          <AvatarSelection />
          <AvatarLibrary />
          <PreviewJD />
          {/* <AvatarSelection /> */}
      </div>
    
  )
}

export default AvatarSettings