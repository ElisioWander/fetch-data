interface RepositoriesItemsProps {
  repo: {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    link: string;
  };
}

export function RepositoriesItems({ repo }: RepositoriesItemsProps) {
  return (
    <>
      <h2 className="mb-2">
        <strong className="text-xl">Woner: </strong>
        ElisioWander
      </h2>
      <div className="flex flex-col gap-3">
        <ul>
          <li className="text-zinc-300">
            <strong className="text-zinc-100 text-lg">Title: </strong>
            {repo.title}
          </li>
          <li className="text-zinc-300">
            <strong className="text-zinc-100 text-lg">Created at: </strong>
            {repo.createdAt}
          </li>
          <li className="text-zinc-300">
            <strong className="text-zinc-100 text-lg">Updated at: </strong>
            {repo.updatedAt}
          </li>
          <li className="text-zinc-300">
            <strong className="text-zinc-100 text-lg">Link: </strong>
            <a
              href={`${repo.link}`}
              target="_blank"
              className="hover:underline underline-offset-2 hover:brightness-75 transition-all"
            >
              Go to repositorie
            </a>
          </li>
        </ul>

        <div>
          <span className="text-lg font-bold">Description</span>
          <p className="text-zinc-300">{repo.description}</p>
        </div>
      </div>
    </>
  );
}
