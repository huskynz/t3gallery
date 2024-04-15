import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/028e4255-a9d5-41ab-8167-595693d6d075-yal6yj.png",
  "https://utfs.io/f/6b3e155d-111d-40a6-b1b3-14c4fdea76b1-ruobx7.jpg",
  "https://utfs.io/f/6b3e155d-111d-40a6-b1b3-14c4fdea76b1-ruobx7.jpg",
  "https://utfs.io/f/7d3e0e76-590f-4a01-b869-2dbdaac3d19f-qodp7a.png",
  "https://utfs.io/f/3d25b78e-72d3-4d7a-9f2c-d91ec524f41f-j73sdy.png"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        mockImages.map((Image) => (
          <div key={Image.id} className="w48">
            <img src={Image.url} alt="img" />
          </div>
        ))
      }
       </div>
    </main>
  );
}
