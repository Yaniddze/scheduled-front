import { DetailedGroup } from "../../server";

export const ADD_GROUP = 'ADD_GROUP';

export type ActionType = {
    type: string,
    payload: DetailedGroup,
}