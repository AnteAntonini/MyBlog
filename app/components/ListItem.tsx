import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, subtitle, date } = post;

  return (
    <li className="mt-5 py-4 dark:text-white/90  border-b last:border-b-0 border-current border-slate-500">
      <Link
        className="hover:text-blue-400 dark:hover:text-blue-500 transition duration-200 font-bold text-2xl"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <p className="text-base text-slate-300 my-2">{subtitle}</p>
      <br />
      {date && (
        <div className="flex items-center justify-between pb-4">
          <Link
            className="group flex items-center dark:text-blue-400 group-hover:text-blue-500 transition duration-200 text-base font-medium	"
            href={`/posts/${id}`}
          >
            Read more
            <AiOutlineArrowRight className="ml-2 w-4 group-hover:scale-x-125" />
          </Link>

          <p className="text-base text-slate-300">{date}</p>
        </div>
      )}
    </li>
  );
}
