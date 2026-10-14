"use client";

import { useId, useMemo, useState } from "react";
import { DataTable } from "@/components/ui/DataTable";
import type { FacultyMember } from "@/content/faculty";

/** Searchable, filterable faculty table (mirrors the legacy search + designation filter). */
export function FacultyTable({ members }: { members: FacultyMember[] }) {
  const [query, setQuery] = useState("");
  const [designation, setDesignation] = useState("All");
  const id = useId();

  const designations = useMemo(() => ["All", ...Array.from(new Set(members.map((m) => m.designation))).sort()], [members]);
  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return members.filter((m) => (designation === "All" || m.designation === designation) && (!q || m.name.toLowerCase().includes(q) || m.designation.toLowerCase().includes(q)));
  }, [members, query, designation]);

  return (
    <div className="mt-10">
      <form role="search" className="grid gap-4 sm:grid-cols-[1fr_16rem] sm:items-end" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor={`${id}-search`} className="field-label">
            Search
          </label>
          <input id={`${id}-search`} type="search" className="field" placeholder="Faculty name or designation" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div>
          <label htmlFor={`${id}-designation`} className="field-label">
            Designation
          </label>
          <select id={`${id}-designation`} className="field" value={designation} onChange={(e) => setDesignation(e.target.value)}>
            {designations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </form>
      <p className="mt-4 text-sm text-stone-500" aria-live="polite">
        {rows.length === members.length ? `Showing all ${members.length} faculty members` : `Showing ${rows.length} of ${members.length} faculty members`}
      </p>
      {rows.length ? (
        <DataTable className="mt-4" caption="HARI University faculty" columns={["S.No", "Name", "Designation", "Category"]} rows={rows.map((m) => [m.sno, m.name, m.designation, m.category])} emphasise={[1]} />
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-sand-300 p-10 text-center text-stone-500">
          No faculty members match your search.{" "}
          <button type="button" className="font-semibold text-ink-900 underline" onClick={() => { setQuery(""); setDesignation("All"); }}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
