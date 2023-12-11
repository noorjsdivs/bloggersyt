import Link from "next/link";
import { Post } from "../../types";
import Container from "./Container";
import Image from "next/image";
import { urlFor } from "@/lib/createClient";

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  return (
    <Container className="bg-gray-100 py-20 px-10 flex flex-col gap-10">
      {posts.map((post) => (
        <Link
          href={{
            pathname: `/post/${post?.slug?.current}`,
            query: { slug: post?.slug?.current },
          }}
          key={post?._id}
        >
          <div className="flex flex-col md:flex-row gap-10 bg-white rounded-md rounded-tr-md rounded-br-md hover:shadow-md duration-200">
            <div className="w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-md relative">
              <Image
                src={urlFor(post?.mainImage).url()}
                width={500}
                height={500}
                alt="blog post image"
                className="w-full max-h-[500px] object-cover group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md"
              />
              <div className="absolute top-0 left-0 bg-black/20 w-full h-full group-hover:hidden duration-200" />
              <div className="absolute hidden group-hover:inline-flex bottom-0 left-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 justify-center duration-200">
                <p className="text-lg font-semibold">Click to Read</p>
              </div>
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-between py-10 px-4">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  {post?.categories.map((item) => (
                    <p
                      key={item?._id}
                      className="text-xs uppercase text-blue-600 font-semibold"
                    >
                      {item?.title}
                    </p>
                  ))}
                </div>
                <h2 className="text-2xl font-semibold hover:text-orange-600 duration-200 cursor-pointer">
                  {post?.title}
                </h2>
                <p className="text-gray-500">{post?.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-500">
                  {new Date(post?._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src={urlFor(post?.author?.image).url()}
                    width={200}
                    height={200}
                    alt="author image"
                    className="rounded-full object-cover w-10 h-10"
                  />
                  <p className="text-sm font-medium">{post?.author?.name}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Container>
  );
};

export default BlogContent;
