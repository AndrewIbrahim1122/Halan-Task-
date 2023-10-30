import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {

  constructor(private http: HttpClient) { }

  getUsers(username : string){
   return this.http.get(environment.localUrl + 'search/users?q=' + username)
  }
}
