import React from "react";
import blogpic from "../pics/blog.png";
import Link from "next/link";
import Image from "next/image";
function Navbar() {
  return (
    <div className="mt-4 ml-4 flex justify-between">
      <Image src={blogpic} alt="logo" className="h-10 w-20" />
      <h1 className="mt-2 mr-4">Log Blog </h1>
      <ul className="flex ">
        <Link href="/">
          <li className="mr-6">Home</li>
        </Link>
        <Link href="/posts">
          <li className="mr-6">Posts</li>
        </Link>
        <Link href="/createblog">
          <li className="mr-24">Create Blog</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
