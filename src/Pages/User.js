import React from 'react';
import Usermenu from './Usermenu';
import Userheader from './Userheader';
import'./index.css';

function User() {
  const id = localStorage.getItem('id');

  return (
    <>
      <Userheader />
      <div className="container">
        <div className="column1">
          <Usermenu />
        </div>
        <div className="separator"></div>
        <div className="column">
          <center>
            <h1>Welcome information</h1>
          </center>
          <h3>The key objectives of using this platform</h3>
          <b>Centralized applicant information:</b> By storing all applicant information in a centralized database, it becomes easier to manage and track applications.
          <br />
          <b>Streamlined application process:</b> An online application portal makes it easier for applicants to apply, and for recruiters to review and respond to applications.
          <br />
          <b>Improved communication:</b> The system can provide automated email notifications to applicants, and enable recruiters to communicate with applicants throughout the application process.
          <br />
          <b>Tracking and reporting:</b> The system can generate reports on applicant data, including application status, demographics, and other relevant metrics, which can help recruiters make data-driven decisions.
          <br />
          <b>Time-saving:</b> By automating tasks such as sending email notifications and tracking applicant status, the system can save recruiters time and increase their efficiency.
        </div>
      </div>
    </>
  );
}

export default User;
