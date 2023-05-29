import { UserListFilter, Users } from "src/app/users-list/interfaces"

export const EyeColorFilter = (users: ReadonlyArray<Users>, filter: UserListFilter) => {
    if (!filter.eyeColor || !filter.eyeColor.length) return [...users];
    return users.filter((user) => filter.eyeColor.includes(user.eyeColor))
};