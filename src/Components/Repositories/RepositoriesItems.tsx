interface RepositoriesItemsProps {
  repo: {
    name: string;
    description: string;
    created_at: string;
  }
}

export function RepositoriesItems({ repo }: RepositoriesItemsProps) {
  return (
    <>
      <h2>
        <strong className="text-xl">Woner: </strong>
        ElisioWander
      </h2>
      <span className="block py-5 ">
        <strong className="text-xl">Repositorie Name: </strong>
        {repo.name}
      </span>
      <p>
        <strong className="text-xl ">Description: </strong>
        {repo.description}
      </p>
      <span><strong>Created at: </strong>{repo.created_at}</span>
    </>
  );
}
