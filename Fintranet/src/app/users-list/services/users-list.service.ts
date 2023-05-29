import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Users } from '../interfaces';
import { environment } from 'src/environments/environment';

interface UserListApiResponse {
  limit: number,
  skip: number,
  total: number,
  users: Users[]
}

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  userRetrieved = false;

  constructor(private http: HttpClient) { }

  getUser(): Observable<Users[]> {
    return this.http.get<UserListApiResponse>(environment.apiURL).pipe(map((users) => {
      this.userRetrieved = true;
      return  users.users || []
    }))
  }
}
