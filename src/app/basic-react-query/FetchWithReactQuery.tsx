import { fetchData } from "@/lib/fetch-utils";
import { Post } from "../api/posts/data";
import { useQuery } from "@tanstack/react-query";

export default function FetchWithReactQuery({
  category,
}: {
  category: string;
}) {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery<Post[]>({
    queryKey: ["posts", category],
    queryFn: () => fetchData<Post[]>(`/api/posts?category=${category}`),
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        {category.charAt(0).toUpperCase() + category.slice(1)} Posts
      </h2>
      {isLoading && <div className="text-green-500">Loading...</div>}
      {error && <div className="text-red-500">Error: {error.message}</div>}
      {posts?.length === 0 && !isError && !isLoading && (
        <div className="text-gray-500">No posts found</div>
      )}
      {posts && (
        <div className="text-blue-500">
          {posts.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}
