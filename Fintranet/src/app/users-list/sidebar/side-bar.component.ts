import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { selectUsersFiltersState, selectUsersState, UsersFilterAction } from "src/app/state";

@Component({
    selector: 'sidebar-filter',
    templateUrl: 'side-bar.component.html'
})

export class SideBarComponent implements OnInit {
    @Output() closeFilter = new EventEmitter();

    filters = new FormGroup({
        gender: new FormControl(['']),
        age: new FormControl(''),
        ageOption: new FormControl(''),
        eyeColor: new FormControl(['']),
        birthDate: new FormControl(['']),
    });

    genderTypes = ['male', 'female', 'other'];
    ageOptions = ['equal', 'greater', 'smaller'];
    eyeColors: Array<string> = [];

    constructor(private store: Store) { }

    submitFilter() {
        const filters: any = this.filters.value;
        this.store.dispatch(UsersFilterAction.filterUser({filters}));
        this.closeFilter.emit();
    }

    ngOnInit(): void {
        this.store.select(selectUsersState).subscribe(users => {
            users.map(user => {
                if (this.eyeColors.includes(user.eyeColor)) return;
                this.eyeColors.push(user.eyeColor)
            });
        })

        this.store.select(selectUsersFiltersState).subscribe(filters=>{
            this.filters.patchValue({
                age: filters.age,
                ageOption: filters.ageOption,
                birthDate: filters.birthDate,
                eyeColor: filters.eyeColor,
                gender: filters.gender
            })
        })
    }
}