import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, pipe } from 'rxjs';
import { Users } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor(private http:HttpClient) { }

  getUser():Observable<Users[]>{
    return this.http.get<Users[]>(environment.apiURL).pipe(map((users)=> users || []))
  }
}
