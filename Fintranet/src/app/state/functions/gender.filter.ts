import { UserListFilter, Users } from "src/app/users-list/interfaces"

export const GenderFilter = (users: ReadonlyArray<Users>, filter: UserListFilter) => {
    if (!filter.gender || !filter.gender.length) return [...users];
    return users.filter((user) => filter.gender.includes(user.gender))
};