import { UserListFilter, Users } from "src/app/users-list/interfaces"

export const BirthDateFilter = (users: ReadonlyArray<Users>, filter: UserListFilter) => {
    if (!filter.birthDate || !filter.birthDate.length) return [...users];
    return users.filter((user) => {
        const birthDate = +new Date(user.birthDate);
        const startDate = +new Date(filter.birthDate[0]);
        if (filter.birthDate[1] !== null) {
            const endDate = +new Date(filter.birthDate[1]);
            return birthDate >= startDate && birthDate <= endDate
        } else {
            return Math.abs(birthDate - startDate) <= 86400000;
        }

    })
};