"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { Button, FormControl } from "react-bootstrap";
import * as client from "../client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER"
  });
  const router = useRouter();
  const dispatch = useDispatch();
  
  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      setProfile(account);
      dispatch(setCurrentUser(account)); // Update Redux with fresh data
    } catch (err: any) {
      router.push("/Account/Signin");
    }
  };
  
  const save = async () => {
    try {
      const updatedUser = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedUser));
      alert("Profile updated successfully!");
    } catch (err: any) {
      console.error(err);
      alert("Failed to update profile");
    }
  };
  
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    router.push("/Account/Signin");
  };
  
  useEffect(() => {
    fetchProfile();
  }, []);
  
  return (
    <div className="wd-profile-screen p-4">
      <h3>Profile</h3>
      <FormControl 
        id="wd-username" 
        className="mb-2"
        placeholder="Username"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })} 
      />
      <FormControl 
        id="wd-password" 
        className="mb-2"
        placeholder="Password"
        type="password"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })} 
      />
      <FormControl 
        id="wd-firstname" 
        className="mb-2"
        placeholder="First Name"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} 
      />
      <FormControl 
        id="wd-lastname" 
        className="mb-2"
        placeholder="Last Name"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} 
      />
      <FormControl 
        id="wd-dob" 
        className="mb-2" 
        type="date"
        value={profile.dob ? profile.dob.split('T')[0] : ''}
        onChange={(e) => setProfile({ ...profile, dob: e.target.value })} 
      />
      <FormControl 
        id="wd-email" 
        className="mb-2"
        placeholder="Email"
        type="email"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })} 
      />
      <select 
        className="form-control mb-2" 
        id="wd-role"
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Button 
        onClick={save} 
        variant="success"
        className="w-100 mb-2" 
        id="wd-update-btn">
        Update
      </Button>
      <Button 
        onClick={signout} 
        className="w-100 mb-2" 
        id="wd-signout-btn">
        Sign out
      </Button>
    </div>
  );
}