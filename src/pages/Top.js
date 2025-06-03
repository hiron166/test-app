import "../App.css";
import { posts } from "../data/posts";
import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <>
      <div>
        <div className="my-8 mx-auto max-w-3xl px-4">
          <ul>
            {posts.map((post) => (
              <li key={post.id} className="flex flex-col  text-[#333] ">
                <Link to={`/posts/${post.id}`}>
                  <div className=" mb-8 border p-4 border-[#ccc]">
                    <div className="flex justify-between">
                      <div className="text-xs text-[#888]">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </div>
                      <div className="flex">
                        {post.categories.map((category) => (
                          <div
                            key={category}
                            className="border rounded text-[#06c] border-[#06c] mr-2 px-1 py-0.5"
                          >
                            {category}
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-2xl mt-2 mb-4">{`APIで取得した${post.title}`}</p>
                    <div
                      dangerouslySetInnerHTML={{ __html: post.content }}
                      className="line-clamp-2"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
