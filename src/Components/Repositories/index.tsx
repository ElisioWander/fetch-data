import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { api } from "../../services/axios";
import { RepositoriesItems } from "./RepositoriesItems";

type Repositories = Array<{
  id: number;
  name: string;
  description: string;
  created_at: string;
}>;

interface RepositoriesProps {
  page: number;
}

export function Repositories({ page }: RepositoriesProps) {
  const { data: repositories } = useFetch<Repositories>(`users/ElisioWander/repos?per_page=3&page=${page}&order=name`, page)

  return (
    <>
      {repositories?.map((repo) => (
        <div key={repo.id} className="w-full p-5 mb-5 hover:scale-105 transition-all bg-zinc-800">
          <RepositoriesItems repo={repo} />
        </div>
      ))}
    </>
  );
}
