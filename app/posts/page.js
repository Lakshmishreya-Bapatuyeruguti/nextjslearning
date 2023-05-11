import Navbar from "@/components/Navbar";

import Link from "next/link";
async function PostsPage() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await res.json();

  return (
    <div className="bg-slate-50">
      <Navbar />
      {data.map((post, key) => {
        return (
          <div key={key} className=" m-4 text-center">
            <h1>{post.title}</h1>

            <Link href={`/posts/${post.id}`}>
              <button className="bg-green-100">View</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PostsPage;
