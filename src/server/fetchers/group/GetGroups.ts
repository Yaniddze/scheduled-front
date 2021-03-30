import { FetchFunc } from '../../types';
import { Group } from '../../../models';

export const GetGroups: FetchFunc<undefined, Group[]> = (client) =>
  client.get('/group');
