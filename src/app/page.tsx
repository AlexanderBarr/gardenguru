import { headers } from "next/headers";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/900a0b46-f72a-4d58-b0f5-289ebec97381-jlo1ag.jpg",
  "https://utfs.io/f/7c9e12c1-a6a8-4cb3-8341-426ca9526028-usljjt.jpg",
  "https://utfs.io/f/507b94a3-a9f0-437f-9e82-a22ed7443e37-mm87lp.jpg",
  "https://utfs.io/f/2a80e6ea-1afd-4fa6-adba-747c4cc3ece9-nk26k9.png",
  "https://utfs.io/f/6570fdcc-8fc8-497d-8f1b-d9790f8e0a24-1r1n0p.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 p-4">
            <img src={image.url} alt="img" />
          </div>
        ))}
      </div>
      Hello gallary in progress
    </main>
  );
}
