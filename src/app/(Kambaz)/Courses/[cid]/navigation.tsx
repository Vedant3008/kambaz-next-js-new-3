"use client";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const pathname = usePathname();
  
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  return (
    <div id="wd-courses-navigation" className="list-group rounded-0" style={{ width: 150 }}>
      {links.map((link) => {
        const isActive = pathname.includes(link);
        return (
          <Link
            key={link}
            href={`/Courses/${cid}/${link}`}
            className={`list-group-item list-group-item-action border-0 ${
              isActive ? 'active' : ''
            }`}
            style={{
              backgroundColor: isActive ? '#007bff' : 'white',
              color: isActive ? 'white' : '#dc3545',
              borderLeft: isActive ? '3px solid black' : 'none',
            }}>
            {link}
          </Link>
        );
      })}
    </div>
  );
}