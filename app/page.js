"use client";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

function HomePage({ params }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
        cache: "no-store",
      });
      const data = await res.json();
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="bg-slate-50">
      <Navbar />
      {data.map((post, key) => {
        return (
          <div key={key} className="bg-green-200 m-4 text-center">
            <h1>{post.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
