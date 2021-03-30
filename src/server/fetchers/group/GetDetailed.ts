import { FetchFunc } from '../../types';

type Request = {
    id: number
}

export type DetailedGroup = {
  id: number
  owner: boolean
  members: string[]
  tasks: {
    date: string
    subjects: Subject[]
  }[]
};

export type Subject = {
    id: number
    startDate: string
    durationInMinutes: number
    subjectName: string
    teacher: string
}

export const GetDetailedGroup: FetchFunc<Request, DetailedGroup> = (client, request) =>
  client.post('/group/detailed', request);
