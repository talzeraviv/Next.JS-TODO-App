import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <div className="text-white">
        <Link className="font-bold" href={"/"}>
          TODO APP 📃
        </Link>
        <p className="text-xs">
          Created with Next.js 13, TailwindCSS and Mongoose
        </p>
      </div>
      <Link className="bg-white p-2" href={"/AddTask"}>
        Add Task 📝
      </Link>
    </nav>
  );
}

export default Navbar;
