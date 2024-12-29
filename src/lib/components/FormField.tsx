import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldConfig } from '../types/form';
import { InputField } from './fields/InputField';
import { TextAreaField } from './fields/TextAreaField';
import { SelectField } from './fields/SelectField';
import { CheckboxField } from './fields/CheckboxField';
import { RadioField } from './fields/RadioField';
import { SliderField } from './fields/SliderField';
import { PhoneField } from './fields/PhoneField';
import { VehicleNumberField } from './fields/VehicleNumberField';
import { useFieldStyles } from '../hooks/useFieldStyles';
import { cn } from '../utils/cn';

const FieldComponents = {
  text: InputField,
  email: InputField,
  password: InputField,
  number: InputField,
  textarea: TextAreaField,
  select: SelectField,
  checkbox: CheckboxField,
  radio: RadioField,
  slider: SliderField,
  phone: PhoneField,
  vehicleNumber: VehicleNumberField,
};

export function FormField({ field }: { field: FieldConfig }) {
  const { formState: { errors } } = useFormContext();
  const { labelClassName, errorClassName } = useFieldStyles(field);
  const error = errors[field.name];

  const FieldComponent = FieldComponents[field.type];

  return (
    <div className={cn('mb-4', field.fullWidth ? 'col-span-2' : 'col-span-1')}>
      {field.type !== 'checkbox' && (
        <label className={labelClassName}>
          {field.label}
        </label>
      )}
      <FieldComponent field={field} />
      {error && (
        <p className={errorClassName}>
          {error.message?.toString()}
        </p>
      )}
    </div>
  );
}