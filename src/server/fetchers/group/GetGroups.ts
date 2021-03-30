import { FetchFunc } from '../../types';

export type Group = {
  id: number
  name: string
};

export const GetGroups: FetchFunc<undefined, Group[]> = (client) =>
  client.get('/group');
