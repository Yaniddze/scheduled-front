import { DetailedGroup } from '../../server';
import { ADD_GROUP, ActionType } from './types';

export function GroupsReducer(state: DetailedGroup[] = [] , action: ActionType) {
    if (action.type === ADD_GROUP) {
        return [...state.filter(x => x.id != action.payload.id), action.payload];
    }

    return state;
}