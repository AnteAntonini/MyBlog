import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, subtitle, date } = post;

  return (
    <li className="mt-5 text-2xl dark:text-white/90 border-b last:border-b-0 first:border-b-0">
      <Link
        className="hover:text-blue-400 dark:hover:text-blue-500 transition duration-200 font-bold"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <p className="text-sm text-slate-300 my-1">{subtitle}</p>
      <br />
      {date && (
        <div className="flex items-center justify-between pb-4">
          <Link
            className="flex items-center dark:text-blue-400 hover:text-blue-500 hover:text-blue-500 transition duration-200 text-base"
            href={`/posts/${id}`}
          >
            Read more
            <AiOutlineArrowRight className="ml-2 w-4" />
          </Link>

          <p className="text-base text-slate-300">{date}</p>
        </div>
      )}
    </li>
  );
}
