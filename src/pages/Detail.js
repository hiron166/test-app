import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      const data = await res.json();
      setPost(data.post);
    };
    fetcher();
  }, [id]);

  if (!post) {
    return (
      <div className="my-8 mx-auto max-w-3xl px-4">
        <p>投稿が見つかりません</p>
      </div>
    );
  }
  return (
    <>
      <div className="">
        <div>
          <div className="my-8 mx-auto max-w-3xl px-4">
            <div>
              <div className="h-auto max-w-full">
                <img src={post.thumbnailUrl} alt="" />
              </div>
            </div>
            <div className="p-4">
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
              <h1 className="text-2xl mt-2 mb-4">{`APIで取得した${post.title}`}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
