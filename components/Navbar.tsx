import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full p-8 flex justify-between items-center text-white">
      <h1 className="text-3xl font-medium">The GOAT's stats🐐</h1>
      <div className="flex gap-x-4">
        <Link href="https://bawantha.me" target="_blank">
        <p>Developer</p>
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
