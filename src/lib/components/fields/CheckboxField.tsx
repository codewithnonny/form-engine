import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldProps } from '../../types/field';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

export function CheckboxField({ field }: FieldProps) {
  const { setValue, watch } = useFormContext();
  const value = watch(field.name);

  return (
    <div className="flex items-center space-x-2">
      <CheckboxPrimitive.Root
        id={field.name}
        checked={value}
        onCheckedChange={(checked) => setValue(field.name, checked)}
        className="h-4 w-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <CheckboxPrimitive.Indicator>
          <Check className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label
        htmlFor={field.name}
        className="text-sm font-medium text-gray-700"
      >
        {field.label}
      </label>
    </div>
  );
}