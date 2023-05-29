import { createReducer, on } from "@ngrx/store";
import { UserListFilter } from "../users-list/interfaces";
import { UsersFilterAction } from "./users.action";

const initialSeatchState:string = '';
const initialFilterState: UserListFilter = {
    gender: [],
    age: '',
    ageOption: '',
    eyeColor: [],
    birthDate: []
};

export const filerSearchReducer = createReducer(
    initialSeatchState,
    on(UsersFilterAction.searchUser, (_state, { search }) => search)
);

export const filersReducer = createReducer(
    initialFilterState,
    on(UsersFilterAction.filterUser, (_state, { filters }) => filters)
);