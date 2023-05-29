import { UserListFilter, Users } from "src/app/users-list/interfaces"

export const AgeFilter = (users: ReadonlyArray<Users>, filter: UserListFilter) => {
    return users.filter((user) => {
        if (filter.age && filter.age !== "") {
            switch (filter.ageOption) {
                case "greater":
                    return (+user.age) > (+filter.age)
                case "smaller":
                    return (+user.age) < (+filter.age)
                default:
                    return (+user.age) == (+filter.age)
            }
        }
        else return user
    })
};