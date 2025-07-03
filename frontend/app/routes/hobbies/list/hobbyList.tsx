import { Link, useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { CustomTable } from "~/components/custom/TableComponents/CustomTable";
import { TableCell } from "~/components/custom/TableComponents/TableCell";
import { Pagination } from "~/components/custom/TableComponents/Pagination";
import type { Hobby } from "~/lib/models/hobby";
import { hobbyListLoader } from "./hobbyList.loader";
import type { Route } from "./+types/hobbyList";

export const loader = hobbyListLoader;

export default function HobbyList({ loaderData }: Route.ComponentProps) {
  const {
    hobbies,
    total,
    page,
    limit,
  } = loaderData;

  const navigate = useNavigate();
  
  const goToPage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    if (!params.get("limit")) params.set("limit", limit.toString());
    navigate(`?${params.toString()}`);
  };

  const changeLimit = (newLimit: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("limit", newLimit.toString());
    params.set("page", "1");
    navigate(`?${params.toString()}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold">Hobbies</h1>
        <Button asChild>
          <Link to="/hobbies/new">New Hobby</Link>
        </Button>
      </div>

      <CustomTable
        thCells={[
          <TableCell variant="header" text="Img" />,
          <TableCell variant="header" text="Name" />,
          <TableCell variant="header" text="Description" visibleOn="md" />,
          <TableCell variant="header" text="Locations" visibleOn="lg" />,
        ]}
        rowLinks={hobbies.map((hob: Hobby) => `/hobbies/${hob.id}`)}
        rows={hobbies.map((hob: Hobby) => [
          <TableCell variant="image" imgSrc={hob.img} imgAlt={hob.name} />,
          <TableCell variant="text" text={hob.name} />,
          <TableCell variant="text" text={hob.description} visibleOn="md" />,
          <TableCell
            variant="text"
            text={hob.locations}
            visibleOn="lg"
            width="200"
          />,
        ])}
      />

      <Pagination
        page={page}
        limit={limit}
        total={total}
        onPageChange={goToPage}
        onLimitChange={changeLimit}
      />
    </div>
  );
}

