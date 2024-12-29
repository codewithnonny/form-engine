import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldProps } from '../../types/field';
import { useFieldStyles } from '../../hooks/useFieldStyles';

export function TextAreaField({ field }: FieldProps) {
  const { register } = useFormContext();
  const { inputClassName } = useFieldStyles(field);

  return (
    <textarea
      {...register(field.name)}
      placeholder={field.placeholder}
      rows={field.rows || 4}
      className={inputClassName}
    />
  );
}