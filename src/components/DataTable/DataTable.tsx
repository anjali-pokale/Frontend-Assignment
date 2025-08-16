import React, { useState } from "react";
import "./DataTable.css";

export interface Column<T> {
  key: keyof T;
  header: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const toggleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
    if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const handleRowSelect = (row: T) => {
    let newSelected;
    if (selectedRows.includes(row)) {
      newSelected = selectedRows.filter((r) => r !== row);
    } else {
      newSelected = selectable ? [...selectedRows, row] : [row];
    }
    setSelectedRows(newSelected);
    onRowSelect?.(newSelected);
  };

  if (loading) {
    return <div className="datatable-loading">Loading...</div>;
  }

  if (!data.length) {
    return <div className="datatable-empty">No data available</div>;
  }

  return (
    <table className="datatable">
      <thead>
        <tr>
          {selectable && <th></th>}
          {columns.map((col) => (
            <th key={String(col.key)} onClick={() => toggleSort(col.key)}>
              {col.header} {sortKey === col.key ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.id}>
            {selectable && (
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row)}
                  onChange={() => handleRowSelect(row)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={String(col.key)}>{String(row[col.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
