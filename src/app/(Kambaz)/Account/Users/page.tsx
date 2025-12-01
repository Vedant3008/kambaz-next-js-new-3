"use client";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import PeopleTable from "./Table";
import * as client from "../client";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
      loginId: `00${Date.now()}S`,
      lastActivity: new Date().toISOString().split('T')[0],
      totalActivity: "0:00:00"
    });
    setUsers([...users, user]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Users</h3>
        <button onClick={createUser} className="btn btn-danger wd-add-people">
          <FaPlus className="me-2" />
          People
        </button>
      </div>
      
      <div className="d-flex gap-2 mb-3">
        <input
          type="text"
          className="form-control w-25 wd-filter-by-name"
          placeholder="Search people"
          value={name}
          onChange={(e) => filterUsersByName(e.target.value)}
        />
        
        <select 
          value={role} 
          onChange={(e) => filterUsersByRole(e.target.value)}
          className="form-select w-25 wd-select-role"
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
          <option value="USER">Users</option>
        </select>
      </div>

      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}