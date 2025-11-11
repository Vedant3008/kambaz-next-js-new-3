"use client";
import * as db from "../Database";
import { useState } from "react";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { RootState } from "../store";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = db;
  const dispatch = useDispatch();
  
  const [course, setCourse] = useState<any>({
    _id: "0", 
    name: "New Course", 
    number: "New Number",
    startDate: "2023-09-10", 
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg", 
    description: "New Description"
  });
  
  const courseImages: { [key: string]: string } = {
    "RS101": "/images/rocket-propulsion.jpg",
    "RS102": "/images/aerodynamics.jpg",
    "RS103": "/images/spacecraftdesign.jpg",
    "RS104": "/images/organicchemistry.jpg",
    "RS105": "/images/inorganicchemistry.jpg",
    "RS106": "/images/physicalchemistry.jpg",
    "RS107": "/images/ancientlanguageandscience.jpg",
    "RS108": "/images/wizard.jpg"
  };
  
  const courseColors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F",
    "#BB8FCE", "#85C1E2", "#F8B739", "#52C077", "#FF8A80", "#82B1FF",
  ];
  
  const getCourseColor = (courseId: string) => {
    if (courseImages[courseId]) return null;
    let hash = 0;
    for (let i = 0; i < courseId.length; i++) {
      hash = courseId.charCodeAt(i) + ((hash << 5) - hash);
    }
    return courseColors[Math.abs(hash) % courseColors.length];
  };
  
  const filteredCourses = courses.filter((course: any) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id &&
        enrollment.course === course._id
    )
  );
  
  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      
      {currentUser?.role === "FACULTY" && (
        <>
          <h5>New Course
            <button 
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => dispatch(addNewCourse(course))}>
              Add
            </button>
            <button 
              className="btn btn-warning float-end me-2"
              onClick={() => dispatch(updateCourse(course))}
              id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          
          <FormControl 
            value={course.name} 
            className="mb-2"
            placeholder="Course Name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} 
          />
          <FormControl 
            value={course.description} 
            as="textarea"
            rows={3}
            placeholder="Course Description"
            onChange={(e) => setCourse({ ...course, description: e.target.value })} 
          />
          <hr />
        </>
      )}
      
      <h2 id="wd-dashboard-published">
        Published Courses ({filteredCourses.length})
      </h2>
      <hr />
      
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {filteredCourses.map((course: any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card className="h-100">
                {courseImages[course._id] ? (
                  <Link 
                    href={`/Kambaz/Courses/${course._id}/Home`}
                    className="text-decoration-none text-dark">
                    <CardImg 
                      src={courseImages[course._id]} 
                      variant="top" 
                      width="100%" 
                      height={160}
                      alt={course.name}
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                ) : (
                  <Link 
                    href={`/Courses/${course._id}/Home`}
                    className="text-decoration-none text-dark">
                    <div 
                      style={{ 
                        height: 160, 
                        backgroundColor: getCourseColor(course._id) || "#6c757d",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "48px",
                        fontWeight: "bold"
                      }}>
                      {course.name.charAt(0).toUpperCase()}
                    </div>
                  </Link>
                )}
                <CardBody>
                  <Link 
                    href={`/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText 
                      className="wd-dashboard-course-description overflow-hidden" 
                      style={{ height: "100px" }}>
                      {course.description}
                    </CardText>
                  </Link>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <Link href={`/Courses/${course._id}/Home`}>
                      <Button variant="primary">Go</Button>
                    </Link>
                    
                    {(currentUser as any)?.role === "FACULTY" && (
                      <div>
                        <button 
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2">
                          Edit
                        </button>
                        
                        <button 
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(deleteCourse(course._id));
                          }} 
                          className="btn btn-danger"
                          id="wd-delete-course-click">
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}