import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { FieldValues, UseFormProps } from 'react-hook-form';
import type { z } from 'zod';

export function useAppForm<T extends z.ZodType<FieldValues, FieldValues>, TContext>(
  schema: T,
  props?: UseFormProps<z.input<T>, TContext, z.output<T>>,
) {
  return useForm({
    resolver: zodResolver(schema),
    ...props,
  });
}
