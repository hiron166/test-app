import "./App.css";
import { posts } from "./data/posts";

export const App = () => {
  return (
    <>
      <container>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="flex flex-col text-[#333]">
              <div className="mb-8 border p-4 border-gray-300">
                <div className="flex justify-between">
                  <div className="text-xs text-[#888]">{new Date(post.createdAt).toLocaleDateString()}</div>
                  <div className="border rounded text-[#06c] border-[#06c]">
                    {post.categories}
                  </div>
                </div>
                <p>{`APIで取得した${post.title}`}</p>
                <div>{post.content}</div>
              </div>
            </li>
          ))}
        </ul>
      </container>
    </>
  );
};
