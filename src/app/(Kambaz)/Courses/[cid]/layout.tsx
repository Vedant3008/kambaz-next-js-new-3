import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../../Database";
import CoursesNavigation from "./navigation";
import Breadcrumb from "./Breadcrumb";
import { ReactNode } from "react";

export default async function CoursesLayout({ 
  children, 
  params 
}: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const course = courses.find((course) => course._id === cid);
  
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course?.name}
      </h2>
      <hr />
      <div className="mb-4">
        <Breadcrumb course={course} />
      </div>
      <hr />
      <div className="d-flex">
        <div className="flex-shrink-0">
          <CoursesNavigation />
        </div>
        <div className="flex-grow-1 ms-4">
          {children}
        </div>
      </div>
    </div>
  );
}