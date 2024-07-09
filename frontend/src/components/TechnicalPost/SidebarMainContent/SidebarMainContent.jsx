import React from 'react'
import './SidebarMainContent.css'
import { assets } from '../../../assets/assets'
const SidebarMainContent = () => {
  return (
    <div className="main-content">
      <div className="main-content-upper">
        <div className="main-content-img">
          <img src={assets.profile_icon} alt="" />
        </div>
        <div className="main-content-info">
          <div><h1>Person Name </h1></div>
          <div className="main-content-professional">
            <img src={assets.cross_icon} alt='' />
            <p>Profession Name </p>
          </div>
        </div>
      </div>
      <div><hr className='main-content-space' /></div>
      <div className="main-content-description">
        <ul>
          <li>Working with case (and proposal) teams</li>
          <li>Acquiring deep expertise in at least one analytics topic & understanding of all analytics capabilities</li>
          <li>Defining and explaining expected analytics outcomes; defining approach selection</li>
          <li>Delivering original analysis and insights to BCG teams, typically owning all or part of an analytics module and integrating with case teams</li>
        </ul>
      </div>
      <div><hr className='main-content-space' /></div>
      <div className="main-content-additional-info">
        <h1>Additional Information</h1>
        <div className="main-content-information">
          <div className="main-content-info-user">
            <div className="main-content-user-info-first">
              <h1>Experience</h1>
              <p>Maximum : 4 years </p>
            </div>
            <img src={assets.profile_icon} alt="" />
          </div>
          <div className="main-content-info-user">
            <div className="main-content-user-info-first">
              <h1>Experience</h1>
              <p>Maximum : 4 years </p>
            </div>
            <img src={assets.profile_icon} alt="" />
          </div>
          <div className="main-content-info-user">
            <div className="main-content-user-info-first">
              <h1>Experience</h1>
              <p>Maximum : 4 years </p>
            </div>
            <img src={assets.profile_icon} alt="" />
          </div>
          <div className="main-content-info-user">
            <div className="main-content-user-info-first">
              <h1>Experience</h1>
              <p>Maximum : 4 years </p>
            </div>
            <img src={assets.profile_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarMainContent
