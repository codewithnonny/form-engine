import { useFormContext } from "react-hook-form";
import { FieldProps } from "../../types/field";
import { useFieldStyles } from "../../hooks/useFieldStyles";
import { IMaskInput } from "react-imask";
import { Phone } from "lucide-react";

export function PhoneField({ field }: FieldProps) {
  const { setValue } = useFormContext();
  const { inputClassName } = useFieldStyles(field);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Phone className="h-5 w-5 text-gray-400" />
      </div>
      <IMaskInput
        mask="+{91} 00000-00000"
        onAccept={(value) => setValue(field.name, value)}
        placeholder={field.placeholder || "+91 98765-43210"}
        className={`${inputClassName} pl-10`}
      />
    </div>
  );
}
