export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function fetchPosts(url: string): Promise<Post[]> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data as Post[];
}
export async function fetchById(url: string): Promise<Post | null> {
  const res = await fetch(url);
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`Failed to fetch post: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data as Post;
}
