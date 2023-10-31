import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { searchUsers } from 'src/app/store/actions/githubSearch.actions';
import { GitHubUser, errorSelector, loadingSelector, userSelector } from 'src/app/store/store';

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
