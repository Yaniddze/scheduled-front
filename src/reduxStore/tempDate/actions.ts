import { ActionType, UPDATE_TEMP, } from "./types";

export function SetTemp(date: Date): ActionType {
    return {
        type: UPDATE_TEMP,
        payload: date,
    }
}