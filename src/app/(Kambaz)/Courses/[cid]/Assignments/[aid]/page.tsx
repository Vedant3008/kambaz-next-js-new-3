import React from 'react';
import './AssignmentEditor.css'; // Make sure to create this CSS file

export default function AssignmentEditor() {
  return (
    <div className="assignment-editor-container">
      <div className="assignment-content-wrapper">
        {/* Assignment Name Section */}
        <div className="form-section">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input 
            id="wd-name" 
            className="form-control" 
            defaultValue="A1" 
          />
        </div>

        {/* Description Section */}
        <div className="form-section">
          <div className="description-box">
            <div className="description-header">
              The assignment is <span className="text-danger">available online</span>
            </div>
            <div className="description-content">
              <p>Submit a link to the landing page of your Web application running on Netlify.</p>
              
              <p className="mt-3">The landing page should include the following:</p>
              <ul className="requirements-list">
                <li>Your full name and section</li>
                <li>Links to each of the lab assignments</li>
                <li>Link to the Kanbas application</li>
                <li>Links to all relevant source code repositories</li>
              </ul>
              
              <p className="mt-3">The Kanbas application should include a link to navigate back to the landing page.</p>
            </div>
          </div>
        </div>

        {/* Form Fields Grid */}
        <div className="form-grid">
          <div className="form-row">
            <label htmlFor="wd-points" className="form-label-inline">Points</label>
            <input 
              id="wd-points" 
              className="form-control points-input" 
              defaultValue={100} 
              type="number" 
            />
          </div>

          <div className="form-row">
            <label htmlFor="wd-group" className="form-label-inline">Assignment Group</label>
            <select id="wd-group" className="form-control" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="wd-display-grade-as" className="form-label-inline">Display Grade as</label>
            <select id="wd-display-grade-as" className="form-control" defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="wd-submission-type" className="form-label-inline">Submission Type</label>
            <div className="submission-type-container">
              <select id="wd-submission-type" className="form-control" defaultValue="Online">
                <option value="Online">Online</option>
                <option value="Paper">On Paper</option>
              </select>
              
              <div className="online-entry-options">
                <div className="options-label">Online Entry Options</div>
                <div className="checkbox-group">
                  <label className="checkbox-item">
                    <input type="checkbox" id="wd-text-entry" /> 
                    <span>Text Entry</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" id="wd-website-url" defaultChecked />
                    <span>Website URL</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" id="wd-media-recordings" />
                    <span>Media Recordings</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" id="wd-student-annotation" />
                    <span>Student Annotation</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" id="wd-file-upload" />
                    <span>File Uploads</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <label className="form-label-inline">Assign</label>
            <div className="assign-section">
              <div className="assign-to-group">
                <label className="assign-label">Assign to</label>
                <div className="assign-input-wrapper">
                  <div className="assign-tag">
                    <span>Everyone</span>
                    <button className="tag-remove-btn" aria-label="Remove">×</button>
                  </div>
                  <input 
                    id="wd-assign-to" 
                    className="assign-input-field" 
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              
              <div className="date-section">
                <div className="date-row">
                  <label htmlFor="wd-due-date" className="date-label">Due</label>
                  <div className="date-input-group">
                    <input 
                      id="wd-due-date" 
                      className="form-control date-input" 
                      type="text" 
                      defaultValue="May 13, 2024, 11:59 PM" 
                    />
                    <button className="calendar-btn" aria-label="Calendar">📅</button>
                  </div>
                </div>
                
                <div className="date-row-group">
                  <div className="date-row half-width">
                    <label htmlFor="wd-available-from" className="date-label">Available from</label>
                    <div className="date-input-group">
                      <input 
                        id="wd-available-from" 
                        className="form-control date-input" 
                        type="text" 
                        defaultValue="May 6, 2024, 12:00 AM" 
                      />
                      <button className="calendar-btn" aria-label="Calendar">📅</button>
                    </div>
                  </div>
                  
                  <div className="date-row half-width">
                    <label htmlFor="wd-available-until" className="date-label">Until</label>
                    <div className="date-input-group">
                      <input 
                        id="wd-available-until" 
                        className="form-control date-input" 
                        type="text" 
                        defaultValue="" 
                      />
                      <button className="calendar-btn" aria-label="Calendar">📅</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn btn-secondary">Cancel</button>
          <button className="btn btn-danger">Save</button>
        </div>
      </div>
    </div>
  );
}