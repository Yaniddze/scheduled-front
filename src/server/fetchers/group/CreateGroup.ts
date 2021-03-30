import { FetchFunc } from '../../types';

type Request = {
    name: string
}

type Response = {
  id: number
};

export const CreateGroup: FetchFunc<Request, Response> = (client, request) =>
  client.post('/group', request);
