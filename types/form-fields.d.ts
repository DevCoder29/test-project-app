export type FormFieldType = "text" | "longtext" | "dropdown" | "number" | "checkbox";

export interface FormField {
  type: FormFieldType;
  default_value?: string | number | boolean;
  options?: string[];
  value?: string | number | boolean;
  min_value?: number;
  max_value?: number;
  validation?: string;
}
