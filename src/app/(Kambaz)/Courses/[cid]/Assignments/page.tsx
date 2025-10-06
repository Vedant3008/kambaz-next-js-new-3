import { FaSearch, FaPlus } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { BiSolidPencil } from "react-icons/bi";
import { Button, InputGroup, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments" style={{ maxWidth: "1125px" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup style={{ width: "300px" }}>
          <span className="input-group-text bg-white">
            <FaSearch />
          </span>
          <FormControl placeholder="Search for Assignment" className="border-start-0" />
        </InputGroup>
        <div>
          <Button variant="secondary" className="me-2">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <span className="dropdown-toggle me-3"></span>
              <strong>ASSIGNMENTS</strong>
            </div>
            <div className="d-flex align-items-center">
              <span className="badge bg-light text-dark me-2">40% of Total</span>
              <FaPlus className="fs-4 me-2" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          
          <ListGroup className="rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-2">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex">
                  <BsGripVertical className="me-2 fs-3 text-secondary" />
                  <BiSolidPencil className="me-3 fs-5 text-success" />
                  <div>
                    <Link href="/Courses/1234/Assignments/123" className="text-dark text-decoration-none">
                      <strong>A1</strong>
                    </Link>
                    <div className="small text-muted">
                      <span className="text-danger">Multiple Modules</span> | Not available until May 6 at 12:00am |<br/>
                      Due May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="text-success me-2 fs-5" />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-2">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex">
                  <BsGripVertical className="me-2 fs-3 text-secondary" />
                  <BiSolidPencil className="me-3 fs-5 text-success" />
                  <div>
                    <Link href="/Courses/1234/Assignments/123" className="text-dark text-decoration-none">
                      <strong>A2</strong>
                    </Link>
                    <div className="small text-muted">
                      <span className="text-danger">Multiple Modules</span> | Not available until May 13 at 12:00am |<br/>
                      Due May 20 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="text-success me-2 fs-5" />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-2">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex">
                  <BsGripVertical className="me-2 fs-3 text-secondary" />
                  <BiSolidPencil className="me-3 fs-5 text-success" />
                  <div>
                    <Link href="/Courses/1234/Assignments/123" className="text-dark text-decoration-none">
                      <strong>A3</strong>
                    </Link>
                    <div className="small text-muted">
                      <span className="text-danger">Multiple Modules</span> | Not available until May 20 at 12:00am |<br/>
                      Due May 27 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="text-success me-2 fs-5" />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}