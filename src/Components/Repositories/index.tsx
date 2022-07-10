import { useFetch } from "../../hooks/useFetch";
import { RepositoriesItems } from "./RepositoriesItems";
import { format } from "date-fns";
import { Loading } from "../Loading";

type Repositories = Array<{
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  html_url: string;
}>;

interface RepositoriesProps {
  page: number;
}

export function Repositories({ page }: RepositoriesProps) {
  const { data: repositories, isFetching } = useFetch<Repositories>(
    `users/ElisioWander/repos?per_page=3&page=${page}&order=name`,
    page
  );

  const formattedData = repositories?.map((repo) => {
    return {
      id: repo.id,
      title: repo.name,
      description: repo.description,
      createdAt: format(new Date(repo.created_at), "yy/dd/MM"),
      updatedAt: format(new Date(repo.updated_at), "yy/dd/MM"),
      link: repo.html_url,
    };
  });

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        formattedData?.map((repo) => (
          <div
            key={repo.id}
            className="w-full p-5 mb-5 hover:scale-105 transition-all rounded-sm bg-zinc-800"
          >
            <RepositoriesItems repo={repo} />
          </div>
        ))
      )}
    </>
  );
}