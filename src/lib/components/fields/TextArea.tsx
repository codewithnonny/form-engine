import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldProps } from '../../types/field';
import { useFieldStyles } from '../../hooks/useFieldStyles';

export function TextArea({ field }: FieldProps) {
  const { register } = useFormContext();
  const { inputClassName } = useFieldStyles(field);

  return (
    <textarea
      {...register(field.name)}
      placeholder={field.placeholder}
      className={inputClassName}
    />
  );
}