import { createReducer, on } from "@ngrx/store";
import { Users } from "../users-list/interfaces/user.interface";
import { UsersApiAction } from "./users.action";

const initialstate: ReadonlyArray<Users> = [];

export const UsersReducer = createReducer(
    initialstate,
    on(UsersApiAction.retrievedUserList, (_state, { users }) => users)
)