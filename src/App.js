import "./App.css";
import { posts } from "./data/posts";

export const App = () => {
  return (
    <>
      <header className="flex justify-between p-6 bg-[#333] text-[#fff] font-bold">
        <a href="/">Blog</a>
        <a href="/">お問い合わせ</a>
      </header>
      <div>
        <div className="my-8 mx-auto max-w-3xl px-4">
          <ul>
            {posts.map((post) => (
              <li key={post.id} className="flex flex-col  text-[#333] ">
                <a href={`/posts/${post.id}`}>
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
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
