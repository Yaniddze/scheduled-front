import { DetailedGroup } from "../../server";
import { ActionType, ADD_GROUP, } from "./types";

export function AddGroup(group: DetailedGroup): ActionType {
    return {
        type: ADD_GROUP,
        payload: group,
    }
}