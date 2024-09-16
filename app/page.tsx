import { formFields } from "@/constants/form-fields";
import DynamicForm from "@/model/dynamic-form/dynamic-form";

export default async function Home() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen w-screen">
      <DynamicForm dynamicFormFields={formFields} />
    </div>
  );
}
