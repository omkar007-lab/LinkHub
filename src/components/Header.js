import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <header className="bg-white border-b py-4">
      <div className="flex gap-6 justify-between max-auto px-8">
        <div className="flex gap-6">
          <Link href="/">LinkList</Link>
          <nav className="gap-4 flex text-sm items-center text-slate-500">
            <Link href="/about">About</Link>
            <Link href="/Pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <nav className="flex text-slate-500 text-sm gap-4">
          {/* If session exists, show user's name and sign-out */}
          {session ? (
            <>
              <span>{session.user.name}</span>
              <button onClick={() => signOut()} className="text-red-500">Sign Out</button>
            </>
          ) : (
            <>
              <Link href="/login">Sign In</Link>
              <Link href="/signup">Create Account</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

