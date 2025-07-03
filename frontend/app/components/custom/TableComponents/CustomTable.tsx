import React from "react";
import { useNavigate } from "react-router";
import { cn } from "~/lib/utils";

type TableProps = {
  thCells: React.ReactNode[];
  rowLinks?: string[];
  rows: React.ReactNode[][];
};

export const CustomTable = ({ thCells, rowLinks, rows }: TableProps) => {
    const navigate = useNavigate();
    
    return (
        <div className="overflow-hidden rounded-lg border border-border-page">
        <table className="table-auto w-full text-sm bg-primary">
            <thead>
            <tr className="h-12 text-secondary border-b border-border-page bg-primary">
                {thCells.map((cell, idx) => (
                <React.Fragment key={idx}>{cell}</React.Fragment>
                ))}
            </tr>
            </thead>
            <tbody>
            {rows.map((cells, rowIndex) => (
                <tr
                    key={rowIndex}
                    onClick={() => {
                        const link = rowLinks?.[rowIndex];
                        if (link) navigate(link);
                    }}
                    className={cn(
                        "transition h-16 border-b border-border-page",
                        rowLinks?.[rowIndex] && "cursor-pointer hover:bg-default"
                    )}
                >
                {cells.map((cell, idx) => (
                    <React.Fragment key={idx}>{cell}</React.Fragment>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };
