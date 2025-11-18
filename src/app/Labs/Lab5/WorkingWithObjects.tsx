"use client";
import React, { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, 
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", 
    completed: false, 
    score: 0,
  });

  const [module, setModule] = useState({
    id: "M101",
    name: "Introduction to Rocket Propulsion",
    description: "Basic principles of rocket propulsion and rocket engines",
    course: "RS101"
  });

  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary me-2"
         href={`${ASSIGNMENT_API_URL}`}>
        Get Assignment
      </a>
      <a id="wd-retrieve-module" className="btn btn-primary"
         href={`${MODULE_API_URL}`}>
        Get Module
      </a>
      <hr/>
      
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary me-2"
         href={`${ASSIGNMENT_API_URL}/title`}>
        Get Title
      </a>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>
      <hr/>
      
      <h4>Modifying Properties</h4>
      
      <div className="mb-3">
        <a id="wd-update-assignment-title"
           className="btn btn-primary float-end"
           href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
          Update Title
        </a>
        <input 
          className="form-control w-75" 
          id="wd-assignment-title"
          value={assignment.title} 
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}/>
      </div>
      
      <div className="mb-3">
        <a id="wd-update-assignment-score"
           className="btn btn-primary float-end"
           href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
          Update Score
        </a>
        <input 
          className="form-control w-75" 
          id="wd-assignment-score"
          type="number"
          value={assignment.score} 
          onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) || 0 })}/>
      </div>
      
      <div className="mb-3">
        <a id="wd-update-assignment-completed"
           className="btn btn-primary float-end"
           href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
          Update Completed
        </a>
        <label className="form-check-label">
          <input 
            type="checkbox" 
            id="wd-assignment-completed"
            className="form-check-input me-2"
            checked={assignment.completed}
            onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}/>
          Completed
        </label>
      </div>
      
      <div className="mb-3">
        <a id="wd-update-module-name"
           className="btn btn-primary float-end"
           href={`${MODULE_API_URL}/name/${module.name}`}>
          Update Module Name
        </a>
        <input 
          className="form-control w-75" 
          id="wd-module-name"
          value={module.name} 
          onChange={(e) => setModule({ ...module, name: e.target.value })}/>
      </div>
      
      <div className="mb-3">
        <a id="wd-update-module-description"
           className="btn btn-primary float-end"
           href={`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`}>
          Update Module Description
        </a>
        <textarea 
          className="form-control w-75" 
          id="wd-module-description"
          rows={3}
          value={module.description} 
          onChange={(e) => setModule({ ...module, description: e.target.value })}/>
      </div>
      
      <hr/>
    </div>
  );
}
