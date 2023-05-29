import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { menuItem } from '../libs/menu-items';
import { UsersApiAction, UsersFilterAction , selectUsers } from '../state';
import { Users } from './interfaces';
import { UsersListService } from './services/users-list.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  search = '';
  menuItem = menuItem;
  users!: Users[];
  showFilter = false;

  constructor(private service: UsersListService, private store: Store) { }

  searchDispatch() {    
    this.store.dispatch(UsersFilterAction.searchUser({ search: this.search }))
  }

  ngOnInit(): void {
    this.store.select(selectUsers).subscribe(
      (users: any) => {
        if (this.service.userRetrieved)
          this.users = users
        else
          this.service.getUser().subscribe((users) => this.store.dispatch(UsersApiAction.retrievedUserList({ users })))
      }
    )
  }

}
