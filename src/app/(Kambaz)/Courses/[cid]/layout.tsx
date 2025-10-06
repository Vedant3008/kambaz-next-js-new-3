import { ReactNode } from "react";
import CourseNavigation from "./navigation";
import { FaAlignJustify } from "react-icons/fa";

export default function CourseLayout({ 
  children, 
  params 
}: { 
  children: ReactNode; 
  params: { cid: string } 
}) {
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course {params.cid}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}