import { Link, useSearchParams } from "react-router";
import { useLoaderData } from "react-router";
import { handleLoadPositions } from "~/lib/loaders/positions/getAllPositions";
import type { Position } from "~/lib/models/position";
export const clientLoader = handleLoadPositions;

type LoaderData = {
  positions: Position[];
  total: number;
  page: number;
  pageSize: number;
  q: string;
};

export default function Positions() {
  const loaderData = useLoaderData() as LoaderData;

  if (!loaderData?.positions) {
    return <div>Načítám…</div>;
  }

  const { positions, total, page, pageSize, q } = loaderData;
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = Math.ceil(total / pageSize);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ q: e.target.value, page: "1" });
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto p-4">
      <input
        type="text"
        placeholder="Search positions"
        defaultValue={q}
        onChange={handleSearch}
        className="border rounded px-3 py-2 w-full"
      />

      <ul className="divide-y rounded border">
        {positions.map((pos) => (
          <li key={pos.id} className="p-3">
            {pos.name}
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center text-sm text-gray-600">
        <div>
          Showing {(page - 1) * pageSize + 1} –{" "}
          {Math.min(page * pageSize, total)} of {total}
        </div>
        <div className="flex gap-2">
          <Link
            to={`?q=${q}&page=${page - 1}`}
            className="px-2 py-1 border rounded disabled:opacity-50"
            aria-disabled={page <= 1}
          >
            Prev
          </Link>
          <Link
            to={`?q=${q}&page=${page + 1}`}
            className="px-2 py-1 border rounded disabled:opacity-50"
            aria-disabled={page >= totalPages}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
