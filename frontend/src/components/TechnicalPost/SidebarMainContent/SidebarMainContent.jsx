import React from 'react';
import './SidebarMainContent.css';
import { assets } from '../../../assets/assets';

const SidebarMainContent = ({ job }) => {
  return (
    <div className="main-content">
      <div className="main-content-upper">
        <div className="main-content-img">
          <img src={assets.profile_icon} alt="" />
        </div>
        <div className="main-content-info">
          <div><h1>{job.name}</h1></div>
          <div className="main-content-professional">
            <img src={assets.cross_icon} alt='' />
            <p>{job.professionName}</p>
          </div>
        </div>
      </div>
      <div><hr className='main-content-space' /></div>
      <h2>Key Points </h2>
      <div className="main-content-description">
        <ul>
          {job.description.split('\n\n').map((paragraph, index) => (
            <li key={index}>{paragraph}</li>
          ))}
        </ul>
      </div>
      <div><hr className='main-content-space' /></div>
      <div className="main-content-additional-info">
        <h1>Additional Information</h1>
        <div className="main-content-information">
          <div className="main-content-info-user">
            <div className="main-content-user-info-first">
              <h1>Experience</h1>
              <p>Maximum: {job.experience} years</p>
            </div>
            <img src={assets.experiencee} alt="" />
          </div>
          <div className="main-content-info-user">
            <div className="main-content-user-info-first">
              <h1>Location</h1>
              <p>{job.location}</p>
            </div>
            <img src={assets.location} alt="" />
          </div>
          <div className="main-content-info-user">
            <div className="main-content-user-info-first">
              <h1>Fees Charged : </h1>
              <p>Maximum: {job.fees}</p>
            </div>
            <img src={assets.salary} alt="" />
          </div>
          <div className="main-content-info-user">
            <div className="main-content-user-info-first">
              <h1>Timing </h1>
              <p>Time :{job.timing}</p>
            </div>
            <img src={assets.timing} alt="" />
          </div>
        </div>
      </div>
      <div className="call-button">
        <button>Call Us</button>
      </div>
    </div>
  );
};

export default SidebarMainContent;
