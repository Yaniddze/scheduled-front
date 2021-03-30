import { UPDATE_TEMP, ActionType } from './types';

export function TempDateReducer(state: Date = new Date() , action: ActionType) {
    if (action.type === UPDATE_TEMP) {
        return action.payload;
    }

    return state;
}