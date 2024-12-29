import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldProps } from '../../types/field';
import { useFieldStyles } from '../../hooks/useFieldStyles';

export function TextField({ field }: FieldProps) {
  const { register } = useFormContext();
  const { inputClassName } = useFieldStyles(field);

  return (
    <input
      type={field.type}
      {...register(field.name)}
      placeholder={field.placeholder}
      className={inputClassName}
    />
  );
}