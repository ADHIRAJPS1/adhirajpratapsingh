import Navbar from "@/components/navigation";

export default async function AboutUs() {
  console.log("AboutUs component rendered");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Failed to fetch posts");
  const data: { id: number; title: string }[] = await response.json();
  console.log("Fetched data:", data);
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">About Us Page</h1>
        <br></br>
        <p className="mt-4 text-gray-500">This is the about us page content.</p>
        <ul className="mt-4 space-y-2">
          {data.map((item) => (
            <li key={item.id} className="text-gray-700">
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
