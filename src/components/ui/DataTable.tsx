import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DataTableProps {
  caption: string;
  captionHidden?: boolean;
  columns: string[];
  rows: ReactNode[][];
  className?: string;
  /** Column indexes to visually emphasise. */
  emphasise?: number[];
}

/** Semantic, responsive data table with a caption for assistive technologies. */
export function DataTable({ caption, captionHidden = true, columns, rows, className, emphasise = [] }: DataTableProps) {
  return (
    <div className={cn("overflow-x-auto rounded-2xl border border-sand-300 bg-white", className)}>
      <table className="table-x">
        <caption className={cn("px-4 py-3 text-left font-display text-lg text-ink-950", captionHidden && "sr-only")}>{caption}</caption>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className={cn(emphasise.includes(j) && "font-medium text-ink-950", j === 0 && "tabular-nums")}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
