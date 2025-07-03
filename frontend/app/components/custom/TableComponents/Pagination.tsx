import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

type PaginationProps = {
  page: number;
  limit: number;
  total: number;
  onPageChange: (page: number) => void;
  onLimitChange?: (limit: number) => void;
  limits?: number[];
};

export const Pagination = ({
  page,
  limit,
  total,
  onPageChange,
  onLimitChange,
  limits = [5, 10, 20, 50],
}: PaginationProps) => {
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const from = (page - 1) * limit + 1;
  const to = Math.min(page * limit, total);

  return (
    <div className="px-2 flex flex-wrap justify-between items-center gap-4 text-sm text-muted-foreground">
      <span className="hidden lg:block">
        <b>{from}</b> – <b>{to}</b> rows of <b>{total}</b> items overall
      </span>

      <div className="flex items-center gap-2">
        {onLimitChange && (
          <div className="flex items-center gap-2">
            <span>Rows per page</span>
            <Select value={limit.toString()} onValueChange={(val: string) => onLimitChange(parseInt(val))}>
              <SelectTrigger className="w-[72px] h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {limits.map((v) => (
                  <SelectItem key={v} value={v.toString()}>
                    {v}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <span>Page {page} of {totalPages}</span>

        <Button variant="secondary" size="icon" onClick={() => onPageChange(1)} disabled={page <= 1}>
          <ChevronsLeft className="w-4 h-4" />
        </Button>
        <Button variant="secondary" size="icon" onClick={() => onPageChange(page - 1)} disabled={page <= 1}>
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button variant="secondary" size="icon" onClick={() => onPageChange(page + 1)} disabled={page >= totalPages}>
          <ChevronRight className="w-4 h-4" />
        </Button>
        <Button variant="secondary" size="icon" onClick={() => onPageChange(totalPages)} disabled={page >= totalPages}>
          <ChevronsRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
