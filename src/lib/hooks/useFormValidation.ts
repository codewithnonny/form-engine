import { z } from 'zod';
import { FieldConfig } from '../types/form';

export function useFormValidation(fields: FieldConfig[]) {
  const schema = z.object(
    fields.reduce((acc, field) => ({
      ...acc,
      [field.name]: field.validation || z.any()
    }), {})
  );

  return schema;
}