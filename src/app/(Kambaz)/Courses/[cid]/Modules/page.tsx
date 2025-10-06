import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  return (
    <div id="wd-modules" style={{ maxWidth: "1125px" }}>
      <ModulesControls />
      <br /><br /><br /><br />
      
      <ListGroup className="rounded-0">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              Week 1
            </div>
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course
              </div>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                Learn what is Web Development
              </div>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              Week 2
            </div>
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                Learn HTML
              </div>
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                Deploy to Vercel
              </div>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}