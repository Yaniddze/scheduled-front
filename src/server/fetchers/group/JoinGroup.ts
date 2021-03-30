import { FetchFunc } from '../../types';

type Request = {
    name: string
}

export const JoinGroup: FetchFunc<Request> = (client, request) =>
  client.post('/group/join', request);
