"use client";

import {useState, ReactElement} from "react";
import {Button} from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {FormField} from "@/types/form-fields";

interface DynamicFormProps {
    dynamicFormFields: FormField[];
}

type FormValues = Record<string, string | number | boolean | undefined>;

const DynamicForm = ({dynamicFormFields}: DynamicFormProps): ReactElement => {
    const [formValues, setFormValues] = useState<FormValues>({});

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const values: FormValues = {};
        formData.forEach((value, key) => {
            if (value instanceof File) {
                return;
            }
            values[key] = value as string;
        });

        setFormValues(values);
    };

    const renderField = (field: FormField, index: number): ReactElement | null => {
        const {
            type,
            default_value,
            options,
            value,
            min_value,
            max_value,
            validation,
        } = field;
        const fieldName = `field-${index}`;

        const commonProps = {
            name: fieldName,
            defaultValue: (value ?? default_value) as string | undefined,
        };

        switch (type) {
            case "text":
                return (
                    <Input
                        {...commonProps}
                        type="text"
                        pattern={validation}
                        title={validation ? `Invalid format, need to be ${validation}` : undefined}
                    />
                );
            case "longtext":
                return (
                    <Input
                        {...commonProps}
                        className="h-[100px]"
                        type="text"
                        title={validation ? "Invalid format" : undefined}
                        pattern={validation}
                    />
                );
            case "dropdown":
                return (
                    <Select {...commonProps} defaultValue={value?.toString()}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select an option"/>
                        </SelectTrigger>
                        <SelectContent>
                            {options?.map((option, idx) => (
                                <SelectItem key={idx} value={option as string}>
                                    {option}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                );
            case "number":
                return (
                    <Input
                        {...commonProps}
                        type="number"
                        min={min_value}
                        max={max_value}
                    />
                );
            case "checkbox":
                return (
                    <input
                        name={fieldName}
                        type="checkbox"
                        defaultChecked={(value ?? default_value) as boolean}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col gap-8 items-center w-full my-[50px]">
            <Card className="w-[500px]">
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Testing form</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2 items-start">
                        {dynamicFormFields.map(renderField)}
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Submit</Button>
                    </CardFooter>
                </form>
            </Card>


            {Object.keys(formValues).length > 0 && (
                <>
                    <Card className="w-fit p-4">
                        <pre>{JSON.stringify(formValues, null, 2)}</pre>
                    </Card>
                </>

            )}
        </div>
    );
};

export default DynamicForm;
