"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signin = async () => {
    try {
      console.log("Attempting signin with:", credentials); // Debug log
      const user = await client.signin(credentials);
      console.log("Signin successful:", user); // Debug log
      
      if (!user) {
        setError("Invalid credentials");
        return;
      }
      
      dispatch(setCurrentUser(user));
      router.push("/Dashboard");
    } catch (error: any) {
      console.error("Sign in failed:", error);
      setError(error.response?.data?.message || "Sign in failed");
    }
  };
  
  return (
    <div id="wd-signin-screen" className="w-25">
      <h1>Sign in</h1>
      {error && (
        <div className="alert alert-danger mb-2">
          {error}
        </div>
      )}
      <FormControl 
        value={credentials.username || ""}
        onChange={(e) => setCredentials({
          ...credentials, username: e.target.value 
        })}
        className="mb-2" 
        placeholder="username"
        id="wd-username"  
      />
      <FormControl 
        value={credentials.password || ""}
        onChange={(e) => setCredentials({
          ...credentials, password: e.target.value 
        })}
        className="mb-2" 
        placeholder="password"
        type="password" 
        id="wd-password" 
      />
      <Button onClick={signin} id="wd-signin-btn" className="w-100 mb-2">
        Sign in
      </Button>
      <Link id="wd-signup-link" href="/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}