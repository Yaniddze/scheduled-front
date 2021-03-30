import { FetchFunc } from '../../types';

type Request = {
    scheduleId: number
}

export const DeleteScheduled: FetchFunc<Request> = (client, request) =>
  client.delete(`/scheduled/${request.scheduleId}`);
