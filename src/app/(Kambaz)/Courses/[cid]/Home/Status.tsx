import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiFillHome } from "react-icons/ai";
import { FaChartBar, FaBullhorn } from "react-icons/fa";
import { IoNotifications, IoAnalytics } from "react-icons/io5";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      
      <div className="d-flex mb-1">
        <Button 
          variant="secondary" 
          className="w-50 me-1"
        >
          <MdDoNotDisturbAlt className="me-2" /> Unpublish
        </Button>
        <Button variant="success" className="w-50">
          <FaCheckCircle className="me-2" /> Publish
        </Button>
      </div>
      
      <Button variant="secondary" className="w-100 mb-1 text-start">
        <BiImport className="me-2" /> Import Existing Content
      </Button>
      
      <Button variant="secondary" className="w-100 mb-1 text-start">
        <LiaFileImportSolid className="me-2" /> Import from Commons
      </Button>
      
      <Button variant="secondary" className="w-100 mb-1 text-start">
        <AiFillHome className="me-2" /> Choose Home Page
      </Button>
      
      <Button variant="secondary" className="w-100 mb-1 text-start">
        <FaChartBar className="me-2" /> View Course Stream
      </Button>
      
      <Button variant="secondary" className="w-100 mb-1 text-start">
        <FaBullhorn className="me-2" /> New Announcement
      </Button>
      
      <Button variant="secondary" className="w-100 mb-1 text-start">
        <IoAnalytics className="me-2" /> New Analytics
      </Button>
      
      <Button variant="secondary" className="w-100 mb-1 text-start">
        <IoNotifications className="me-2" /> View Course Notifications
      </Button>
    </div>
  );
}