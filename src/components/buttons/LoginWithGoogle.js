// src/components/buttons/LoginWithGoogle.js

'use client';

import { signInWithGoogle } from "@/utils/firebase";

const LoginWithGoogle = () => {
  const handleLogin = async () => {
    try {
      // Call sign-in function
      const user = await signInWithGoogle();
      console.log("User Info:", user);

      // Send user data (email and uid) to the server-side API for MongoDB insertion
      const response = await fetch("/api/auth/[...nextauth]", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email, uid: user.uid }),
      });

      // Check if the response is OK
      if (!response.ok) {
        const errorText = await response.text(); // Get the error message as text for debugging
        console.error("Server responded with an error:", errorText);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Attempt to parse the JSON response
      const data = await response.json();

      if (data.success) {
        console.log("User authenticated successfully:", data.message);
      } else {
        console.error("Authentication failed:", data.error);
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <button
      className="mt-8 px-6 py-4 bg-blue-500 text-white shadow-md rounded-md"
      onClick={handleLogin}
    >
      Sign in with Google
    </button>
  );
};

export default LoginWithGoogle;
