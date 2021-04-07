import { FetchFunc } from '../../types';

type Request = {
    groupId: string
    startDate: string
}

type Response = {
  id: number
  startDate: string
  durationInMinutes: number
  subjectName: string
  teacher: string
}

export const GetScheduled: FetchFunc<Request, Response[]> = (client, request) =>
  client.get(`/scheduled?groupId=${request.groupId}&date=${request.startDate}`);
