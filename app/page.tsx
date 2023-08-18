import Posts from "./components/Posts";

export default function Home() {
  return (
    <main>
      <p className="mt-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Ante Antonini</span>
        </span>
        <br />
        <span className="text-xl text-slate-300">
          Software engineer at <span className="text-rose-500">Combis</span>
        </span>
      </p>
      <Posts />
    </main>
  );
}
