"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const pathname = usePathname();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  
  const links = currentUser 
    ? [{ href: "/Account/Profile", label: "Profile", id: "wd-account-profile-link" }]
    : [
        { href: "/Account/Signin", label: "Signin", id: "wd-account-signin-link" },
        { href: "/Account/Signup", label: "Signup", id: "wd-account-signup-link" },
      ];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          id={link.id}
          className={`list-group-item border-0 ${
            pathname === link.href ? "active" : "text-danger"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}