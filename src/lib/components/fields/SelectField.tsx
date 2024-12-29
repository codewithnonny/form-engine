import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldProps } from '../../types/field';
import { useFieldStyles } from '../../hooks/useFieldStyles';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export function SelectField({ field }: FieldProps) {
  const { setValue } = useFormContext();
  const { inputClassName } = useFieldStyles(field);

  return (
    <SelectPrimitive.Root onValueChange={(value) => setValue(field.name, value)}>
      <SelectPrimitive.Trigger className={inputClassName}>
        <SelectPrimitive.Value placeholder={field.placeholder} />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content>
        <SelectPrimitive.Viewport className="bg-white p-2 rounded-lg shadow-lg">
          {field.options?.map((option) => (
            <SelectPrimitive.Item
              key={option.value}
              value={option.value.toString()}
              className={cn(
                "relative flex items-center px-8 py-2 rounded-md text-sm",
                "hover:bg-gray-100 focus:bg-gray-100 cursor-pointer outline-none"
              )}
            >
              <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                <Check className="h-4 w-4" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          ))}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
}