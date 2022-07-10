import { useState } from "react";
import { Pagination } from "./Components/Pagination";
import { Repositories } from "./Components/Repositories";
import { useFetch } from "./hooks/useFetch";
import "./global.css";

export function App() {
  const [page, setPage] = useState(1)
  const { data, isFetching } = useFetch<[]>("users/ElisioWander/repos")

  const total = data?.length

  return (
    <div id="main" className="w-full max-w-[820px] m-auto px-5 py-10 ">
      <h1 className="text-3xl mb-3">Repositories</h1>
      <Repositories page={page} />

      { !isFetching && (
        <Pagination totalCountOfRegisters={total} currentPage={page} onPageChange={setPage} />
      ) }
    </div>
  );
}
