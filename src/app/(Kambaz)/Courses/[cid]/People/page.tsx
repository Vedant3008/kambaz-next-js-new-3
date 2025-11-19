"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function PeopleTable() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);
  const [enrollments, setEnrollments] = useState<any[]>([]);
  
  const fetchPeople = async () => {
    try {
      // Fetch users and enrollments from your server
      const usersResponse = await axios.get(`${HTTP_SERVER}/api/users`);
      const enrollmentsResponse = await axios.get(`${HTTP_SERVER}/api/enrollments`);
      setUsers(usersResponse.data);
      setEnrollments(enrollmentsResponse.data);
    } catch (error) {
      console.error("Error fetching people:", error);
      // For now, use local data as fallback
      import("../../../Database").then(db => {
        setUsers(db.users);
        setEnrollments(db.enrollments);
      });
    }
  };
  
  useEffect(() => {
    fetchPeople();
  }, [cid]);
  
  return (
    <div id="wd-people-table" className="p-4">
      <h2>People</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((usr: any) =>
              enrollments.some((enrollment: any) => 
                enrollment.user === usr._id && enrollment.course === cid
              )
            )
            .map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}