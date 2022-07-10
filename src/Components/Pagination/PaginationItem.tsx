interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <button
        className="w-5 h-5 bg-zinc-700 text-zinc-100 p-5 mx-2 rounded-full inline-flex items-center justify-center "
        disabled
      >
        {number}
      </button>
    );
  }

  return (
    <>
      <button
        className="w-5 h-5 bg-zinc-800 hover:brightness-75 text-zinc-100 p-5 mx-2 rounded-full inline-flex items-center justify-center"
        onClick={() => onPageChange(number)}
      >
        {number}
      </button>
    </>
  );
}
