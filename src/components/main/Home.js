import React from "react";
import './home.css'

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='recent-studies'>
                    <h2>Recent Studies</h2>
                    <ul>
                        <li id="left-con" className='completed'>
                            <p>"Dog Bite Complaint"</p>
                            <div className="bottom-info">
                            <span >2 days ago</span>
                            <span className='status completed'>Completed</span>
                            </div>
                        </li>
                        <li id="left-con"  className='completed'>
                            "The Cyberbullying Conspiracy"{" "}
                            <div className="bottom-info">
                            <span >2 days ago</span>
                            <span className='status completed'>Completed</span>
                            </div>
                        </li>
                        <li id="left-con"  className='completed'>
                            "The Data Breach Dilemma"{" "}
                            <div className="bottom-info">
                            <span >2 days ago</span>
                            <span className='status completed'>Completed</span>
                            </div>
                        </li>
                        <li id="left-con"  className='in-progress'>
                            "The Data Breach Dilemma"{" "}
                            <div className="bottom-info">
                            <span >2 days ago</span>
                            <span className='status in-progress'>
                                In progress
                            </span>
                            </div>
                        </li>
                        <li id="left-con"  className='failed'>
                            "The Data Breach Dilemma"{" "}
                            <div className="bottom-info">
                            <span>2 days ago</span>
                            <span className='status failed'>Failed</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='upload-section'>
                    <h2>
                        Get Complete info about any case from AI-driven research
                        assistance
                    </h2>
                    <input
                        type='text'
                        placeholder='Ex: Land dispute, Mumbai, recent judgments.'
                        maxLength={80}
                    />
                    <div className='upload-box'>
                        <label
                            htmlFor='file-upload'
                            className='custom-file-upload'>
                            Drag and drop here or click here to Upload a file
                        </label>
                        <input
                            id='file-upload'
                            type='file'
                            accept='.jpg, .png, .docx, .pdf'
                        />
                        <p>
                            Maximum uploads: 1<br />
                            File formats: JPG, PNG, docx, Pdf etc.
                        </p>
                    </div>
                    <div className='uploaded-files'>
                        <div className='file'>
                            <span>Case document.pdf</span>
                            <button>✕</button>
                        </div>
                        <div className='file'>
                            <span>Case document.docx</span>
                            <button>✕</button>
                        </div>
                        <div className='file'>
                            <span>Case document.docx</span>
                            <button>✕</button>
                        </div>
                    </div>
                    <button className='start-button'>Start</button>
                </div>
            </div>
        </>
    );
};

export default Home;
