"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function KambazNavigation() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>("");

  // Set initial active item based on pathname
  useEffect(() => {
    // Determine which nav item should be active based on the current path
    if (pathname.startsWith("/Account")) {
      setActiveItem("Account");
    } else if (pathname.startsWith("/Dashboard")) {
      // Check if we came from Courses or Dashboard click
      // Default to Dashboard if directly navigating to /Dashboard
      if (!activeItem || (activeItem !== "Courses" && activeItem !== "Dashboard")) {
        setActiveItem("Dashboard");
      }
    } else if (pathname.startsWith("/Calendar")) {
      setActiveItem("Calendar");
    } else if (pathname.startsWith("/Inbox")) {
      setActiveItem("Inbox");
    } else if (pathname.startsWith("/Labs")) {
      setActiveItem("Labs");
    }
  }, [pathname]);

  // Function to handle navigation clicks
  const handleNavClick = (item: string) => {
    setActiveItem(item);
  };
  
  // Function to get the appropriate classes for each nav item
  const getNavItemClasses = (item: string): string => {
    if (activeItem === item) {
      return "border-0 bg-white text-center";
    }
    return "border-0 bg-black text-center";
  };
  
  // Function to get the appropriate classes for links
  const getLinkClasses = (item: string): string => {
    if (activeItem === item) {
      return "text-danger text-decoration-none";
    }
    return "text-white text-decoration-none";
  };
  
  // Function to get the appropriate classes for icons
  const getIconClasses = (item: string): string => {
    if (activeItem === item) {
      return "fs-4 text-danger";
    }
    return "fs-4 text-danger"; // Icons remain red even when inactive
  };

  return (
    <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" 
               style={{ width: 100 }}
               id="wd-kambaz-navigation">
      <ListGroupItem className="bg-black border-0 text-center" as="a"
                     target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
        <img src="/images/northeastern_university.png" width="40px" alt="Northeastern University" />
      </ListGroupItem>
      
      <ListGroupItem className={getNavItemClasses("Account")}>
        <Link 
          href="/Account" 
          id="wd-account-link" 
          className={getLinkClasses("Account")}
          onClick={() => handleNavClick("Account")}
        >
          <FaRegCircleUser className={getIconClasses("Account")} />
          <br />
          Account
        </Link>
      </ListGroupItem>
      
      <ListGroupItem className={getNavItemClasses("Dashboard")}>
        <Link 
          href="/Dashboard" 
          id="wd-dashboard-link" 
          className={getLinkClasses("Dashboard")}
          onClick={() => handleNavClick("Dashboard")}
        >
          <AiOutlineDashboard className={getIconClasses("Dashboard")} />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>
      
      <ListGroupItem className={getNavItemClasses("Courses")}>
        <Link 
          href="/Dashboard" 
          id="wd-course-link" 
          className={getLinkClasses("Courses")}
          onClick={() => handleNavClick("Courses")}
        >
          <LiaBookSolid className={getIconClasses("Courses")} />
          <br />
          Courses
        </Link>
      </ListGroupItem>
      
      <ListGroupItem className={getNavItemClasses("Calendar")}>
        <Link 
          href="/Calendar" 
          id="wd-calendar-link" 
          className={getLinkClasses("Calendar")}
          onClick={() => handleNavClick("Calendar")}
        >
          <IoCalendarOutline className={getIconClasses("Calendar")} />
          <br />
          Calendar
        </Link>
      </ListGroupItem>
      
      <ListGroupItem className={getNavItemClasses("Inbox")}>
        <Link 
          href="/Inbox" 
          id="wd-inbox-link" 
          className={getLinkClasses("Inbox")}
          onClick={() => handleNavClick("Inbox")}
        >
          <FaInbox className={getIconClasses("Inbox")} />
          <br />
          Inbox
        </Link>
      </ListGroupItem>
      
      <ListGroupItem className={getNavItemClasses("Labs")}>
        <Link 
          href="/Labs" 
          id="wd-labs-link" 
          className={getLinkClasses("Labs")}
          onClick={() => handleNavClick("Labs")}
        >
          <LiaCogSolid className={getIconClasses("Labs")} />
          <br />
          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}