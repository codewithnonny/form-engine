import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldProps } from '../../types/field';
import { useFieldStyles } from '../../hooks/useFieldStyles';
import { cn } from '../../utils/cn';
import { IMaskInput } from 'react-imask';

export function InputField({ field }: FieldProps) {
  const { register, setValue } = useFormContext();
  const { inputClassName } = useFieldStyles(field);

  if (field.mask) {
    return (
      <div className="relative">
        {field.prefixIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {field.prefixIcon}
          </div>
        )}
        <IMaskInput
          {...register(field.name)}
          mask={field.mask}
          onAccept={(value) => setValue(field.name, value)}
          placeholder={field.placeholder}
          className={cn(
            inputClassName,
            field.prefixIcon && 'pl-10'
          )}
        />
      </div>
    );
  }

  return (
    <div className="relative">
      {field.prefixIcon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {field.prefixIcon}
        </div>
      )}
      <input
        type={field.type}
        {...register(field.name)}
        placeholder={field.placeholder}
        className={cn(
          inputClassName,
          field.prefixIcon && 'pl-10'
        )}
      />
    </div>
  );
}