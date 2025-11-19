"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as courseClient from "../Courses/client";
import * as enrollmentClient from "./client";

export default function Enrollments() {
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchCourses = async () => {
    const courses = await courseClient.fetchAllCourses();
    setAllCourses(courses);
    
    const myCourses = await courseClient.findMyCourses();
    setEnrolledCourses(myCourses);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleEnroll = async (courseId: string) => {
    await enrollmentClient.enrollInCourse(courseId);
    fetchCourses(); // Refresh the lists
  };

  const handleUnenroll = async (courseId: string) => {
    await enrollmentClient.unenrollFromCourse(courseId);
    fetchCourses(); // Refresh the lists
  };

  const isEnrolled = (courseId: string) => {
    return enrolledCourses.some(course => course._id === courseId);
  };

  return (
    <div className="container mt-4">
      <h2>Course Enrollment</h2>
      
      <div className="row">
        <div className="col-md-6">
          <h3>Available Courses</h3>
          <div className="list-group">
            {allCourses.map(course => (
              <div key={course._id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{course.name}</h5>
                  <p className="mb-1">{course.description}</p>
                </div>
                {isEnrolled(course._id) ? (
                  <button 
                    className="btn btn-danger"
                    onClick={() => handleUnenroll(course._id)}>
                    Unenroll
                  </button>
                ) : (
                  <button 
                    className="btn btn-success"
                    onClick={() => handleEnroll(course._id)}>
                    Enroll
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="col-md-6">
          <h3>My Enrolled Courses</h3>
          <div className="list-group">
            {enrolledCourses.map(course => (
              <div key={course._id} className="list-group-item">
                <h5>{course.name}</h5>
                <p className="mb-1">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}