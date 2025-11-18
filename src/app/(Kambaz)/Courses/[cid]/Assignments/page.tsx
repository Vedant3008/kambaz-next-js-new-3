"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import * as client from "../../Assignments/client";
import { setAssignments, deleteAssignment } from "./reducer";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import * as db from "../../../Database";

export default function Assignments() {
    const params = useParams();
  const cid = params.cid as string;
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    if (!cid) return;
    const assignments = await client.findAssignmentsForCourse(cid);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
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
          <button className="btn btn-danger">+ Assignment</button>
        </div>
      </div>
      
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
            {assignments.map((assignment: any) => (
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
                <FaEllipsisVertical />
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}