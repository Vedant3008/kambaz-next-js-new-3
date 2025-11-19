"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      router.push("/Account/Profile");
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  };
  
  return (
    <div id="wd-signup-screen" className="w-25">
      <h1>Sign up</h1>
      <FormControl 
        value={user.username || ""}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username" 
        className="mb-2" 
      />
      <FormControl 
        value={user.password || ""}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password" 
        type="password" 
        className="mb-2" 
      />
      <FormControl 
        placeholder="verify password" 
        type="password" 
        className="mb-2" 
      />
      <Button onClick={signup} className="btn btn-primary w-100 mb-2">
        Sign up
      </Button>
      <Link href="/Account/Signin">Sign in</Link>
    </div>
  );
}