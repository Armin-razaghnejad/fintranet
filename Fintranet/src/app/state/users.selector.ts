import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserListFilter } from "../users-list/interfaces";
import { Users } from "../users-list/interfaces/user.interface";
import { AgeFilter, BirthDateFilter, EyeColorFilter, GenderFilter } from "./functions";

export const selectUsersState = createFeatureSelector<ReadonlyArray<Users>>('users');
export const selectUsersSearchState = createFeatureSelector<string>('search');
export const selectUsersFiltersState = createFeatureSelector<UserListFilter>('filters');

export const selectUsers = createSelector(
    selectUsersState,
    selectUsersSearchState,
    selectUsersFiltersState,
    (users, search, filters) => {
        let filteredUsers: Users[] = [];
        filteredUsers = AgeFilter(users,filters);
        filteredUsers = GenderFilter(filteredUsers,filters);
        filteredUsers = EyeColorFilter(filteredUsers,filters);
        filteredUsers = BirthDateFilter(filteredUsers,filters);
        if (!search.length) return filteredUsers;
        return filteredUsers.filter((user) => {
            return user.firstName.toLowerCase().includes(search) || user.lastName.toLowerCase().includes(search)
        })
    }
)

// function ageFilter(users: ReadonlyArray<Users>, filter: UserListFilter) {
//     return users.filter((user) => {
//         if (filter.age !== "") {
//             switch (filter.ageOption) {
//                 case "greater":
//                     return user.age > filter.age
//                 case "smaller":
//                     return user.age < filter.age
//                 default:
//                     return user.age == filter.age
//             }
//         }
//         else return user
//     })
// };

// function ageFilter(users: ReadonlyArray<Users>, filter: UserListFilter) {
