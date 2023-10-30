import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { GithubUsersService } from 'src/app/services/github-users.service';
import { searchUsers } from 'src/app/store/actions/GitHubSearch.actions';
import { GitHubUser, errorSelector, loadingSelector, userSelector } from 'src/app/store/store';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: any 
  loading : boolean = false
  error : any
  searchText: string

  constructor(private store: Store) {}

  ngOnInit() {
    this.fetchuserData()
    this.checkError()
    this.checkLoadingIndicator()
  }
  
  checkLoadingIndicator(){
    this.store.select(loadingSelector).subscribe((loading : boolean) => this.loading = loading)
  }

  fetchuserData(){
    this.store.select(userSelector).pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((userData : GitHubUser[]) => this.users = userData)
  }

  checkError(){
    this.store.select(errorSelector).subscribe((error : any) => this.error = error?.error?.message)
  }

  onSearchInput(){
    this.store.dispatch(searchUsers({ username: this.searchText }));
  }

}
