import { fetchById } from "../../../lib/fetchPosts";

export default async function postPage({
  params,
}: {
  params: { postId: string } | Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post = await fetchById(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  return (
    <>
      {post === null ? (
        <h1>Post not found</h1>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </>
  );
}
