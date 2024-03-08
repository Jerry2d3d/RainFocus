import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className="form-wrapper">
            <div className="main-form-body">
                <div className="header-bar">
                    <div className="header-bar-logo">
                        <img src="../assets/rainfocus-summit-logo.png" alt="logo" />
                    </div>
                    <div className="header-bar-info">
                        <h1 className="page-title">RainFocus Summit</h1>
                        <div className="page-title-subtitle">
                            <p className="event-date">December 15th</p>
                            <p className="location-info">Lehi, Utah</p>
                        </div>
                    </div>
                    <div className="header-bar-button">
                        <button className="edit-event-button">Edit event</button>
                    </div>
                </div>
                <div className="form-header-main-title">
                    <h2 className="sub-header-form">
                        Event setup guide
                    </h2>
                    <p className="sub-header-form-subtitle">
                        See the available list of modules below. We suggest that you start with the attendee module.
                    </p>
                </div>
                <div className="accordion-attendee">
                    <div className="accordion-attendee-header">
                        <div className="accordion-attendee-header-icon">

                        </div>
                        <h3 className="accordion-attendee-header-title">Org Settings</h3>
                    </div>
                    <div className="accordion-attendee-steps">
                        <h4 className="accordion-attendee-steps-text"><strong>Step 1:</strong>Base settings.</h4>
                        <div className="general-form-information">
                            <div className="general-form-information-info-box">
                                <label>General</label>
                                <p>Define Attendee types & attributes</p>
                            </div>
                            <div className="general-form-information-info-box">
                                <label>Title</label>
                                <p>Description that explains the value goes here. Description that explains the value goes here. </p>
                            </div>
                            <div className="general-form-information-info-box">
                                <label>Title</label>
                                <p>Description that explains the value goes here. Description that explains the value goes here. </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-attendee-steps">
                        <h4 className="accordion-attendee-steps-text"><strong>Step 2:</strong>Build registration workflows.</h4>
                        <div className="attendee-reg-portal">
                            <div className="attendee-reg-portal-box">
                                <div className="attendee-reg-portal-box-header">
                                    <div className="attendee-reg-portal-box-header-icon">
                                    
                                    </div>
                                    <label>Attendee Registration</label>
                                </div>
                                <p>Start by creating a general registration workflow</p>
                            </div>
                            <div className="attendee-reg-portal-box">
                                <div className="attendee-reg-portal-box-header">
                                    <div className="attendee-reg-portal-box-header-icon">
                              
                                    </div>
                                    <label>Attendee Registration</label>
                                </div>
                                <p>Start by creating a general registration workflow</p>
                            </div>
                            <div className="attendee-reg-portal-box">
                                <div className="attendee-reg-portal-box-header">
                                    <div className="attendee-reg-portal-box-header-icon">
                                  
                                    </div>
                                    <label>Attendee Registration</label>
                                </div>
                                <p>Start by creating a general registration workflow</p>
                            </div>
                            <div className="attendee-reg-portal-box-add">
                                <div className="attendee-reg-portal-box-header">
                                    <div className="attendee-reg-portal-box-header-icon">
                                     
                                    </div>
                                </div>
                                <p>Add Registration Workflow</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-attendee-steps">
                        <h4 className="accordion-attendee-steps-text"><strong>Step 3:</strong>Design attendee experiences.</h4>
                        <div className="attendee-reg-portal">
                            <div className="attendee-reg-portal-box">
                                <div className="attendee-reg-portal-box-header">
                                    <div className="attendee-reg-portal-box-header-icon">
                                  
                                    </div>
                                    <label>Attendee Portal</label>
                                </div>
                                <p>Manage the portal that attendees will see after they've register for your event.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-attendee-steps">
                        <h4 className="accordion-attendee-steps-text"><strong>Step 3:</strong>Design attendee experiences.</h4>
                        <div className="attendee-exhibitor-portal">
                            <div className="attendee-exhibitor-portal-col2">
                                <div className="attendee-reg-portal-box">
                                    <div className="attendee-reg-portal-box-header">
                                        <div className="attendee-reg-portal-box-header-icon">
                                          
                                        </div>
                                        <label>Exhibitor Portal</label>
                                    </div>
                                    <p>Manage the portal that attendees will see after they've register for your event.</p>
                                </div>
                                <div className="attendee-reg-portal-box">
                                    <div className="attendee-reg-portal-box-header">
                                        <div className="attendee-reg-portal-box-header-icon">
                                         
                                        </div>
                                        <label>Exhibitor Portal</label>
                                    </div>
                                    <p>Manage the portal that attendees will see after they've register for your event.</p>
                                </div>
                            </div>
                            <div className="attendee-exhibitor-portal-col3">
                                <div className="attendee-reg-portal-box">
                                    <div className="attendee-reg-portal-box-header">
                                        <div className="attendee-reg-portal-box-header-icon">
                                         
                                        </div>
                                        <label>Exhibitor Portal</label>
                                    </div>
                                    <p>Manage the portal that attendees will see after they've register for your event.</p>
                                </div>
                                <div className="attendee-reg-portal-box">
                                    <div className="attendee-reg-portal-box-header">
                                        <div className="attendee-reg-portal-box-header-icon">
                                          
                                        </div>
                                        <label>Exhibitor Portal</label>
                                    </div>
                                    <p>Manage the portal that attendees will see after they've register for your event.</p>
                                </div>
                                <div className="attendee-reg-portal-box">
                                    <div className="attendee-reg-portal-box-header">
                                        <div className="attendee-reg-portal-box-header-icon">
                                           
                                        </div>
                                        <label>Exhibitor Portal</label>
                                    </div>
                                    <p>Manage the portal that attendees will see after they've register for your event.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
