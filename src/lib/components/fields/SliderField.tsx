import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldProps } from '../../types/field';
import * as SliderPrimitive from '@radix-ui/react-slider';

export function SliderField({ field }: FieldProps) {
  const { setValue } = useFormContext();

  return (
    <SliderPrimitive.Root
      defaultValue={[field.defaultValue || 0]}
      max={field.max || 100}
      min={field.min || 0}
      step={field.step || 1}
      onValueChange={([value]) => setValue(field.name, value)}
      className="relative flex items-center select-none touch-none w-full h-5"
    >
      <SliderPrimitive.Track className="bg-gray-200 relative grow rounded-full h-1">
        <SliderPrimitive.Range className="absolute bg-indigo-500 rounded-full h-full" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block w-5 h-5 bg-white border-2 border-indigo-500 rounded-full hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
    </SliderPrimitive.Root>
  );
}