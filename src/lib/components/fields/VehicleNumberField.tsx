import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldProps } from '../../types/field';
import { useFieldStyles } from '../../hooks/useFieldStyles';
import { IMaskInput } from 'react-imask';
import { Car } from 'lucide-react';

export function VehicleNumberField({ field }: FieldProps) {
  const { setValue } = useFormContext();
  const { inputClassName } = useFieldStyles(field);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Car className="h-5 w-5 text-gray-400" />
      </div>
      <IMaskInput
        mask="aa 00 aa 0000"
        definitions={{
          'a': /[A-Za-z]/
        }}
        prepare={(str) => str.toUpperCase()}
        onAccept={(value) => setValue(field.name, value)}
        placeholder={field.placeholder || "MH 01 AB 1234"}
        className={`${inputClassName} pl-10`}
      />
    </div>
  );
}