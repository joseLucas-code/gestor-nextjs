import { LucideIcon } from 'lucide-react';
import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  IconName: LucideIcon;
  label?: string;
};
