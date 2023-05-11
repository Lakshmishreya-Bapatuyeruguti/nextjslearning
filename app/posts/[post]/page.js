import Navbar from "@/components/Navbar";

async function PostPage({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.post}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <div className="bg-slate-50">
      <Navbar />

      <div className=" m-4 text-center">
        <h1>{data.title}</h1>
        <h2>{data.body}</h2>
      </div>
    </div>
  );
}

export default PostPage;
