import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: PostParams) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

type PostParams = { params: { postId: string } };

export default async function Post({ params }: PostParams) {
  const posts = getSortedPostsData(); //deduped! No need to send request twice, already requested
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);

  return (
    <main className="px-6 pb-32 prose prose-lg  prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{date}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p className="font-medium">
          <Link
            href="/"
            className="group no-underline flex justify-start items-center dark:text-blue-400 hover:text-blue-500 transition duration-200"
          >
            <AiOutlineArrowLeft className="mr-2 group-hover:scale-x-125" />
            Back to home
          </Link>
        </p>
      </article>
    </main>
  );
}
