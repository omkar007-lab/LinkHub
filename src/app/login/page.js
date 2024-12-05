// src/app/login/page.js
import LoginWithGoogle from '@/components/buttons/LoginWithGoogle';

export default function LoginPage() {
  return (
    <main>
      <section className="pt-32">
        <div className="max-w-xl mb-8">
          <h1 className="text-6xl font-bold">
            Everything You Need All in One Link
          </h1>
          <h2 className="text-xl text-slate-500">
            Showcase your social profiles, contact details, and more on a single, seamless page.
          </h2>
        </div>

        <form className="flex shadow-black/40">
          <div className="flex items-center bg-white rounded-l-md overflow-hidden shadow-md">
            <span className="px-4">LinkList.to/</span>
            <input
              type="text"
              className="bg-white flex"
              placeholder="Enter text"
            />
          </div>
          <button
            className="px-6 py-4 bg-blue-500 text-white shadow-md rounded-r-md"
            type="submit"
          >
            Join for Free
          </button>
        </form>

        <LoginWithGoogle /> {/* Directly use the client component here */}
      </section>
    </main>
  );
}


/*'use client';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User Info:", result.user);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};*/