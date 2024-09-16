import { FormField } from "@/types/form-fields";

export const formFields: FormField[] = [
  {
    type: "text",
    default_value: false,
  },
  {
    type: "text",
    default_value: "John Doe",
    validation: "^[A-Za-z]+$",
    value: "John Doe",
  },
  {
    type: "text",
    default_value: "",
    validation: "^[a-zA-Z0-9_]+$",
    value: "",
  },
  {
    type: "longtext",
    default_value: "Enter detailed description here.",
    validation: "^.{10,}$",
    value: "Enter detailed description here.",
  },
  {
    type: "longtext",
    default_value: "",
    validation: "^.{0,100}$",
    value: "",
  },
  {
    type: "dropdown",
    options: ["Option 1", "Option 2", "Option 3"],
    default_value: "Option 1",
    value: "Option 1",
  },
  {
    type: "number",
    default_value: 10,
    min_value: 0,
    max_value: 100,
    validation: "^[0-9]+$",
    value: 10,
  },
  {
    type: "number",
    default_value: 25,
    min_value: 10,
    max_value: 50,
    validation: "^([1-9][0-9]?|100)$",
    value: 25,
  },
  {
    type: "text",
    default_value: "",
    validation: "^[a-zA-Z ]+$",
    value: "",
  },
  {
    type: "longtext",
    default_value: "",
    validation: "^[a-zA-Z0-9 ]{0,500}$",
    value: "",
  },
  {
    type: "number",
    default_value: 0,
    min_value: -10,
    max_value: 10,
    validation: "^-?[0-9]+$",
    value: 0,
  },
];
