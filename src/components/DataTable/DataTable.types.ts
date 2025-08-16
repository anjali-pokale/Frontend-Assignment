export type SortDirection = 'asc' | 'desc' | null;

export interface Column<T> {
  /** Header label */
  header: string;
  /** Accessor key or accessor function */
  accessor: keyof T | ((row: T) => React.ReactNode | string | number);
  /** Optional id (recommended when using accessor function) */
  id?: string;
  /** Whether column is sortable (default: true if accessor is key) */
  sortable?: boolean;
  /** Optional custom sort comparator */
  sortFn?: (a: T, b: T) => number;
  /** Column width hint */
  width?: string | number;
  /** Cell render override */
  cell?: (row: T) => React.ReactNode;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  /** Enables row selection (multiple by default) */
  selectable?: boolean;
  /** Optional: 'single' or 'multiple' selection mode (default: 'multiple') */
  selectionMode?: 'single' | 'multiple';
  /** Emits selected rows array when selection changes */
  onRowSelect?: (selectedRows: T[]) => void;
  /** Message for empty state */
  emptyMessage?: string;
  /** ARIA label for the table */
  ariaLabel?: string;
}
