import { useTheme } from '../theme/ThemeContext';
import { FieldConfig } from '../types/form';
import { cn } from '../utils/cn';
import { useFormContext } from 'react-hook-form';

export function useFieldStyles(field: FieldConfig) {
  const theme = useTheme();
  const { formState: { errors } } = useFormContext();
  const error = errors[field.name];

  const inputClassName = cn(
    theme.input.base,
    error && theme.input.error,
    field.fullWidth && 'col-span-2'
  );

  const labelClassName = cn(
    theme.label.base,
    error && theme.label.error
  );

  return {
    inputClassName,
    labelClassName,
    errorClassName: theme.errorMessage
  };
}