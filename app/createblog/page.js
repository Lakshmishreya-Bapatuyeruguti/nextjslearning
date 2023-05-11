"use client";
import { React, useState } from "react";
import Navbar from "@/components/Navbar";
function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function submitBlog() {
    const bloglist = JSON.parse(localStorage.getItem("allBlogs")) || [];
    bloglist.push({ title, content });
    localStorage.setItem("allBlogs", JSON.stringify(bloglist));
  }
  return (
    <>
      <Navbar />
      <div className="text-center">
        <div className=" mt-20">
          <h1 className="mb-20 text-3xl">Writing Blog...!!</h1>
          <input
            type="text"
            placeholder="Enter Title"
            className="h-10 w-3/4 bg-slate-100"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className=" mt-4 m-auto  ">
          <textarea
            placeholder="Start Blog"
            rows={20}
            cols={136}
            className="bg-slate-100 w-3/4"
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
        </div>
        <button
          className="bg-green-200 w-32 rounded-md h-16 mt-4"
          onClick={submitBlog}
        >
          ADD BLOG
        </button>
      </div>
    </>
  );
}

export default CreateBlogPage;
