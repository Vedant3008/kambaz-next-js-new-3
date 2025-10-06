import Link from "next/link";
import { FormControl } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="w-25">
      <h1>Profile</h1>
      <FormControl defaultValue="Vedant" placeholder="username" className="mb-2" />
      <FormControl defaultValue="3008" placeholder="password" type="password" className="mb-2" />
      <FormControl defaultValue="Vedant" placeholder="First Name" id="wd-firstname" className="mb-2" />
      <FormControl defaultValue="Shah" placeholder="Last Name" id="wd-lastname" className="mb-2" />
      <FormControl defaultValue="2002-08-30" type="date" id="wd-dob" className="mb-2" />
      <FormControl defaultValue="vedant@gmail.com" type="email" id="wd-email" className="mb-2" />
      <FormControl as="select" defaultValue="STUDENT" id="wd-role" className="mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormControl>
      <Link href="/Account/Profile" className="btn btn-danger w-100">
        Sign out
      </Link>
    </div>
  );
}