import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, subtitle, date } = post;

  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <p className="text-sm my-1">{subtitle}</p>
      <br />
      {date && (
        <div className="flex items-center justify-between">
          <div className="flex items-center dark:text-blue-400">
            <Link className="mr-2" href={`/posts/${id}`}>
              Read more
            </Link>
            <AiOutlineArrowRight />
          </div>

          <p className="text-sm ">{date}</p>
        </div>
      )}
    </li>
  );
}
