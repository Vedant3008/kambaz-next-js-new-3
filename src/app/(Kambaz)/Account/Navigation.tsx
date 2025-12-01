"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const pathname = usePathname();
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  
  const links = [
    { href: "/Account/Signin", label: "Signin", id: "wd-account-signin-link" },
    { href: "/Account/Signup", label: "Signup", id: "wd-account-signup-link" },
    { href: "/Account/Profile", label: "Profile", id: "wd-account-profile-link" },
  ];

  // Add Users link for ADMIN users
  if (currentUser && currentUser.role === "ADMIN") {
    links.push({ 
      href: "/Account/Users", 
      label: "Users", 
      id: "wd-account-users-link" 
    });
  }

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          id={link.id}
          className={`list-group-item border-0 ${
            pathname.includes(link.href) ? "active" : "text-danger"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}