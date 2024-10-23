import Link from "next/link";

export default function Header() {
  return (
    <header className="py-10">
      <nav className="container">
        <ul className="flex items-center justify-center gap-10 text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My App</h1>
        <button>Logout</button>
      </div>
    </header>
  );
}
