import { z } from 'zod';
import { LucideIcon } from 'lucide-react';

export type FieldType = 
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'slider'
  | 'phone'
  | 'vehicleNumber';

export interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  validation?: z.ZodType<any>;
  options?: { label: string; value: string | number }[];
  fullWidth?: boolean;
  prefixIcon?: LucideIcon;
  mask?: string;
  rows?: number;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
}

export interface FormConfig {
  fields: FieldConfig[];
  onSubmit: (data: any) => Promise<void> | void;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}