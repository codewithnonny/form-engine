import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldProps } from '../../types/field';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

export function RadioField({ field }: FieldProps) {
  const { setValue } = useFormContext();

  return (
    <RadioGroupPrimitive.Root
      onValueChange={(value) => setValue(field.name, value)}
      className="flex flex-col space-y-2"
    >
      {field.options?.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupPrimitive.Item
            id={`${field.name}-${option.value}`}
            value={option.value.toString()}
            className="h-4 w-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-indigo-500" />
          </RadioGroupPrimitive.Item>
          <label
            htmlFor={`${field.name}-${option.value}`}
            className="text-sm font-medium text-gray-700"
          >
            {option.label}
          </label>
        </div>
      ))}
    </RadioGroupPrimitive.Root>
  );
}