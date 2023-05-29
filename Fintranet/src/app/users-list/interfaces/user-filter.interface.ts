export interface UserListFilter {
    gender: string[],
    age: string,
    ageOption: 'equal' | 'greater' | 'smaller' | '',
    eyeColor: string[],
    birthDate: string[]
}