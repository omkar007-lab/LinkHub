import Link from "next/link";

export default function Header () {
    return (
        <header className="bg-white border-b  py-4">
            <div className="flex gap-6 flex justify-between max-auto px-8">
            <div className="flex gap-6 ">
        <Link href={'/'}>LinkList</Link>
        <nav className="gap-4 flex  text-sm items-center text-slate-500">
        <Link href={'/about'}>About</Link>
        <Link href={'/Pricing'}>Pricing</Link>
        <Link href={'/pricing'}>Contact</Link>
        </nav>
        </div>
        <nav className="flex text-slate-500 text-sm gap-4">
          <Link href={'/login'}>Sing In</Link>
          <Link href={'/login'}>Create Account</Link>
        </nav>
            </div>
      </header>
    );
}