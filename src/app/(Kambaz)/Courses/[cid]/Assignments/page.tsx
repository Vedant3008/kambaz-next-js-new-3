"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import * as client from "../../Assignments/client";
import { setAssignments, deleteAssignment } from "./reducer";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaEllipsisVertical, FaPlus, FaTrash, FaPencil } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";

export default function Assignments() {
  const params = useParams();
  const cid = params.cid as string;
  const { assignments } = useSelector((state: any) => state.assignmentsReducer || { assignments: [] });
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    availableDate: "",
    dueDate: "",
    points: 100
  });

  const fetchAssignments = async () => {
    if (!cid) return;
    const assignments = await client.findAssignmentsForCourse(cid);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  const handleCreateAssignment = async () => {
    if (!newAssignment.title) return;
    const assignment = await client.createAssignment(cid, {
      ...newAssignment,
      course: cid
    });
    dispatch(setAssignments([...assignments, assignment]));
    setNewAssignment({ title: "", description: "", availableDate: "", dueDate: "", points: 100 });
    setShowAddForm(false);
  };

  const removeAssignment = async (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      await client.deleteAssignment(assignmentId);
      dispatch(deleteAssignment(assignmentId));
    }
  };
  
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input 
          id="wd-search-assignment"
          className="form-control me-2" 
          placeholder="Search..." 
          style={{ width: "300px" }}
        />
        <div>
          <button className="btn btn-secondary me-2">+ Group</button>
          {currentUser?.role === "FACULTY" && (
            <button 
              className="btn btn-danger"
              onClick={() => setShowAddForm(!showAddForm)}>
              + Assignment
            </button>
          )}
        </div>
      </div>

      {/* Add Assignment Form - Only for Faculty */}
      {showAddForm && currentUser?.role === "FACULTY" && (
        <div className="mb-4 p-3 border rounded bg-light">
          <h5>New Assignment</h5>
          <input
            className="form-control mb-2"
            placeholder="Assignment Title"
            value={newAssignment.title}
            onChange={(e) => setNewAssignment({...newAssignment, title: e.target.value})}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Description"
            value={newAssignment.description}
            onChange={(e) => setNewAssignment({...newAssignment, description: e.target.value})}
          />
          <div className="row">
            <div className="col">
              <label>Available Date</label>
              <input
                type="date"
                className="form-control mb-2"
                value={newAssignment.availableDate}
                onChange={(e) => setNewAssignment({...newAssignment, availableDate: e.target.value})}
              />
            </div>
            <div className="col">
              <label>Due Date</label>
              <input
                type="date"
                className="form-control mb-2"
                value={newAssignment.dueDate}
                onChange={(e) => setNewAssignment({...newAssignment, dueDate: e.target.value})}
              />
            </div>
            <div className="col">
              <label>Points</label>
              <input
                type="number"
                className="form-control mb-2"
                value={newAssignment.points}
                onChange={(e) => setNewAssignment({...newAssignment, points: parseInt(e.target.value) || 0})}
              />
            </div>
          </div>
          <button 
            className="btn btn-success me-2"
            onClick={handleCreateAssignment}>
            Create Assignment
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => setShowAddForm(false)}>
            Cancel
          </button>
        </div>
      )}
      
      <ListGroup id="wd-assignment-list" className="rounded-0">
        <ListGroupItem className="wd-assignment-list-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <div className="d-flex align-items-center">
              <span className="badge bg-secondary text-dark me-2">
                40% of Total
              </span>
              <FaPlus className="me-2" />
              <FaEllipsisVertical />
            </div>
          </div>
          
          <ListGroup className="rounded-0">
            {assignments?.map((assignment: any) => (
              <ListGroupItem 
                key={assignment._id}
                className="wd-assignment-list-item d-flex align-items-center p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <FaCheckCircle className="me-2 text-success" />
                <div className="flex-fill">
                  <Link
                    className="wd-assignment-link text-decoration-none text-dark"
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}>
                    <strong>{assignment.title}</strong>
                  </Link>
                  <div className="small text-muted">
                    <span className="text-danger">Multiple Modules</span> | 
                    <strong> Not available until</strong> {assignment.availableDate} | 
                    <strong> Due</strong> {assignment.dueDate} | {assignment.points} pts
                  </div>
                </div>
                
                {/* Edit and Delete buttons for Faculty */}
                {currentUser?.role === "FACULTY" && (
                  <div className="ms-2">
                    <Link href={`/Courses/${cid}/Assignments/${assignment._id}/edit`}>
                      <button className="btn btn-sm btn-warning me-1">
                        <FaPencil />
                      </button>
                    </Link>
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => removeAssignment(assignment._id)}>
                      <FaTrash />
                    </button>
                  </div>
                )}
                
                <FaEllipsisVertical className="ms-2" />
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}