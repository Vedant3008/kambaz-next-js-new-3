"use client";
import { useEffect, useState } from "react";
import { FaUserCircle, FaCheck } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import * as client from "../client";

export default function PeopleDetails({ 
  uid, 
  onClose 
}: { 
  uid: string | null; 
  onClose: () => void; 
}) {
  const [user, setUser] = useState<any>({});
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
    setName(`${user.firstName} ${user.lastName}`);
    setEmail(user.email || "");
    setRole(user.role || "USER");
  };

  const saveUser = async () => {
    const [firstName, ...lastNameParts] = name.split(" ");
    const lastName = lastNameParts.join(" ");
    const updatedUser = { 
      ...user, 
      firstName, 
      lastName,
      email,
      role 
    };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
  };

  const deleteUser = async (uid: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await client.deleteUser(uid);
      onClose();
    }
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);

  if (!uid) return null;

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25" 
         style={{ zIndex: 1050 }}>
      <button 
        onClick={onClose} 
        className="btn position-absolute end-0 top-0 m-2 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />
      </button>
      
      <div className="text-center mt-5">
        <FaUserCircle className="text-secondary fs-1" />
      </div>
      <hr />
      
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-danger fs-4 flex-grow-1">
            {!editing ? (
              <div 
                className="wd-name"
                onClick={() => setEditing(true)}
                style={{ cursor: 'pointer' }}
              >
                {user.firstName} {user.lastName}
              </div>
            ) : (
              <input
                type="text"
                className="form-control wd-edit-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveUser();
                }}
              />
            )}
          </div>
          {!editing ? (
            <FaPencil 
              onClick={() => setEditing(true)}
              className="text-primary fs-5 wd-edit"
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <FaCheck 
              onClick={saveUser}
              className="text-success fs-5 wd-save"
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>
      </div>

      <div className="mb-2">
        <b>Email:</b>{" "}
        {editing ? (
          <input
            type="email"
            className="form-control mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <span className="wd-email">{user.email}</span>
        )}
      </div>

      <div className="mb-2">
        <b>Role:</b>{" "}
        {editing ? (
          <select 
            className="form-select mt-1"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="STUDENT">Student</option>
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Admin</option>
            <option value="USER">User</option>
          </select>
        ) : (
          <span className="wd-roles">{user.role}</span>
        )}
      </div>

      <div className="mb-2">
        <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span>
      </div>
      
      <div className="mb-2">
        <b>Section:</b> <span className="wd-section">{user.section}</span>
      </div>
      
      <div className="mb-3">
        <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span>
      </div>

      <hr />
      
      <div className="d-flex justify-content-end gap-2">
        <button 
          onClick={onClose}
          className="btn btn-secondary wd-cancel"
        >
          Cancel
        </button>
        <button 
          onClick={() => deleteUser(uid)}
          className="btn btn-danger wd-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
}