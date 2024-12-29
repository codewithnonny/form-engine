import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormConfig } from "../types/form";
import { FormField } from "./FormField";
import { useFormValidation } from "../hooks/useFormValidation";

export function Form({ config }: { config: FormConfig }) {
  const schema = useFormValidation(config.fields);

  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      await config.onSubmit(data);
      config.onSuccess?.(data);
    } catch (error) {
      config.onError?.(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        {config.fields.map((field) => (
          <FormField key={field.name} field={field} />
        ))}
        <button
          type="submit"
          className="col-span-2 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
}
