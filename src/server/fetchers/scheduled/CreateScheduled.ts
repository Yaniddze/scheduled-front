import { FetchFunc } from '../../types';

type Request = {
    groupId: number
    startDate: Date
    durationInMinutes: number
    subjectId: number
}

type Response = {
  id: number
};

export const CreateScheduled: FetchFunc<Request, Response> = (client, request) =>
  client.put('/scheduled', {...request, startDate: request.startDate.toUTCString()});
