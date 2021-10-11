import { Combinable } from 'utils/types';

export type ProductTagInfo = {
  id: string;
  name: string;
  deleted_at: Combinable;
  version: number;
};
