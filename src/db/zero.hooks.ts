import { useZero as useZeroReact } from '@rocicorp/zero/react';
import { schema } from '@/schema';

export const useZero = () => {
  return useZeroReact<typeof schema>();
};
