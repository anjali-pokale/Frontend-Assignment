import * as React from 'react';

export type InputVariant = 'filled' | 'outlined' | 'ghost';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: InputVariant;
  size?: InputSize;
  /** Optional: show a clear (×) button when there is text */
  clearable?: boolean;
  /** Optional: when type="password" show a visibility toggle */
  passwordToggle?: boolean;
  /** Loading state (e.g., async validation) */
  loading?: boolean;
  /** HTML input props passthrough */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /** id override (otherwise generated for label/input association) */
  id?: string;
}
