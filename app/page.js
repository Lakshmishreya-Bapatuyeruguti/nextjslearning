import Navbar from "@/components/Navbar";
// import { React } from "react";

function HomePage() {
  // const [fact, setFact] = useState("");
  // useEffect(() => {
  async function catfact() {
    const res = await fetch("https://catfact.ninja/fact", {
      cache: "no-store",
    });
    const data = await res.json();
    console.log(data.fact);
  }

  catfact();
  // }, [setFact, fact]);

  return (
    <div className=" bg-slate-50">
      <Navbar />
      <p></p>
    </div>
  );
}

export default HomePage;
