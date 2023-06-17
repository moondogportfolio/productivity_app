export type FieldType =
  | 'label'
  | 'text'
  | 'people'
  | 'status'
  | 'color'
  | 'calendar'
  | 'text';

export interface ColumnType {
  name: string;
  label: string;
  field: string;
  type: FieldType;
  align?: any;
  required?: boolean;
  sortable?: boolean;
  sort?: SortFunction;
  sortOrder?: 'ad' | 'da';
  format?: FormatFunction;
  style?: string;
  classes?: string;
  headerStyle?: string;
  headerClasses?: string;
}
type SortFunction = (a: any, b: any, rowA: any, rowB: any) => number;
type FormatFunction = (a: any, row: any) => any;
