import { FetchFunc } from '../../types';

export type SubjectAuto = {
  id: number
  name: string
  teacherName: string
};

export const GetSubjects: FetchFunc<undefined, SubjectAuto[]> = (client) =>
  client.get('/subject');
