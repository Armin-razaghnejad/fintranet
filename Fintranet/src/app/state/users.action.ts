import { createActionGroup, props } from "@ngrx/store";
import { UserListFilter } from "../users-list/interfaces";
import { Users } from "../users-list/interfaces/user.interface";

export const UsersApiAction = createActionGroup({
    source: 'Users Api',
    events: {
        'Retrieved User List': props<{ users:ReadonlyArray<Users> }>()
    }
})

export const UsersFilterAction = createActionGroup({
    source: 'Users list action',
    events: {
        'Search User': props<{ search:string }>(),
        'Filter User': props<{ filters:UserListFilter }>()
    }
})