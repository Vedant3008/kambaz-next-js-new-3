"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import * as client from "../client";
import { useSelector } from "react-redux";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [assignment, setAssignment] = useState<any>({
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableDate: "",
    availableUntil: ""
  });

  // Fetch assignment from database
  const fetchAssignment = async () => {
    if (!aid) return;
    try {
      const data = await client.findAssignmentById(aid as string);
      setAssignment(data);
    } catch (error) {
      console.error("Error fetching assignment:", error);
    }
  };

  useEffect(() => {
    fetchAssignment();
  }, [aid]);

  // Save assignment
  const handleSave = async () => {
    try {
      await client.updateAssignment({ ...assignment, _id: aid });
      router.push(`/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
    }
  };

  // Check if user is FACULTY to show edit mode
  const isEditMode = currentUser?.role === "FACULTY";

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control"
          value={assignment.title}
          onChange={(e) => setAssignment({...assignment, title: e.target.value})}
          readOnly={!isEditMode}
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">
          Description
        </label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={5}
          value={assignment.description}
          onChange={(e) => setAssignment({...assignment, description: e.target.value})}
          readOnly={!isEditMode}
        />
      </div>
      
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
          <input
            id="wd-points"
            type="number"
            className="form-control"
            value={assignment.points}
            onChange={(e) => setAssignment({...assignment, points: parseInt(e.target.value) || 0})}
            readOnly={!isEditMode}
          />
        </div>
        
        <div className="col-md-4">
          <label htmlFor="wd-due-date" className="form-label">
            Due Date
          </label>
          <input
            id="wd-due-date"
            type="date"
            className="form-control"
            value={assignment.dueDate ? assignment.dueDate.split('T')[0] : ''}
            onChange={(e) => setAssignment({...assignment, dueDate: e.target.value})}
            readOnly={!isEditMode}
          />
        </div>
        
        <div className="col-md-4">
          <label htmlFor="wd-available-from" className="form-label">
            Available From
          </label>
          <input
            id="wd-available-from"
            type="date"
            className="form-control"
            value={assignment.availableDate ? assignment.availableDate.split('T')[0] : ''}
            onChange={(e) => setAssignment({...assignment, availableDate: e.target.value})}
            readOnly={!isEditMode}
          />
        </div>
      </div>
      
      <div className="d-flex justify-content-end">
        <Link 
          href={`/Courses/${cid}/Assignments`}
          className="btn btn-secondary me-2">
          {isEditMode ? "Cancel" : "Back"}
        </Link>
        {isEditMode && (
          <button 
            onClick={handleSave}
            className="btn btn-danger">
            Save
          </button>
        )}
      </div>
    </div>
  );
}